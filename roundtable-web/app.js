// 圆桌会议 Prompt 生成器主逻辑

// 默认前 N 个人格
const DEFAULT_PRESELECT = 3;

// 启动入口
function boot() {
  // 应用 i18n（首次启动）
  if (typeof applyI18n === "function") {
    // 已由 lang.js 在 DOMContentLoaded 调用
  } else {
    document.addEventListener("DOMContentLoaded", renderPersonaList);
  }
  renderPersonaList();
  update();
}

// 初始化人格列表
function renderPersonaList() {
  const list = document.getElementById("personaList");
  if (!list) return;
  list.innerHTML = "";

  const isEn = (typeof currentLang !== "undefined" && currentLang === "en");

  const keys = Object.keys(PERSONAS);
  keys.forEach((key, idx) => {
    const p = PERSONAS[key];
    const checked = idx < DEFAULT_PRESELECT;
    // 根据语言选择显示字段（deng 没有 _en 时 fallback）
    const displayName = isEn && p.nameEn ? p.nameEn : p.name;
    const displayDesc = isEn && p.descEn ? p.descEn : p.desc;
    // ⭐ 标记逻辑：中文显示 ⭐；英文版已含 ⭐
    const starHtml = (key === "zhangxuefeng" && !isEn)
      ? ' <span class="star-mark" title="就业现实主义代表">⭐</span>'
      : "";
    const item = document.createElement("label");
    item.className = "persona-item" + (checked ? " selected" : "");
    item.dataset.key = key;
    item.innerHTML = `
      <input type="checkbox" value="${key}"${checked ? " checked" : ""}>
      <div class="info">
        <div class="name">${displayName}${starHtml}</div>
        <div class="desc">${displayDesc}</div>
      </div>
    `;
    list.appendChild(item);
  });

  // 监听选择
  if (!list._listenerAttached) {
    list.addEventListener("change", e => {
      if (e.target.type === "checkbox") {
        e.target.closest(".persona-item").classList.toggle("selected", e.target.checked);
        update();
      }
    });
    list._listenerAttached = true;
  }
}

// 随机选 N 个推荐人格
function pickRandom(n) {
  const allKeys = Object.keys(PERSONAS);
  const shuffled = [...allKeys].sort(() => Math.random() - 0.5);
  return new Set(shuffled.slice(0, n));
}

// 全不选 / 推荐3个 / 推荐5个
function selectNone() {
  document.querySelectorAll("#personaList input").forEach(cb => {
    cb.checked = false;
    cb.closest(".persona-item").classList.remove("selected");
  });
  update();
}

function selectDefault() {
  const picked = pickRandom(3);
  document.querySelectorAll("#personaList input").forEach(cb => {
    const isPicked = picked.has(cb.value);
    cb.checked = isPicked;
    cb.closest(".persona-item").classList.toggle("selected", isPicked);
  });
  update();
}

function selectFive() {
  const picked = pickRandom(5);
  document.querySelectorAll("#personaList input").forEach(cb => {
    const isPicked = picked.has(cb.value);
    cb.checked = isPicked;
    cb.closest(".persona-item").classList.toggle("selected", isPicked);
  });
  update();
}

// 获取当前选中的 persona 对象
function getSelectedPersonas() {
  const keys = Array.from(document.querySelectorAll("#personaList input:checked")).map(cb => cb.value);
  return keys.map(k => ({ key: k, ...PERSONAS[k] }));
}

// 模式选择
let currentMode = "quick";

function getMode() {
  return currentMode;
}

function setMode(btn) {
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentMode = btn.dataset.mode;
  const hint = document.getElementById("modeHint");
  if (hint) {
    const key = currentMode === "quick" ? "modeHintQuick" : "modeHintDeep";
    hint.textContent = (typeof t === "function" ? t(key) : hint.textContent);
  }
  update();
}

// 渲染单个人格
function renderPersona(p) {
  const anchorLines = p.anchors.map((a, i) => `  ${i + 1}. ${a}`).join("\n");
  // 优先使用 i18n 标签，否则使用中文
  const lbl = (k, cn) => (typeof t === "function" ? t(k) : cn);
  // 根据语言选 name/desc
  const isEn = (typeof currentLang !== "undefined" && currentLang === "en");
  const displayName = isEn && p.nameEn ? p.nameEn : p.name;
  const displayDesc = isEn && p.descEn ? p.descEn : p.desc;
  return `### ${displayName} — ${displayDesc}

- **${lbl("lblStyle", "说话风格")}**：${p.style}
- **${lbl("lblAnchors", "追问方向")}**：
${anchorLines}
- **${lbl("lblHonesty", "诚实规则")}**：${p.honesty}
- **${lbl("lblAntiPattern", "反套路")}**：${p.antiPattern}`;
}

// 生成完整 prompt
function buildPrompt() {
  const topic = document.getElementById("topic").value.trim();
  if (!topic) return null;
  const personas = getSelectedPersonas();
  if (personas.length === 0) return null;
  const mode = getMode();

  const personasSection = personas.map(renderPersona).join("\n\n");
  const lbl = (k, cn) => (typeof t === "function" ? t(k) : cn);

  if (mode === "quick") {
    return `# ${lbl("promptTitleQuick", "圆桌会议（快速共识模式）")}

## ${lbl("promptTopicLabel", "议题")}

${topic}

## ${lbl("lblParticipants", "参与者")}

${personasSection}

## ${lbl("lblRequirements", "要求")}

${lbl("qIntro", "请一次性完成以下5步，输出结构化结论。每步尽量精简，重点在Step 5的结构化产出。")}

**${lbl("qStep1", "Step 1：各抒己见")}** — ${lbl("qStep1Desc", "每位参与者100字左右回应议题，以[身份：人格名]开头。")}

**${lbl("qStep2", "Step 2：交叉反驳")}** — ${lbl("qStep2Desc", "每位参与者用1-2句话反驳一位其他参与者的核心论点，显式称呼对方。")}

**${lbl("qStep3", "Step 3：推理综合")}** — ${lbl("qStep3Desc", "列出共识点和分歧点。")}

**${lbl("qStep4", "Step 4：共识裁决")}** — ${lbl("qStep4Desc", "一句话结论。分歧标记\"待定\"。")}

**${lbl("qStep5", "Step 5：结构化产出")}** — ${lbl("qStep5Desc", "按以下格式输出：")}

## ${lbl("lblConclusion", "结论")}
[${lbl("pOnePara", "一段话")}]

## ${lbl("lblActionable", "可操作信号")}
| # | ${lbl("thAction", "行动")} | ${lbl("thEffect", "预期效果")} | ${lbl("thPersp", "负责视角")} |
|---|------|---------|---------|

## ${lbl("lblConsensus", "共识矩阵")}
| ${lbl("thIssue", "议题点")} | ${lbl("thLevel", "共识度")} | ${lbl("thDir", "共识方向")} | ${lbl("thDissent", "分歧原因")} |
|--------|--------|---------|---------|

## ${lbl("lblBlindspots", "盲点")}
1. ...
2. ...

## ${lbl("lblConfidence", "置信度")}
[${lbl("pHML", "高/中/低")}] — [${lbl("pReason", "理由")}]
`;
  } else {
    return `# ${lbl("promptTitleDeep", "圆桌会议（深度圆桌模式 · 5步执行）")}

## ${lbl("promptTopicLabel", "议题")}

${topic}

## ${lbl("lblParticipants", "参与者")}

${personasSection}

## ${lbl("lblRules", "讨论规则")}

1. **${lbl("r1", "身份标注")}**：${lbl("r1Desc", "每条发言必须以 `[身份：人格名]` 开头")}
2. **${lbl("r2", "交叉质疑")}**：${lbl("r2Desc", "至少一位参与者必须质疑另一位参与者的核心论点")}
3. **${lbl("r3", "结论可操作")}**：${lbl("r3Desc", "最终结论必须包含具体可执行的行动项")}
4. **${lbl("r4", "盲点显式化")}**：${lbl("r4Desc", "必须列出本次讨论未覆盖的重要视角")}

## ${lbl("lblFlow", "讨论流程")}

${lbl("dIntro", "请严格按以下5步执行：")}

### ${lbl("dStep1", "Step 1：各抒己见")}

${lbl("dStep1Desc", "每位参与者从自己的视角回应议题，200字左右。")}

### ${lbl("dStep2", "Step 2：交叉反驳")}

${lbl("dStep2Desc", '每位参与者至少反驳一位其他参与者的核心论点。反驳时必须显式称呼对方：`"我不同意{{对方名}}的观点，因为……"`')}

### ${lbl("dStep3", "Step 3：推理综合")}

${lbl("dStep3Desc", "基于各方观点和反驳，综合出共识与分歧：")}
- ${lbl("dStep3a", "列出各方一致同意的结论")}
- ${lbl("dStep3b", "列出各方仍然分歧的观点及分歧原因")}

### ${lbl("dStep4", "Step 4：共识裁决")}

${lbl("dStep4Desc", '输出最终结论。共识优先，裁决次之。分歧点标记为"待定"而非强行统一。')}

### ${lbl("dStep5", "Step 5：结构化产出")}

${lbl("dStep5Desc", "按以下格式输出：")}

\`\`\`
## ${lbl("lblConclusion", "结论")}

[${lbl("dConclusionDesc", "一段话总结最终结论")}]

## ${lbl("lblActionable", "可操作信号")}

| # | ${lbl("thAction", "行动")} | ${lbl("thEffect", "预期效果")} | ${lbl("thPersp", "负责视角")} |
|---|------|---------|---------|
| 1 | ... | ... | ... |

## ${lbl("lblConsensus", "共识矩阵")}

| ${lbl("thIssue", "议题点")} | ${lbl("thLevel", "共识度")} | ${lbl("thDir", "共识方向")} | ${lbl("thDissent", "分歧原因")} |
|--------|--------|---------|---------|
| ... | ${lbl("pHML", "高/中/低")} | ... | ... |

## ${lbl("lblBlindspots", "盲点")}

1. [${lbl("dBlindspotDesc", "本次讨论未覆盖的重要视角")}]
2. [...]

## ${lbl("lblConfidence", "置信度")}

[${lbl("pHML", "高/中/低")}] — [${lbl("pReason", "理由")}]
\`\`\`
`;
  }
}

// 更新预览
function update() {
  const preview = document.getElementById("preview");
  const prompt = buildPrompt();

  if (!prompt) {
    const topic = document.getElementById("topic").value.trim();
    if (!topic) {
      preview.innerHTML = '<div class="empty-state">' + (typeof t === "function" ? t("emptyNoTopic") : "请先输入议题") + '</div>';
    } else {
      preview.innerHTML = '<div class="empty-state">' + (typeof t === "function" ? t("emptyNoPersona") : "请至少选择一位参与人格") + '</div>';
    }
    return;
  }

  preview.textContent = prompt;
}

// 复制到剪贴板
async function copyPrompt() {
  const prompt = buildPrompt();
  if (!prompt) {
    showToast(typeof t === "function" ? t("toastFillFirst") : "请先填写议题并选择参与人格", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(prompt);
    showToast("✓ " + (typeof t === "function" ? t("toastCopied") : "已复制到剪贴板"));
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = prompt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("✓ " + (typeof t === "function" ? t("toastCopied") : "已复制到剪贴板"));
  }
}

// 下载为 .md
function downloadPrompt() {
  const prompt = buildPrompt();
  if (!prompt) {
    showToast(typeof t === "function" ? t("toastFillFirst") : "请先填写议题并选择参与人格", true);
    return;
  }
  const blob = new Blob([prompt], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `roundtable-${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("✓ " + (typeof t === "function" ? t("toastDownloaded") : "已下载"));
}

// Toast 提示
function showToast(msg, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.background = isError ? "#c53030" : "#2d3748";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

// 议题输入监听
document.addEventListener("input", e => {
  if (e.target.id === "topic") update();
});

// 启动 - 等待 lang.js 的 i18n 应用后再 boot，确保 i18n 不被覆盖
function startApp() {
  if (typeof applyI18n === "function") applyI18n();
  boot();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}

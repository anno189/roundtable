// i18n 字典
const I18N = {
  en: {
    // Hero
    heroLabel: "Prompt Generator · Roundtable",
    heroTitle: "Roundtable Prompt Generator",
    heroSubtitle: "Enter topic → Pick personas → Copy prompt → Paste into any LLM",

    // Guide
    guideLabel: "How to Use",
    guideText: '<strong>Step 1</strong> Enter your discussion topic on the left; <strong>Step 2</strong> Check the personas to participate (first 3 selected by default); <strong>Step 3</strong> Copy the prompt generated on the right; <strong>Step 4</strong> Paste it into any LLM (ChatGPT / Claude / Gemini / Qwen, etc.), wait ~30 seconds, and review the multi-perspective analysis.',

    // Left section: Mode
    sectionTypeMode: "Discussion Mode",
    sectionTitleMode: "Choose Depth",
    modeQuick: "Quick Consensus",
    modeDeep: "Deep Roundtable",
    modeHintQuick: "Quick Consensus: 1 LLM call, outputs conclusion + confidence + blindspots in 30s. For daily decisions.",
    modeHintDeep: "Deep Roundtable: two rounds of statements + two rounds of refutations, ~90-120s. For major decisions.",

    // Left section: Personas
    sectionTypePersonas: "Participants",
    sectionTitlePersonas: "Choose Personas",
    btnSelectNone: "Clear All",
    btnRecommend3: "Suggest 3",
    btnRecommend5: "Suggest 5",
    titleRecommend3: "Randomly select 3",
    titleRecommend5: "Randomly select 5",

    // Right: Topic
    fieldLabelTopic: "Topic",
    topicPlaceholder: "e.g., Should I change jobs? The new offer is 30% higher, but in an unfamiliar domain...",

    // Right: Output
    sectionTypeOutput: "Generated Output",
    sectionTitleOutput: "Copyable Prompt",
    labelMarkdown: "Markdown · Prompt",
    emptyState: "Fill in the topic and select personas above; the prompt will appear here",
    btnCopy: "Copy to Clipboard",
    btnDownload: "Download .md",
    toastCopied: "Copied to clipboard",

    // LLM links label
    llmLinksLabel: "Then paste into:",

    // LLM names
    llmDoubao: "Doubao",
    llmKimi: "Kimi",
    llmDeepSeek: "DeepSeek",
    llmTongyi: "Qwen",
    llmWenxin: "ERNIE",
    llmZhipu: "ChatGLM",
    llmHunyuan: "Hunyuan",

    // Footer
    footerLine1: 'Roundtable Prompt Generator · <a href="https://github.com/FartherQuant/roundtable" target="_blank" rel="noopener">GitHub</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener">CC BY-SA 4.0</a>',
    footerSub: "© 2026 Roundtable · Let AI help you think from multiple perspectives",
    footerKami: "Visual Design · Kami Paper System · Paper Aesthetic © 2026",

    // Lang switch
    langSwitchTo: "中",

    // Prompt templates (for the generator output)
    promptTitleQuick: "Roundtable (Quick Consensus Mode)",
    promptTopicLabel: "Topic",
    promptTitleDeep: "Roundtable (Deep Roundtable Mode)",

   // Mode names embedded in prompt
    modeNameQuick: "Quick Consensus",
    modeNameDeep: "Deep Roundtable",

    // Prompt labels (used in generated markdown)
    lblStyle: "Speaking Style",
    lblAnchors: "Questioning Directions",
    lblHonesty: "Honesty Rules",
    lblAntiPattern: "Anti-Pattern",
    lblParticipants: "Participants",
    lblRequirements: "Requirements",
    lblConclusion: "Conclusion",
    lblActionable: "Actionable Signals",
    lblConsensus: "Consensus Matrix",
    lblBlindspots: "Blindspots",
    lblConfidence: "Confidence",
    lblRules: "Discussion Rules",
    lblFlow: "Discussion Flow",
    thAction: "Action",
    thEffect: "Expected Effect",
    thPersp: "Responsible Perspective",
    thIssue: "Issue Point",
    thLevel: "Consensus Level",
    thDir: "Consensus Direction",
    thDissent: "Dissent Reason",
    pOnePara: "One paragraph",
    pHML: "High/Medium/Low",
    pReason: "reason",
    qIntro: "Please complete all 5 steps in one pass and output a structured conclusion. Be concise; focus on the structured output in Step 5.",
    qStep1: "Step 1: Position Statements",
    qStep1Desc: "Each participant responds in ~100 words, beginning with [Identity: Name].",
    qStep2: "Step 2: Cross-Refutation",
    qStep2Desc: "Each participant uses 1-2 sentences to challenge another participant's core argument, explicitly naming the target.",
    qStep3: "Step 3: Reasoning Synthesis",
    qStep3Desc: "List consensus points and divergence points.",
    qStep4: "Step 4: Consensus Adjudication",
    qStep4Desc: 'One-sentence conclusion. Mark divergences as "TBD".',
    qStep5: "Step 5: Structured Output",
    qStep5Desc: "Use the format below:",
    r1: "Identity Tagging",
    r1Desc: "Each statement must begin with `[Identity: Name]`",
    r2: "Cross-Refutation",
    r2Desc: "At least one participant must challenge another participant's core argument",
    r3: "Actionable Conclusion",
    r3Desc: "The final conclusion must include concrete, executable action items",
    r4: "Explicit Blindspots",
    r4Desc: "Important perspectives not covered in the discussion must be listed",
    dIntro: "Please strictly follow the 5 steps below:",
    dStep1: "Step 1: Position Statements",
    dStep1Desc: "Each participant responds to the topic from their own perspective in ~200 words.",
    dStep2: "Step 2: Cross-Refutation",
    dStep2Desc: 'Each participant must challenge at least one other participant\'s core argument. Refutations must explicitly name the target: `"I disagree with {Name}\'s view, because..."`',
    dStep3: "Step 3: Reasoning Synthesis",
    dStep3Desc: "Based on all positions and refutations, synthesize consensus and divergence:",
    dStep3a: "List conclusions all parties agree on",
    dStep3b: "List points of disagreement and their root causes",
    dStep4: "Step 4: Consensus Adjudication",
    dStep4Desc: 'Output the final conclusion. Consensus first, adjudication second. Mark unresolved disagreements as "TBD" rather than forcing consensus.',
    dStep5: "Step 5: Structured Output",
    dStep5Desc: "Output the result in the following format:",
    dConclusionDesc: "One paragraph summarizing the final conclusion",
    dBlindspotDesc: "Important perspective not covered in this discussion",
    emptyNoTopic: "Please enter a topic first",
    emptyNoPersona: "Please select at least one persona",
    toastFillFirst: "Please enter a topic and select a persona first",
    toastDownloaded: "Downloaded"
  },

  zh: {
    // Prompt labels (used in generated markdown) — Chinese
    lblStyle: "说话风格",
    lblAnchors: "追问方向",
    lblHonesty: "诚实规则",
    lblAntiPattern: "反套路",
    lblParticipants: "参与者",
    lblRequirements: "要求",
    lblConclusion: "结论",
    lblActionable: "可操作信号",
    lblConsensus: "共识矩阵",
    lblBlindspots: "盲点",
    lblConfidence: "置信度",
    lblRules: "讨论规则",
    lblFlow: "讨论流程",
    thAction: "行动",
    thEffect: "预期效果",
    thPersp: "负责视角",
    thIssue: "议题点",
    thLevel: "共识度",
    thDir: "共识方向",
    thDissent: "分歧原因",
    pOnePara: "一段话",
    pHML: "高/中/低",
    pReason: "理由",
    qIntro: "请一次性完成以下5步，输出结构化结论。每步尽量精简，重点在Step 5的结构化产出。",
    qStep1: "Step 1：各抒己见",
    qStep1Desc: "每位参与者100字左右回应议题，以[身份：人格名]开头。",
    qStep2: "Step 2：交叉反驳",
    qStep2Desc: "每位参与者用1-2句话反驳一位其他参与者的核心论点，显式称呼对方。",
    qStep3: "Step 3：推理综合",
    qStep3Desc: "列出共识点和分歧点。",
    qStep4: "Step 4：共识裁决",
    qStep4Desc: '一句话结论。分歧标记"待定"。',
    qStep5: "Step 5：结构化产出",
    qStep5Desc: "按以下格式输出：",
    r1: "身份标注",
    r1Desc: "每条发言必须以 `[身份：人格名]` 开头",
    r2: "交叉质疑",
    r2Desc: "至少一位参与者必须质疑另一位参与者的核心论点",
    r3: "结论可操作",
    r3Desc: "最终结论必须包含具体可执行的行动项",
    r4: "盲点显式化",
    r4Desc: "必须列出本次讨论未覆盖的重要视角",
    dIntro: "请严格按以下5步执行：",
    dStep1: "Step 1：各抒己见",
    dStep1Desc: "每位参与者从自己的视角回应议题，200字左右。",
    dStep2: "Step 2：交叉反驳",
    dStep2Desc: '每位参与者至少反驳一位其他参与者的核心论点。反驳时必须显式称呼对方：`"我不同意{{对方名}}的观点，因为……"`',
    dStep3: "Step 3：推理综合",
    dStep3Desc: "基于各方观点和反驳，综合出共识与分歧：",
    dStep3a: "列出各方一致同意的结论",
    dStep3b: "列出各方仍然分歧的观点及分歧原因",
    dStep4: "Step 4：共识裁决",
    dStep4Desc: '输出最终结论。共识优先，裁决次之。分歧点标记为"待定"而非强行统一。',
    dStep5: "Step 5：结构化产出",
    dStep5Desc: "按以下格式输出：",
    dConclusionDesc: "一段话总结最终结论",
    dBlindspotDesc: "本次讨论未覆盖的重要视角",
    emptyNoTopic: "请先输入议题",
    emptyNoPersona: "请至少选择一位参与人格",
    toastFillFirst: "请先填写议题并选择参与人格",
    toastDownloaded: "已下载"
  },

  zh: {
    // Hero
    heroLabel: "Prompt Generator · 圆桌会议",
    heroTitle: "圆桌会议 Prompt 生成器",
    heroSubtitle: "输入议题 → 选择参与人格 → 复制 Prompt → 粘贴到任何 LLM 对话框",

    // Guide
    guideLabel: "使用步骤",
    guideText: '<strong>第一步</strong>在左侧输入你要讨论的问题；<strong>第二步</strong>勾选要参与讨论的人格（默认前 3 个）；<strong>第三步</strong>复制右侧生成的 Prompt；<strong>第四步</strong>粘贴到 ChatGPT / Claude / Gemini / 通义千问等任意 LLM，等待 30 秒左右，查看多视角分析结果。',

    // Left section: Mode
    sectionTypeMode: "讨论模式 · Mode",
    sectionTitleMode: "选择深度",
    modeQuick: "快速共识",
    modeDeep: "深度圆桌",
    modeHintQuick: "快速共识：1 次 LLM 调用，30 秒内输出结论 + 置信度 + 盲点。适合日常决策。",
    modeHintDeep: "深度圆桌：两轮发言 + 两轮反驳，约 90-120 秒。适合重大决策。",

    // Left section: Personas
    sectionTypePersonas: "参与人格 · Personas",
    sectionTitlePersonas: "选择参与者",
    btnSelectNone: "全不选",
    btnRecommend3: "推荐 3 个",
    btnRecommend5: "推荐 5 个",
    titleRecommend3: "随机选3个",
    titleRecommend5: "随机选5个",

    // Right: Topic
    fieldLabelTopic: "议题 · Topic",
    topicPlaceholder: "例：我要不要换工作？新公司薪资高 30%，但方向是我不太熟悉的领域...",

    // Right: Output
    sectionTypeOutput: "生成结果 · Output",
    sectionTitleOutput: "可复制的 Prompt",
    labelMarkdown: "Markdown · Prompt",
    emptyState: "上方填写议题、选择人格后，这里会自动生成 Prompt",
    btnCopy: "复制到剪贴板",
    btnDownload: "下载 .md",
    toastCopied: "已复制到剪贴板",

    // LLM links label
    llmLinksLabel: "复制后粘贴到：",

    // LLM names
    llmDoubao: "豆包",
    llmKimi: "Kimi",
    llmDeepSeek: "DeepSeek",
    llmTongyi: "通义千问",
    llmWenxin: "文心一言",
    llmZhipu: "智谱清言",
    llmHunyuan: "腾讯混元",

    // Footer
    footerLine1: '圆桌会议 Prompt 生成器 · <a href="https://github.com/FartherQuant/roundtable" target="_blank" rel="noopener">GitHub</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank" rel="noopener">CC BY-SA 4.0</a>',
    footerSub: "© 2026 Roundtable · 让 AI 帮你从多个视角思考",
    footerKami: '视觉设计 · <a href="https://github.com/tw93/Kami" target="_blank" rel="noopener">Kami Paper System</a> · 纸面美学 © 2026',

    // Lang switch
    langSwitchTo: "EN"
  }
};

// 当前语言（默认中文，符合国内用户体验）
let currentLang = (localStorage.getItem("roundtable_lang") || "zh");

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.zh[key]) || key;
}

function applyI18n() {
  // 遍历所有 [data-i18n] 元素
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });
  // 遍历所有 [data-i18n-placeholder] 元素
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
  // 遍历所有 [data-i18n-title] 元素
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    el.setAttribute("title", t(key));
  });
  // 重新渲染人格列表（语言变了）
  if (typeof renderPersonaList === "function") {
    renderPersonaList();
  }
  // 重新生成 prompt
  if (typeof update === "function") {
    update();
  }
  // 更新 html lang
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
}

function toggleLang() {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("roundtable_lang", currentLang);
  applyI18n();
}

// 启动时自动应用
document.addEventListener("DOMContentLoaded", applyI18n);

# 圆桌会议 · Prompt 生成器

一个零依赖的纯静态网页，输入议题 → 选择人格 → 一键复制可用的 Prompt → 粘贴到任何 LLM 对话框即可。

## 特性

- 🚀 **零依赖**：纯 HTML + CSS + JavaScript，无需任何后端
- 🔓 **无 API Key**：用户不需要任何账号或 API
- 📋 **一键复制**：生成的 Prompt 一键复制到剪贴板
- 💾 **可下载**：支持下载为 .md 文件
- 📱 **响应式**：手机/平板/电脑均可使用
- 🌐 **LLM 无关**：兼容 ChatGPT / Claude / Gemini / 通义千问 / 智谱清言 / 文心一言 / DeepSeek 等所有 LLM

## 文件结构

```
roundtable-web/
├── index.html      # 主页面（HTML + CSS）
├── personas.js     # 5 个人格配方数据
└── app.js          # 主逻辑（事件处理 + Prompt 生成）
```

## 视觉设计 · Kami Paper System

页面整体继承 **Kami 纸面美学**（Kami Paper System）的设计语言：

- **暖色羊皮纸** — 主体底色 `#f5f4ed`（`--parchment`），文字 `#141413`（`--near-black`），模拟手抄本纸张的温润质感
- **油墨蓝** — 主色 `#1B365D`（`--brand`），取自传统蓝黑墨水，用于标签、按钮焦点、引用线与链接
- **衬线层级** — 标题与正文使用 `TsangerJinKai02` 锦书体衬线字（搭配思源宋体回退），通过字重 500 与字号差形成清晰层级；代码区使用 `JetBrains Mono` 等宽字
- **克制的图形语言** — 仅使用 1px 实线 / 3px 实线 / 1px 虚线作为分隔；避免阴影、渐变、装饰图形；状态反馈以颜色与边框变化为主
- **微动效** — 卡片 hover 微微抬升、复制成功 toast 淡入，符合"翻动书页"的隐喻

设计 tokens 集中在 `index.html` 顶部的 `:root` 变量中，所有颜色 / 字号 / 圆角 / 阴影均由此派生，便于主题扩展。

页脚包含 Kami Paper System 的版权署名：**视觉设计 · [Kami Paper System](https://github.com/tw93/Kami) · 纸面美学 © 2026**。

## 部署到 Vercel

### 方式 1：拖拽部署（最简单）
1. 访问 https://vercel.com/new
2. 把 `roundtable-web` 文件夹直接拖入页面
3. 等待几十秒，即可在 `xxx.vercel.app` 访问

### 方式 2：命令行
```bash
cd roundtable-web
npx vercel --prod
```

### 方式 3：Git 集成
1. 把 `roundtable-web` 推到 GitHub
2. 在 Vercel 导入仓库
3. 配置：`Output Directory` 留空（根目录就是静态文件）

## 本地预览

```bash
cd roundtable-web
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 使用方法

1. 打开页面
2. 在"议题"框输入要讨论的问题
3. 勾选参与讨论的人格（默认推荐3人：卡尼曼+芒格+邓小平）
4. 选择讨论模式（快速共识 / 深度圆桌）
5. 右侧自动生成完整 Prompt
6. 点击"复制到剪贴板"
7. 粘贴到任意 LLM 对话框
8. 等待 30 秒 ~ 2.5 分钟，查看多视角分析结果

## 自定义人格

编辑 `personas.js`，按以下结构添加：

```javascript
window.PERSONAS = {
  mypersona: {
    name: "我的角色",
    desc: "一句话定位",
    style: "说话风格",
    anchors: ["追问1", "追问2", "追问3"],
    honesty: "诚实规则",
    antiPattern: "反套路"
  }
};
```

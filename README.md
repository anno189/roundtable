# Roundtable

> 让 AI 帮你从多个视角思考 · [Web 生成器](https://roundtable.1dian.site/) · CC BY-SA 4.0 · [GitHub](https://github.com/FartherQuant/roundtable)

一个开源的多角色结构化讨论 prompt 工程框架——让 LLM 扮演不同思维视角的角色，交叉质疑，形成共识。
配套 21 个内置人格配方（卡尼曼、芒格、稻盛和夫、乔布斯……），覆盖认知偏差、逆向思维、东方经营哲学、心性经营等维度。

## 快速开始

### 方式一：Web 生成器（推荐，零门槛）
访问 [FartherQuant/roundtable](https://github.com/FartherQuant/roundtable) 部署的网页，输入议题、勾选人格、复制 prompt、粘贴到任意 LLM。

### 方式二：直接使用模板
1. 打开 [templates/quick-consensus.md](templates/quick-consensus.md)
2. 将 `{议题}` 替换为你的问题
3. 复制到 ChatGPT / Claude / 任何 LLM
4. 约30秒获得结构化讨论结果

### 方式三：命令行
```bash
pip install -e .
export OPENAI_API_KEY=sk-...
roundtable "你的议题"                            # 默认3人，快速模式
roundtable "你的议题" -p kahneman,munger,hayek  # 自定义人格
roundtable "你的议题" -m deep                   # 深度模式
```

## 内置人格（21 个）

### 核心方法论（5）
| 人格 | 视角 | 核心方法 |
|------|------|---------|
| 卡尼曼 | 认知偏差审计 | 检查认知陷阱、追问基率、寻找系统1痕迹 |
| 芒格 | 逆向排除 | 如何让事情必然失败？排除愚蠢选项 |
| 邓小平 | 务实渐进 | 先做小范围试验、用结果说话、判断时机 |
| 哈耶克 | 知识论批判 | 追问知识条件、寻找信号机制、检测全知假设 |
| 达利欧 | 原则驱动诊断 | 机器视角审视、可信度加权、五步不跳步 |

### 内心·存在（4）
乔布斯 · 纳瓦尔 · 里德·霍夫曼 · 乔丹·彼得森

### 实用·具体（5）
张雪峰 ⭐ · 马斯克 · 李开复 · 薛兆丰 · 何帆

### 时代·竞争（4）
凯文·凯利 · 彼得·蒂尔 · 保罗·格雷厄姆 · 村上春树

### 美德与心性（3）
本杰明·富兰克林 · 稻盛和夫 · 丹·艾瑞里

> ⭐ = 推荐入门（最具现实冲击力的视角）

## 两种模式

- **快速共识**：1次LLM调用，30秒出结果 → [templates/quick-consensus.md](templates/quick-consensus.md)
- **深度圆桌**：两轮发言+两轮反驳，90-120秒出结果 → [templates/deep-roundtable.md](templates/deep-roundtable.md)

## 自定义人格

参考 [persona-schema.yaml](persona-schema.yaml) 定义新人格，4个要素：

1. **speaking_style** — 说话风格（1句话）
2. **stance_anchors** — 追问方向（2-5条，动词开头）
3. **honesty_rules** — 诚实规则（什么情况下承认自己的方法不适用）
4. **anti_pattern** — 反套路（核心方法过度延伸时会犯什么错）

贡献新人格请参考 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 项目结构

```
roundtable/
  chain.yaml              # 5步圆桌链定义
  rules.yaml              # 5条核心规则
  persona-schema.yaml     # 人格配方Schema
  personas/               # 21个人格配方（YAML）
  templates/              # prompt模板
    quick-consensus.md    # 快速共识模式
    deep-roundtable.md    # 深度圆桌模式
  output-schemas/         # 产出格式定义
  src/roundtable/         # Python包源码
  roundtable-web/         # Web生成器（纯HTML/JS，零依赖）
```

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) — 允许商用，但衍生作品必须同协议开源。

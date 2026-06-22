# Roundtable

> Let AI help you think from multiple perspectives · [Web Generator](https://roundtable.1dian.site/) · CC BY-SA 4.0 · [GitHub](https://github.com/FartherQuant/roundtable) · [简体中文](README.zh.md)

An open-source multi-perspective structured discussion prompt framework — let an LLM play different thinking personas, cross-challenge each other, and form a consensus.
Bundled with 21 built-in persona recipes (Kahneman, Munger, Inamori, Jobs, …) covering cognitive bias, inversion thinking, Eastern management philosophy, and mind cultivation.

## Quick Start

### Option 1: Web Generator (Recommended, Zero Barrier)
Visit [https://roundtable.1dian.site/](https://roundtable.1dian.site/), enter your topic, check personas, copy the prompt, and paste it into any LLM.

### Option 2: Direct Template Use
1. Open [templates/quick-consensus.md](templates/quick-consensus.md)
2. Replace `{topic}` with your question
3. Copy to ChatGPT / Claude / any LLM
4. Get a structured discussion result in ~30 seconds

### Option 3: Command Line
```bash
pip install -e .
export OPENAI_API_KEY=sk-...
roundtable "your topic"                              # default 3 personas, quick mode
roundtable "your topic" -p kahneman,munger,hayek    # custom personas
roundtable "your topic" -m deep                     # deep mode
```

## Built-in Personas (21)

### Core Methodology (5)
| Persona | Perspective | Core Method |
|---------|-------------|-------------|
| Kahneman | Cognitive Bias Auditor | Check cognitive traps, probe base rates, find System 1 traces |
| Munger | Inversion & Multi-Model | How to guarantee failure? Exclude stupid options |
| Hayek | Knowledge Epistemology | Probe knowledge conditions, find signal mechanisms, detect omniscience assumption |
| Dalio | Principles-Driven Diagnosis | Machine perspective, credibility weighting, five steps without skipping |

### Inner & Existential (4)
Jobs · Naval · Reid Hoffman · Jordan Peterson

### Practical & Concrete (5)
Zhang Xuefeng ⭐ · Musk · Kai-Fu Lee · Xue Zhaofeng · He Fan

### Era & Competition (4)
Kevin Kelly · Peter Thiel · Paul Graham · Haruki Murakami

### Virtue & Mind Cultivation (3)
Benjamin Franklin · Inamori Kazuo · Dan Ariely

> ⭐ = Recommended for beginners (most impact-grounded perspective)

## Two Modes

- **Quick Consensus**: 1 LLM call, 30s output → [templates/quick-consensus.md](templates/quick-consensus.md)
- **Deep Roundtable**: Two rounds of statements + two rounds of refutations, 90-120s output → [templates/deep-roundtable.md](templates/deep-roundtable.md)

## Custom Personas

Refer to [persona-schema.yaml](persona-schema.yaml) to define a new persona, 4 elements:

1. **speaking_style** — One-sentence speaking style
2. **stance_anchors** — Questioning directions (2-5 items, verb-led)
3. **honesty_rules** — When to admit one's own method doesn't apply
4. **anti_pattern** — What error occurs when one's core method is over-extended

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Project Structure

```
roundtable/
  chain.yaml              # 5-step roundtable chain definition
  rules.yaml              # 5 core rules
  persona-schema.yaml     # Persona recipe schema
  personas/               # 21 persona recipes (YAML)
  templates/              # Prompt templates
    quick-consensus.md    # Quick consensus mode
    deep-roundtable.md    # Deep roundtable mode
  output-schemas/         # Output format definitions
  src/roundtable/         # Python package source
  roundtable-web/         # Web generator (pure HTML/JS, zero deps)
```

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en) — Free for commercial use, derivative works must adopt the same license.

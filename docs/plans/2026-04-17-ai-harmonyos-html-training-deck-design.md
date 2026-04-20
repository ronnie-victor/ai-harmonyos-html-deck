# AI HarmonyOS HTML Training Deck Design

**Goal:** Build a polished HTML slide deck for a 90-minute internal R&D sharing session about practical AI-assisted HarmonyOS development, using a first-person narrative and a visual style closer to modern infographic content than traditional corporate slides.

**Audience:** Primarily engineers, with some managers listening in.

**Primary Message:** I did not just use AI to write snippets. I connected AI to a real engineering loop and used it to help deliver a 5W+ codebase HarmonyOS application under a domain where models are not naturally strong.

---

## Narrative Spine

The deck should follow one continuous first-person story:

1. I moved from "AI helps me chat and generate code" to "AI enters the engineering loop."
2. HarmonyOS is a hard benchmark because the ecosystem is narrower, ArkTS constraints are stronger, and some model-tool combinations hallucinate unsupported APIs.
3. The winning factor is not only the base model. The real difference comes from harness, CLI execution, rules, memory, reusable skills, and verification loops.
4. I used these methods to push a real 5W+ HarmonyOS application, Me2Robot, through planning, implementation, compilation, deployment, validation, and refactoring.
5. The point of the talk is not abstract theory. It is a practical explanation of how to use AI well.

---

## Talk Structure

The 90-minute deck should be organized into these major sections:

1. Opening and overview
2. How I understand the AI stack: LLM, Agent, Skills, MCP, Harness
3. Why CLI became my main execution surface
4. How I use rules, memory, agents.md, and reusable skills
5. How I think about tools and models in practice
6. Why HarmonyOS is a hard but useful benchmark
7. Me2Robot case study: how the project was actually delivered
8. Best practices for using AI effectively in engineering teams
9. How simple skills are designed and developed
10. Closing summary and actionable checklist

---

## Visual Direction

### Overall Style

- Format: 16:9 widescreen
- Tone: light, technical, modern, information-dense
- Avoid: dark generic AI style, purple gradient templates, text-heavy slides
- Target feel: a strong mix of infographic, product keynote, and engineering visual summary

### Palette

- Background: warm white to cool white gradient
- Primary text: near-black graphite
- Accent 1: electric blue
- Accent 2: teal
- Accent 3: controlled orange for warnings, tradeoffs, or key takeaways

### Typography

- Large, heavy Chinese-friendly heading style
- Clean sans-serif body text
- Clear size hierarchy with strong contrast between title, section label, and supporting text

### Layout Rules

- Each slide must have one dominant message
- Prefer cards, flow lines, matrices, diagrams, and grouped labels over long paragraphs
- Use large spacing and strong grouping
- Keep text short and scannable

### Motion Rules

Use only three animation types across the whole deck:

1. Whole-slide fade and upward lift on entry
2. Staggered card reveal
3. Subtle animated connector lines or directional arrows

Motion should support comprehension, not decoration.

---

## Technical Choice

The deck should be implemented as an HTML presentation using `reveal.js` with a custom visual theme.

Reasons:

- It is stable for full-screen presentation
- It works well for section-by-section authoring
- It supports keyboard navigation and speaker-friendly presentation behavior
- It can be deployed as a static website easily
- It gives enough control to create infographic-like layouts without fighting a rigid slide DSL

The project should use Vite for local development and static build output.

---

## Content Principles

- All narrative text should be first person
- Definitions should be plain-language, not academic
- Diagrams should explain relationships visually before introducing terminology
- Tool and model comparisons should be framed as usage scenarios, not purchase recommendations
- HarmonyOS-specific sections should emphasize practical engineering constraints and how hallucination risk was controlled
- `agents.md` should be explained as a navigation layer, not an encyclopedia
- `skills` should be explained as executable team knowledge, not just prompts

---

## Source Strategy

The deck should combine three source classes:

1. Official documentation and vendor references
   - OpenAI Codex and prompt guidance
   - Anthropic Claude Code, hooks, memory, MCP references
   - MCP official docs
   - Cursor official docs
   - TRAE official docs and blog references when available
   - CodeBuddy and Tongyi Lingma official product docs
   - Gemini official model, tool use, and embeddings docs

2. Internal project evidence
   - Me2Robot planning docs
   - build and verification flows
   - examples of real planning, implementation, and validation work

3. Saved Xiaohongshu screenshots
   - path: `C:\Users\100360543\Downloads\20260416-215910`
   - role: style and viewpoint reference only
   - official sources remain the factual anchor

---

## Initial Slide Set

The first implementation batch should build the first five slides:

1. Cover
2. Overview
3. Core judgment: the real difference is the engineering loop
4. One-slide AI stack relationship diagram
5. Why HarmonyOS is the best stress test for AI engineering value

These five slides define the visual language for the rest of the deck.

---

## Desired Outcome

When someone finishes this talk, they should think:

- I now understand the relationship between model, agent, skills, MCP, harness, CLI, and memory
- I can explain why some AI tools feel powerful in demos but weak in real engineering
- I can see how AI can be used effectively even in a hard ecosystem like HarmonyOS
- I have concrete best practices I can apply in my own work
- I understand how simple reusable skills can be designed for a team

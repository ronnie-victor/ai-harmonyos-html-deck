# AI HarmonyOS Deck Hardcore Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the HTML slide deck into a shorter, more technical 9-slide training deck that emphasizes non-obvious engineering practices instead of generic AI concepts.

**Architecture:** Keep the existing reveal.js/Vite deck structure and reuse the established light visual system, but replace the current slide sequence with a tighter narrative: workflow, knowledge layout, skill routing, harness system, tool/model division, and the Me2Robot HarmonyOS case. Remove the separate HarmonyOS benchmark page and fold its substance into the project case page.

**Tech Stack:** Vite, reveal.js, `src/slides.js`, `src/deck.css`, Vitest, existing local assets.

---

### Task 1: Replace the narrative and slide sequence

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Steps**
- Replace the current 17-slide narrative with 9 slides.
- Keep a strong cover and overview.
- Add hard-content slides for:
  - superpowers workflow
  - AGENTS/docs/rules/memory/skills placement
  - skill routing with metadata plus rules table
  - harness engineering as a concrete system
  - CLI/MCP/tool/model division
  - Me2Robot HarmonyOS case with real pitfalls and delivery loop
  - concise closing checklist

### Task 2: Rewrite content to emphasize non-obvious practices

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Steps**
- Replace generic concept copy with concrete engineering practices derived from:
  - local Xiaohongshu OCR notes
  - existing research note
  - user-provided skill repo practices
  - verified official references already captured in research
- Explicitly include:
  - `brainstorming`, `writing-plans`, `subagent-driven-development`, `using-git-worktrees`, `verification-before-completion`, `requesting-code-review`
  - metadata classification plus rules routing table for skills
  - “AGENTS.md as navigation”
  - harness five-part system
  - HarmonyOS validation gates

### Task 3: Reuse and tighten the visual system

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\deck.css`

**Steps**
- Reuse current premium/training layouts where possible.
- Adjust only what is necessary for the shorter deck.
- Keep the light, technical, keynote-like style.
- Ensure the new pages fit 1600x900 without overflow.

### Task 4: Update tests and verify build

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Steps**
- Update tests to assert the new 9-slide ids and key copy.
- Run:
  - `npm test`
  - `npm run build`
- Do a browser screenshot spot-check on key slides if layout risk appears.

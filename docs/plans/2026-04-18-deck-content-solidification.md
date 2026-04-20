# AI HarmonyOS Deck Content Solidification Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the HTML deck content around an approved 13-slide training narrative that emphasizes practical engineering guidance over generic AI concept talk.

**Architecture:** Keep the existing reveal.js deck structure and current light visual system, but change the rendered slide sequence to a content-first flow: concept boundaries, paradigm evolution, model selection, task input design, AGENTS/docs structure, skills routing and accumulation, CLI/MCP/Harness collaboration, and the Me2Robot HarmonyOS delivery loop. Reuse existing slide components where possible to reduce layout risk while we focus on copy and examples.

**Tech Stack:** Vite, reveal.js, `src/slides.js`, `src/slides.test.js`, existing CSS/layout helpers, local HarmonyOS project examples, existing research notes.

---

### Task 1: Freeze the approved slide narrative

**Files:**
- Modify: `D:\workspace\HarmnonyOS\docs\plans\2026-04-18-deck-hardcore-rewrite.md`
- Create: `D:\workspace\HarmnonyOS\docs\plans\2026-04-18-deck-content-solidification.md`

**Step 1: Record the approved 13-slide order**

Write the final narrative order:
- cover
- overview
- concept relationship
- prompt/context/harness evolution
- model selection
- task input design
- AGENTS.md and docs structure
- skills usage and routing
- skills accumulation into team assets
- CLI/MCP/Harness collaboration
- harness core workflow
- Me2Robot HarmonyOS delivery case
- closing checklist

**Step 2: Record the content constraints**

Document the required rules:
- no tool comparison section
- focus on models, not tool purchasing
- use official wording where possible
- include user-provided metadata + routing-table skill practice
- include company accumulation guidance
- include practical HarmonyOS engineering examples

### Task 2: Rewrite the rendered slide sequence

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Step 1: Update `renderSlides()`**

Render the approved 13-slide sequence using existing or revised slide functions.

**Step 2: Remove unused rendered pages from the active path**

Do not render:
- `tool-comparison`
- duplicate benchmark/case pages
- outdated 10-slide deck-only pages that conflict with the approved narrative

### Task 3: Rewrite slide content page by page

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Step 1: Rewrite the overview and concept slides**

Cover:
- keep the current title
- mention `5W+` only on the cover

Overview:
- rewrite as five practical questions

Concept slide:
- explain `LLM / Agent / Skill / MCP / CLI / Harness` by responsibility, not textbook definition

Paradigm slide:
- explain `Prompt -> Context -> Harness` as engineering control depth

**Step 2: Rewrite the methods slides**

Task input slide:
- explain how to write tasks like GitHub issues
- include `Goal / Context / Constraints / Done When / File Paths / References`
- include principles inspired by the public skill repo

AGENTS/docs slide:
- explain `AGENTS.md` as navigation
- explain how to split `CONTEXT / README / ARCHITECTURE / docs`

Skills slide:
- explain skill design principles
- include frontmatter metadata and rules routing table examples

Skills accumulation slide:
- explain how solved work becomes docs, rules, skills, review gates, and company assets
- include `skills.sh` as discovery signal, not quality certification

CLI/MCP/Harness slide:
- explain how the three layers cooperate

Harness slide:
- explain sandbox, structured docs, automated feedback, coded constraints, and tool integration

**Step 3: Rewrite the project case slide**

Use the Me2Robot HarmonyOS case to show:
- why HarmonyOS is a pressure test
- the delivery loop from task input to build/device/regression
- a real ArkTS example from `GlobalNoticePolicy.ets`

**Step 4: Rewrite the closing slide**

Summarize the highest-value takeaways and next actions for a development team.

### Task 4: Update tests to the approved deck

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1: Update structure assertions**

Assert the new 13-slide ids.

**Step 2: Update key copy assertions**

Assert the rewritten content areas:
- model selection
- AGENTS/docs guidance
- metadata + routing-table skill strategy
- CLI/MCP/Harness split
- Me2Robot HarmonyOS delivery loop

### Task 5: Verify the rewrite

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`
- Modify: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1: Run tests**

Run: `npm test`
Expected: all Vitest checks pass

**Step 2: Run build**

Run: `npm run build`
Expected: Vite production build succeeds

**Step 3: Report completion status**

Summarize which slides were rewritten, whether tests/build passed, and what remains for the next visual pass.

# Slide 7 Practical Skills Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild slide 7 into a dense three-card `Skill / Rules / Plugin` knowledge page that matches slide 6's visual language.

**Architecture:** Keep the current deck structure unchanged and rewrite only the `practical-skills` slide. Reuse the stable three-card glass-panel system from slide 6, but replace the current split code-card layout with direct knowledge cards covering placement, authoring method, minimal examples, and usage boundaries.

**Tech Stack:** Vite, plain JavaScript slide templates, CSS glass-panel layout system, Vitest string assertions.

---

### Task 1: Lock the target copy in tests

**Files:**
- Modify: `D:/workspace/HarmnonyOS/src/slides.test.js`

**Step 1: Add new slide-7 assertions**

Assert the rendered HTML contains:
- `Skill、Rules、Plugin 怎么设计`
- `重点放在 Skill 编写、Rules 路由与 Plugin 分发边界。`
- `~/.codex/skills/<skill-name>/SKILL.md`
- `~/.codex/rules/*.md`
- `plugins/<plugin-name>/.codex-plugin/plugin.json`
- `frontmatter metadata 先做分类收敛`
- `场景 | 首选 skill | 不要用 |`

**Step 2: Remove old layout-specific expectations**

Delete expectations that only match the old `renderCodeCard + note card + grid card` composition.

### Task 2: Replace slide 7 data model

**Files:**
- Modify: `D:/workspace/HarmnonyOS/src/slides.js`

**Step 1: Add a new `practicalSkillsKnowledgeCards` data array**

Each card must include:
- `title`
- `meta`
- `intro`
- `topics`
- `paths`
- `points`
- `example`
- `caution`
- `tone`

**Step 2: Encode the three cards**

- `Skill`: where to place it, required metadata, how metadata narrows the first choice, recommended high-frequency skills.
- `Rules`: where rules live, how to write routing tables, how to distinguish similar skills, and what rules should not duplicate.
- `Plugin`: when a plain skill is enough, when bundled distribution is needed, and what plugin adds beyond markdown instructions.

### Task 3: Rewrite slide 7 template

**Files:**
- Modify: `D:/workspace/HarmnonyOS/src/slides.js`

**Step 1: Replace the old `training-code-stage` layout in `slidePracticalSkills()`**

Use the same card rendering structure as slide 6:
- one decorated stage container
- three main cards in parallel
- no top console strip
- no side note card
- no extra 2x2 support card grid

**Step 2: Keep the approved slide title**

Retain:
- `Skill、Rules、Plugin 怎么设计`

Update subtitle to:
- `重点放在 Skill 编写、Rules 路由与 Plugin 分发边界。`

### Task 4: Add targeted CSS only if needed

**Files:**
- Modify: `D:/workspace/HarmnonyOS/src/deck.css`

**Step 1: Reuse existing page-6 visual classes where possible**

Avoid unnecessary new style systems.

**Step 2: Add only minimal slide-7-specific layout hooks**

Only add new selectors if slide 7 needs minor stage spacing or content density adjustments.

### Task 5: Verify

**Files:**
- Modify: `D:/workspace/HarmnonyOS/src/slides.test.js`
- Verify: `D:/workspace/HarmnonyOS/src/slides.js`
- Verify: `D:/workspace/HarmnonyOS/src/deck.css`

**Step 1: Run tests**

Run: `npm.cmd test`
Expected: all tests pass

**Step 2: Run production build**

Run: `npm.cmd run build`
Expected: Vite build succeeds

**Step 3: Manually inspect slide 7**

Confirm:
- no overflow
- three cards fully visible
- content density is closer to slide 6 than the previous slide 7

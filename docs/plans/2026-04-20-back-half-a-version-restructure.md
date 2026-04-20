# Back-Half A-Version Restructure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Compress the deck from `workflow-superpowers` onward into five denser, more practical pages while keeping the first five approved pages unchanged.

**Architecture:** Reuse the existing slide shell and component primitives, but merge overlapping topics into fewer slides. Keep the current case assets and snippets, rewrite only the content and render order for the back half, and preserve the approved visual system.

**Tech Stack:** Vite, plain JavaScript slide rendering, Reveal.js, CSS-based slide layout, Vitest

---

### Task 1: Freeze the approved front half

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`
- Test: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1:** Leave `cover`, `overview-core`, `stack-relationship`, `paradigm-evolution`, and `model-comparison` render calls unchanged.

**Step 2:** Limit all content edits to slides after `model-comparison`.

### Task 2: Merge task-input and docs into one practical page

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Step 1:** Rewrite `slideWorkflowSuperpowers()` into a merged page titled around task input plus document map.

**Step 2:** Reuse `workflowTaskSnippet`, `docsPlacementSnippet`, and `agentsSnippet`.

**Step 3:** Replace abstract wording with Me2Robot-specific examples: `GlobalNoticePolicy.ets`, `GlobalNoticePolicy.test.ets`, `string.json`, `hvigor assembleHap`, `hdc` verification.

### Task 3: Expand skills page into skill/rules/plugin page

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Step 1:** Rewrite `slidePracticalSkills()` to cover `Skill`, `metadata`, `rules`, and `plugin`.

**Step 2:** Remove owner governance language.

**Step 3:** Add a concrete plugin explanation: plugin as upper packaging of skills, hooks, scripts, assets, MCP, and app config.

### Task 4: Merge execution and harness into one orchestration page

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Step 1:** Rewrite `slideExecutionLayers()` as the merged Harness orchestration page.

**Step 2:** Reuse `executionRows`, `executionSnippet`, `harnessFlowSteps`, and `harnessCards` where useful.

**Step 3:** Focus on one practical chain: read context -> route skill -> edit -> build -> device -> screenshot/logs -> writeback.

### Task 5: Keep one strong case page and one strong summary page

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Step 1:** Keep `slideMe2RobotDelivery()` as the main case page and sharpen it around the `GlobalNoticePolicy` example.

**Step 2:** Fold writeback / memory / reusable lessons into `slideClosingChecklist()` instead of keeping a standalone writeback page.

### Task 6: Remove duplicate slides from render order

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`
- Test: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1:** Stop rendering `practical-docs`, `failure-assets`, and `harness-flow`.

**Step 2:** Keep slide count at 10 total.

**Step 3:** Update tests to reflect the compressed slide order.

### Task 7: Verify the deck

**Files:**
- Test: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1:** Run `npm.cmd test`

**Step 2:** Run `npm.cmd run build`

**Step 3:** Report only verified results.

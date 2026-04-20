# Scheme 1 Slide Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the rejected third slide and rebuild slides 4 and 5 into clearer, semantic infographics that match the approved deck tone.

**Architecture:** Keep slides 1 and 2 unchanged. Replace the rejected hero-illustration approach with two content-led layouts: a vertically aligned AI stack map and a HarmonyOS engineering validation board. Drive the change with TDD so the new structure is asserted before markup and CSS edits.

**Tech Stack:** HTML, CSS, JavaScript, Vite, reveal.js, Vitest.

---

### Task 1: Lock the approved slide structure in tests

**Files:**
- Modify: `src/slides.test.js`

**Step 1: Write the failing test**

Assert that:
- `engineering-loop` is no longer rendered
- `stack-relationship` and `harmony-benchmark` still exist
- new semantic anchors for the two rebuilt slides are present

**Step 2: Run test to verify it fails**

Run:

```powershell
npm test
```

Expected:
- FAIL because the rejected slide and old visual markers still exist

**Step 3: Write minimal implementation**

Update the test expectations so they describe the approved direction instead of the rejected hero assets.

**Step 4: Run test to verify it passes later**

Run:

```powershell
npm test
```

Expected:
- PASS after Tasks 2 and 3

### Task 2: Rebuild slide 4 as a semantic AI stack map

**Files:**
- Modify: `src/slides.js`

**Step 1: Write the failing target**

Require slide 4 to contain:
- a vertical stack of layers
- explicit “谁负责什么” labels
- a right-side “为什么重要” explanation area
- enough copy to support speaking

**Step 2: Write minimal implementation**

Replace the current decorative image-based layout with:
- layer cards for `LLM / Agent / Skills / MCP / Harness / CLI`
- clear output labels per layer
- a short takeaway panel tying the stack back to real engineering

### Task 3: Rebuild slide 5 as a HarmonyOS validation board

**Files:**
- Modify: `src/slides.js`
- Modify: `src/deck.css`

**Step 1: Write the failing target**

Require slide 5 to contain:
- left-side challenge cards
- a central validation path
- right-side project outputs / evidence

**Step 2: Write minimal implementation**

Replace the current decorative visual with:
- concrete challenge blocks
- compile / device / regression checkpoints
- project evidence cards showing why HarmonyOS is a useful pressure test

### Task 4: Refine layout and verify

**Files:**
- Modify: `src/deck.css`

**Step 1: Style the new information graphics**

Add layout-specific classes for:
- aligned stack rows
- connectors
- supporting notes
- evidence panels

**Step 2: Run verification**

Run:

```powershell
npm test
npm run build
```

Expected:
- PASS

# Remaining Deck Draft Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the remaining HTML deck pages as a professional training-document first draft, based on local research notes and verified official product references.

**Architecture:** Keep the first 6 slides as the opening conceptual block, then add the rest of the deck in four sections: governance and reusable knowledge, tools and models, Me2Robot project case, and team practices plus closing summary. Prefer reusable glass-card layouts and comparison matrices instead of introducing too many new visual patterns.

**Tech Stack:** Vite, reveal.js, `src/slides.js`, `src/deck.css`, Vitest.

---

### Task 1: Define the remaining slide sequence

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Steps**
- Add slides for:
  - `AGENTS.md` as navigation
  - Rules / AGENTS / Skills / Plugins / Memory roles
  - Skill design and routing
  - CLI / MCP / Harness division
  - Failure-as-asset engineering loop
  - Tool comparison
  - Model comparison
  - Me2Robot project overview
  - Me2Robot delivery loop
  - Team best practices
  - Closing checklist

### Task 2: Add data structures and render helpers

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`

**Steps**
- Add concise arrays for each slide’s cards, matrices, and case-study points.
- Add render helpers for rows, matrices, comparison cards, and checklist blocks.

### Task 3: Add layout and typography support

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\deck.css`

**Steps**
- Add a small set of reusable layouts for:
  - two-column insight pages
  - matrix tables
  - comparison boards
  - case-study stages
  - checklist summary pages
- Keep the light keynote visual language consistent with the current deck.

### Task 4: Update tests and verify

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Steps**
- Add assertions for the new slide ids and key phrases.
- Run:
  - `npm test`
  - `npm run build`

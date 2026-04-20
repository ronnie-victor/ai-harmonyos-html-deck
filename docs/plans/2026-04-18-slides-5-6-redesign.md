# Slides 5-6 Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild slides 5 and 6 into a cleaner keynote-style two-column stage with a full-height left timeline and a single large hero image on the right.

**Architecture:** Keep the approved slide topics and core copy, but replace the current fragmented card layout with a stronger stage layout. The left side becomes the primary reading surface and fills the page vertically; the right side becomes a single visual anchor with one floating glass content block per slide.

**Tech Stack:** Vite, reveal.js, plain HTML template strings in `src/slides.js`, CSS in `src/deck.css`, Vitest, Edge headless screenshots.

---

### Task 1: Replace slide 5 structure

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`
- Test: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1: Update slide 5 markup**

- Keep the title and subtitle.
- Remove the separate note card and external chip row.
- Render a full-height left rail board plus a single right hero panel with one overlay block.

**Step 2: Keep assertions aligned**

- Preserve the approved slide ids and the key slide-5 copy in `src/slides.test.js`.

### Task 2: Replace slide 6 structure

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\slides.js`
- Test: `D:\workspace\HarmnonyOS\src\slides.test.js`

**Step 1: Update slide 6 markup**

- Keep the title and subtitle.
- Remove the bottom signal card strip under the image.
- Use a different hero image from slide 4 and slide 5.
- Render only one large hero image with one floating overlay block.

**Step 2: Keep assertions aligned**

- Preserve the approved slide ids and the key slide-6 copy in `src/slides.test.js`.

### Task 3: Rebuild slide-5/6 styling

**Files:**
- Modify: `D:\workspace\HarmnonyOS\src\deck.css`

**Step 1: Make the stage fill height**

- Ensure `slide-shell--paradigm` and `slide-shell--harness` continue to allocate remaining height to the stage.
- Force the slide 5/6 stage and both columns to stretch vertically.

**Step 2: Redesign the left rail panel**

- Use a stronger full-height glass panel.
- Keep the centered vertical line and circle nodes.
- Let the cards stretch naturally without leaving empty lower space.

**Step 3: Redesign the right hero**

- Use a single full-height media panel.
- Put the copy in one floating glass box near the bottom-left.
- Tune image crop, scrim, glow, border radius, and contrast for projection.

### Task 4: Verify the redesign

**Files:**
- Verify: `D:\workspace\HarmnonyOS\output\playwright\slide-5*.png`
- Verify: `D:\workspace\HarmnonyOS\output\playwright\slide-6*.png`

**Step 1: Run tests**

Run: `npm test`
Expected: slide tests pass

**Step 2: Run production build**

Run: `npm run build`
Expected: Vite build succeeds

**Step 3: Capture screenshots**

Run headless Edge screenshots for `#/4` and `#/5` at both 1600x900 and 1920x1080.

**Step 4: Review**

- Confirm the left column visually fills the page.
- Confirm no duplicate hero image is reused from slide 4.
- Confirm there is no clipping, compressed text, or bottom overflow.

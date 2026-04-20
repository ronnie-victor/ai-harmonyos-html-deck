# Light Abstract Tech Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh the first two HTML slides into a lighter keynote-style abstract tech visual system while keeping the approved narrative structure intact.

**Architecture:** Keep the current `reveal.js` deck structure, but replace the dark background system with a light hero illustration and lighter glass surfaces. Limit scope to `index.html`, the shared theme CSS, the deck layout CSS, and minimal slide copy adjustments needed for balance and readability.

**Tech Stack:** HTML, CSS, JavaScript, Vite, reveal.js, Vitest.

---

### Task 1: Add a regression check before visual edits

**Files:**
- Modify: `src/slides.test.js`

**Step 1: Write the failing test**

Assert the deck still renders the two reviewed opening slides and the approved topic markers:

```js
expect(html).toContain('id="cover"');
expect(html).toContain('id="overview"');
expect(html).toContain('HarmonyOS');
expect(html).toContain('Overview');
```

**Step 2: Run test to verify it fails if structure drifts**

Run:

```powershell
npm test
```

Expected:
- FAIL if the opening slide structure or critical keywords are missing

**Step 3: Write minimal implementation**

Adjust the assertions so they cover the current approved opening structure without overfitting the exact Chinese copy.

**Step 4: Run test to verify it passes**

Run:

```powershell
npm test
```

Expected:
- PASS

### Task 2: Replace the dark backdrop with a light abstract hero image

**Files:**
- Modify: `index.html`
- Modify: `src/theme.css`
- Create: `public/assets/bg-tech-hero-light.svg`

**Step 1: Write the failing visual target**

Require the backdrop system to contain:

- a light hero image layer
- a soft grid layer
- subtle blue/cyan glow layers
- a light glass sheet over the main content area

**Step 2: Run local preview to confirm the current dark system is still present**

Run:

```powershell
npm run dev
```

Expected:
- current dark visual still visible

**Step 3: Write minimal implementation**

Create a light abstract SVG hero with:

- pale white-blue background
- spatial grid / perspective lines
- abstract panels / data traces
- controlled blue/cyan glow accents

Then wire it into the global backdrop and update the palette to light surfaces and dark text.

**Step 4: Run build to verify the asset and CSS bundle**

Run:

```powershell
npm run build
```

Expected:
- PASS

### Task 3: Rework slide surfaces for a light glass style

**Files:**
- Modify: `src/deck.css`

**Step 1: Write the failing visual target**

Require the opening slides to use:

- light translucent cards
- darker text
- thinner borders
- lighter shadows
- restrained motion

**Step 2: Run preview to verify current cards are too dark**

Run:

```powershell
npm run dev
```

Expected:
- current cards still feel too dark / heavy

**Step 3: Write minimal implementation**

Update:

- `.kicker`
- `.hero-statement`
- `.hero-tags`
- `.visual-card`
- `.overview-rail`
- `.info-card`

so they sit on a light backdrop without losing contrast.

**Step 4: Run build to verify styles compile**

Run:

```powershell
npm run build
```

Expected:
- PASS

### Task 4: Keep slide 2 fully visible in fullscreen

**Files:**
- Modify: `src/deck.css`

**Step 1: Write the failing layout target**

Require slide 2 to fit within 16:9 fullscreen without bottom clipping.

**Step 2: Run preview and inspect fullscreen**

Run:

```powershell
npm run dev
```

Expected:
- FAIL if the final row is clipped or cramped

**Step 3: Write minimal implementation**

Tighten slide 2 with:

- shorter header spacing
- a denser but still readable rail
- grid rows that can shrink with viewport height
- responsive font and padding adjustments under lower-height viewports

**Step 4: Run build and test**

Run:

```powershell
npm test
npm run build
```

Expected:
- PASS

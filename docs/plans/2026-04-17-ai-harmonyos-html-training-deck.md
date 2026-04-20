# AI HarmonyOS HTML Training Deck Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a high-quality HTML slide deck for a 90-minute first-person engineering talk about practical AI-assisted HarmonyOS development.

**Architecture:** Use `reveal.js` as the presentation engine and Vite as the local build tool. Build a small deck project with a custom theme, reusable layout primitives, and a slide-by-slide content workflow that starts with the first five slides and expands only after review.

**Tech Stack:** HTML, CSS, JavaScript, Vite, reveal.js, local image assets, optional Playwright for visual verification.

---

### Task 1: Create the project skeleton

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/theme.css`
- Create: `src/deck.css`
- Create: `src/slides.js`
- Create: `public/assets/.gitkeep`

**Step 1: Write the failing setup check**

Create `package.json` with scripts:

```json
{
  "name": "ai-harmonyos-html-deck",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Create `index.html` with a root container:

```html
<div class="reveal">
  <div class="slides" id="slides"></div>
</div>
```

**Step 2: Run setup command to verify it fails before dependencies**

Run:

```powershell
npm run build
```

Expected:
- FAIL because `vite` is not installed yet

**Step 3: Write minimal implementation**

Add dependencies:

```json
"dependencies": {
  "reveal.js": "^5.1.0"
},
"devDependencies": {
  "vite": "^7.0.0"
}
```

Add minimal `src/main.js`:

```js
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import './theme.css';
import './deck.css';
import { renderSlides } from './slides.js';

const slidesRoot = document.getElementById('slides');
slidesRoot.innerHTML = renderSlides();

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: false
});

deck.initialize();
```

**Step 4: Run build to verify it passes**

Run:

```powershell
npm install
npm run build
```

Expected:
- PASS
- `dist/` is generated

**Step 5: Commit**

If git is initialized:

```powershell
git add package.json index.html src/main.js src/theme.css src/deck.css src/slides.js public/assets/.gitkeep
git commit -m "feat: scaffold html training deck"
```

---

### Task 2: Build the shared visual system

**Files:**
- Modify: `src/theme.css`
- Modify: `src/deck.css`

**Step 1: Write the failing visual target**

Define CSS variables for:

- background gradient
- graphite text color
- electric blue accent
- teal accent
- orange highlight
- card radius
- shadow scale

Define layout helpers:

- `.slide-shell`
- `.slide-title`
- `.slide-subtitle`
- `.grid-2`
- `.grid-3`
- `.info-card`
- `.flow-line`
- `.kicker`

**Step 2: Run local preview and verify it is still visually incomplete**

Run:

```powershell
npm run dev
```

Expected:
- deck renders
- slides still look unstyled or skeletal

**Step 3: Write minimal implementation**

Add:

```css
:root {
  --bg-0: #f8fbff;
  --bg-1: #eef6ff;
  --text-0: #111827;
  --text-1: #364152;
  --accent-blue: #1e7bff;
  --accent-teal: #10b8b2;
  --accent-orange: #ff8a3d;
  --line: rgba(30, 123, 255, 0.14);
  --card: rgba(255, 255, 255, 0.92);
  --radius-lg: 28px;
  --shadow-lg: 0 24px 80px rgba(24, 57, 99, 0.12);
}
```

Add shared card and grid styles, plus subtle background grids and blur accents.

**Step 4: Run build to verify CSS bundles correctly**

Run:

```powershell
npm run build
```

Expected:
- PASS

**Step 5: Commit**

If git is initialized:

```powershell
git add src/theme.css src/deck.css
git commit -m "feat: add deck visual system"
```

---

### Task 3: Implement slide 1 and slide 2

**Files:**
- Modify: `src/slides.js`
- Create: `public/assets/cover-collage/`

**Step 1: Write the failing content structure**

Add two slide renderers:

```js
function slideCover() {
  return `<section id="cover"></section>`;
}

function slideOverview() {
  return `<section id="overview"></section>`;
}
```

Render them:

```js
export function renderSlides() {
  return [slideCover(), slideOverview()].join('');
}
```

**Step 2: Run preview and verify the slides are empty**

Run:

```powershell
npm run dev
```

Expected:
- two blank slides or placeholder shells

**Step 3: Write minimal implementation**

Slide 1 content:

- Title: `AI实战 HarmonyOS 复杂应用开发分享`
- Subtitle: `我把一个 5W+ 代码量项目做下来的过程与最佳实践`
- Supporting sentence: `不是 AI 帮我补几行代码，而是我把 AI 接进了完整工程流`
- Right-side visual collage placeholder zones

Slide 2 content:

- Title: `今天我会讲什么`
- Six cards covering:
  - AI stack
  - CLI
  - rules and memory
  - tools and models
  - HarmonyOS hallucination control
  - Me2Robot case study

**Step 4: Run build to verify slides compile**

Run:

```powershell
npm run build
```

Expected:
- PASS

**Step 5: Commit**

If git is initialized:

```powershell
git add src/slides.js public/assets/cover-collage
git commit -m "feat: add cover and overview slides"
```

---

### Task 4: Implement slide 3 to slide 5

**Files:**
- Modify: `src/slides.js`

**Step 1: Write the failing structure for the next three slides**

Add:

```js
function slideEngineeringLoop() {
  return `<section id="engineering-loop"></section>`;
}

function slideStackRelationship() {
  return `<section id="stack-relationship"></section>`;
}

function slideHarmonyBenchmark() {
  return `<section id="harmony-benchmark"></section>`;
}
```

**Step 2: Run preview and verify placeholders exist but content is missing**

Run:

```powershell
npm run dev
```

Expected:
- three additional placeholder slides appear

**Step 3: Write minimal implementation**

Slide 3:

- Message: the real difference is entering the engineering loop
- Horizontal progression:
  - chat
  - code generation
  - tool use
  - workflow
  - verification
  - continuous collaboration

Slide 4:

- Relationship diagram:
  - LLM
  - Agent
  - Skills
  - MCP
  - Harness
- Right-side outcomes:
  - chat
  - automation assistant
  - production-grade engineering loop

Slide 5:

- Three challenge cards:
  - smaller ecosystem
  - easier API hallucination
  - ArkTS, compile, and device validation constraints
- One engineering loop visual on the right

**Step 4: Run build to verify slides compile**

Run:

```powershell
npm run build
```

Expected:
- PASS

**Step 5: Commit**

If git is initialized:

```powershell
git add src/slides.js
git commit -m "feat: add opening narrative slides"
```

---

### Task 5: Bring in selected screenshot assets

**Files:**
- Create: `public/assets/reference/xiaohongshu/`
- Create: `public/assets/reference/me2robot/`
- Modify: `src/slides.js`

**Step 1: Write the failing asset plan**

Select a small batch of reference images:

- 3 to 6 saved Xiaohongshu screenshots from:
  `C:\Users\100360543\Downloads\20260416-215910`
- 2 to 4 Me2Robot screenshots

Use these only where they improve comprehension.

**Step 2: Verify missing asset references fail visually**

Add a slide image tag:

```html
<img src="/assets/reference/xiaohongshu/example.jpg" alt="reference" />
```

Run preview.

Expected:
- broken image until the asset is copied

**Step 3: Write minimal implementation**

Copy selected files into:

- `public/assets/reference/xiaohongshu/`
- `public/assets/reference/me2robot/`

Then wire them into:

- cover collage
- stack relationship slide
- HarmonyOS benchmark slide

**Step 4: Run build to verify assets are bundled**

Run:

```powershell
npm run build
```

Expected:
- PASS
- images are included in `dist/`

**Step 5: Commit**

If git is initialized:

```powershell
git add public/assets/reference src/slides.js
git commit -m "feat: add opening slide reference assets"
```

---

### Task 6: Add motion and polish

**Files:**
- Modify: `src/deck.css`
- Modify: `src/main.js`

**Step 1: Write the failing animation target**

Define animation classes:

- `.enter-fade-up`
- `.stagger-group > *`
- `.connector-pulse`

**Step 2: Run preview and verify there is no motion yet**

Run:

```powershell
npm run dev
```

Expected:
- static transitions only

**Step 3: Write minimal implementation**

Add CSS keyframes:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
```

Apply these classes to:

- titles
- overview cards
- flow stages
- relationship arrows

Initialize reveal with a clean transition:

```js
const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: false,
  transition: 'fade'
});
```

**Step 4: Run build to verify motion code is valid**

Run:

```powershell
npm run build
```

Expected:
- PASS

**Step 5: Commit**

If git is initialized:

```powershell
git add src/deck.css src/main.js
git commit -m "feat: add deck motion polish"
```

---

### Task 7: Verify the first batch visually

**Files:**
- Create: `output/review/`

**Step 1: Run local preview**

Run:

```powershell
npm run dev
```

Expected:
- slides are viewable locally

**Step 2: Capture screenshots for review**

Use Playwright or browser screenshots to capture:

- slide 1
- slide 2
- slide 3
- slide 4
- slide 5

Save them under:

```text
output/review/
```

**Step 3: Review against the design**

Check:

- title hierarchy
- consistency of spacing
- card alignment
- motion restraint
- readability from a projected distance
- image use is additive, not noisy

**Step 4: Fix any layout defects and rerun build**

Run:

```powershell
npm run build
```

Expected:
- PASS after fixes

**Step 5: Commit**

If git is initialized:

```powershell
git add output/review src
git commit -m "chore: review and polish opening slide batch"
```

---

### Task 8: Expand the rest of the deck only after review

**Files:**
- Modify: `src/slides.js`
- Modify: `src/deck.css`
- Modify: `src/theme.css`

**Step 1: Confirm the opening batch is accepted**

Review the first five slides with the user before continuing.

**Step 2: Add the next section in the same workflow**

Sections to implement next:

- CLI and harness
- rules, memory, agents.md, and reusable skills
- tools and model usage comparison
- Me2Robot case study
- best practices and closing checklist

**Step 3: Keep the same review rhythm**

For each section:

- draft content
- implement slides
- visually review
- adjust

**Step 4: Run full build**

Run:

```powershell
npm run build
```

Expected:
- PASS

**Step 5: Commit**

If git is initialized:

```powershell
git add src
git commit -m "feat: extend deck with reviewed sections"
```

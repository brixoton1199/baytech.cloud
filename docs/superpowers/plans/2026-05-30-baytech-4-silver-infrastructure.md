# BAYTECH-4 Silver Infrastructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved A / Silver Infrastructure visual refresh for Baytech.cloud while preserving the existing vanilla Vite SPA architecture and sensitive business content.

**Architecture:** Keep all routing and page composition in the current `src/main.js`, `src/router.js`, and `src/pages/*.js` pattern. Add targeted homepage markup for the new infrastructure hero, then use shared CSS overrides and token remaps in `src/style.css` so secondary pages inherit the light theme without broad rewrites.

**Tech Stack:** Vite 5, vanilla ES modules, CSS, Node's built-in `node:test`, Browser/IAB visual QA.

---

## File Structure

- Modify `tests/silver-infrastructure-design.test.mjs`: source-level regression tests for approved light-theme tokens, homepage hero structure, CTA preservation, and sensitive footer content preservation.
- Modify `src/pages/home.js`: replace the hero's dark map visual with CSS-driven silver infrastructure geometry and floating service modules.
- Modify `src/style.css`: add BAYTECH-4 light-theme token remap, app-shell/card/button/page/header/contact/footer styling, hero infrastructure styling, and responsive/reduced-motion refinements.
- Leave `src/router.js`, generated `baytech.cloud/`, and sensitive business values unchanged.

### Task 1: Add Red Tests For The Approved Design

**Files:**
- Create: `tests/silver-infrastructure-design.test.mjs`

- [ ] **Step 1: Write source-level tests**

```js
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')

test('homepage uses the silver infrastructure hero instead of the old map-first hero', () => {
  assert.match(homeSource, /hero-infrastructure-panel/)
  assert.match(homeSource, /infrastructure-orbit-card/)
  assert.match(homeSource, /infrastructure-plane/)
  assert.doesNotMatch(homeSource, /hero-map-container/)
  assert.match(homeSource, /href="\/contact" class="btn btn-filled"/)
  assert.match(homeSource, /href="\/services" class="btn btn-outlined"/)
})

test('light theme tokens define white silver surfaces with restrained Baytech green accents', () => {
  assert.match(styleSource, /--md-surface:\s*#f8fafc;/)
  assert.match(styleSource, /--md-on-surface:\s*#202225;/)
  assert.match(styleSource, /--baytech-silver-grid:\s*rgba\(87,\s*98,\s*115,\s*0\.12\);/)
  assert.match(styleSource, /--baytech-signal:\s*#26b86a;/)
  assert.match(styleSource, /\.hero-infrastructure-panel/)
  assert.match(styleSource, /\.infrastructure-plane/)
})

test('app shell keeps sensitive business contact content unchanged', () => {
  assert.match(mainSource, /77 Camden Street Lower,/)
  assert.match(mainSource, /support@baytech\.cloud/)
  assert.match(mainSource, /\+44 7886 066968/)
})
```

- [ ] **Step 2: Run tests and verify red**

Run: `npm test`

Expected: `silver-infrastructure-design.test.mjs` fails because `hero-infrastructure-panel`, light tokens, and `infrastructure-plane` do not exist yet.

### Task 2: Implement Homepage Hero Markup

**Files:**
- Modify: `src/pages/home.js`

- [ ] **Step 1: Replace only the hero visual markup**

Keep the existing headline, subtitle, logo, and CTA destinations. Replace the `hero-map-container` block with:

```html
<div class="hero-infrastructure-panel" aria-hidden="true">
  <div class="infrastructure-grid"></div>
  <div class="infrastructure-plane"></div>
  <div class="infrastructure-prism infrastructure-prism-main"></div>
  <div class="infrastructure-prism infrastructure-prism-small"></div>
  <div class="infrastructure-signal-line"></div>
  <div class="infrastructure-orbit-card card-strategy">
    <span class="orbit-signal"></span>
    <strong>Strategy</strong>
    <span>Roadmap</span>
  </div>
  <div class="infrastructure-orbit-card card-cloud">
    <span class="orbit-signal"></span>
    <strong>Cloud</strong>
    <span>Architecture</span>
  </div>
  <div class="infrastructure-orbit-card card-security">
    <span class="orbit-signal"></span>
    <strong>Security</strong>
    <span>Governance</span>
  </div>
</div>
```

- [ ] **Step 2: Remove the inline dark-theme hero subtitle panel assumption**

Keep `.hero-subtitle` as plain text in markup; the dark background and text-shadow are removed in CSS, not by changing copy.

- [ ] **Step 3: Run tests**

Run: `npm test`

Expected: homepage structure assertions pass; style token assertions still fail until Task 3.

### Task 3: Implement Light Theme And Silver Infrastructure CSS

**Files:**
- Modify: `src/style.css`

- [ ] **Step 1: Add BAYTECH-4 token overrides**

Add a final `:root` block near the end of the stylesheet defining:

```css
:root {
  --md-primary: #26b86a;
  --md-on-primary: #ffffff;
  --md-primary-container: #dff8ea;
  --md-on-primary-container: #0f5f36;
  --md-secondary: #69737f;
  --md-on-secondary: #ffffff;
  --md-secondary-container: #edf2f6;
  --md-on-secondary-container: #26313b;
  --md-tertiary: #46b7ff;
  --md-on-tertiary: #042337;
  --md-tertiary-container: #e4f5ff;
  --md-on-tertiary-container: #0b4668;
  --md-surface: #f8fafc;
  --md-surface-dim: #e8edf2;
  --md-surface-bright: #ffffff;
  --md-surface-container-lowest: #ffffff;
  --md-surface-container-low: #ffffff;
  --md-surface-container: #f3f6f9;
  --md-surface-container-high: #edf2f6;
  --md-surface-container-highest: #e5ebf1;
  --md-on-surface: #202225;
  --md-on-surface-variant: #626b75;
  --md-outline: #9aa5b1;
  --md-outline-variant: #d9e0e7;
  --md-inverse-surface: #202225;
  --md-inverse-on-surface: #ffffff;
  --md-inverse-primary: #7be0a6;
  --baytech-signal: #26b86a;
  --baytech-ink: #202225;
  --baytech-muted: #626b75;
  --baytech-silver: #f3f6f9;
  --baytech-silver-deep: #dce4ec;
  --baytech-silver-grid: rgba(87, 98, 115, 0.12);
}
```

- [ ] **Step 2: Add shared light shell overrides**

Update body, app shell, navigation, cards, buttons, footer, page headers, sidebar, and forms to use white/silver surfaces, charcoal text, controlled green accents, 8px card radii where practical, and lower shadow intensity.

- [ ] **Step 3: Add hero infrastructure styles**

Define `.hero-infrastructure-panel`, `.infrastructure-grid`, `.infrastructure-plane`, `.infrastructure-prism`, `.infrastructure-signal-line`, `.infrastructure-orbit-card`, and their responsive behavior.

- [ ] **Step 4: Add reduced-motion and mobile refinements**

Disable hero geometry animations under `prefers-reduced-motion: reduce`. At `max-width: 768px`, stack hero content above the infrastructure panel, shrink floating cards, and ensure CTA buttons do not overflow.

- [ ] **Step 5: Run tests**

Run: `npm test`

Expected: all Node tests pass.

### Task 4: Build And Browser Verify

**Files:**
- No source file changes expected unless browser QA finds a visual issue.

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Run local dev server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite prints a local URL and stays running.

- [ ] **Step 3: Verify desktop in Browser/IAB**

Open the local URL. Inspect `/`, `/services`, `/contact`, and `/approach`. Confirm first viewport, cards, nav, footer, and form fields are readable and aligned.

- [ ] **Step 4: Verify mobile in Browser/IAB**

Use a mobile-sized viewport around 390px wide. Confirm hero content stacks cleanly, mobile nav does not overlap primary content, CTA text fits, and cards/forms do not overflow.

- [ ] **Step 5: Fix any visible QA issues**

Only make targeted edits to `src/style.css` or `src/pages/home.js`, then rerun `npm test` and `npm run build`.

### Task 5: Final Source Review

**Files:**
- Review: `src/pages/home.js`
- Review: `src/style.css`
- Review: `tests/silver-infrastructure-design.test.mjs`

- [ ] **Step 1: Confirm no generated artifacts are staged**

Run: `git status --short`

Expected: source/spec/plan/test changes only; generated `baytech.cloud/` remains untracked or ignored.

- [ ] **Step 2: Inspect final diff**

Run: `git diff -- src/pages/home.js src/style.css tests/silver-infrastructure-design.test.mjs docs/superpowers/plans/2026-05-30-baytech-4-silver-infrastructure.md`

Expected: changes are focused on BAYTECH-4 visual refresh and plan/test support.

- [ ] **Step 3: Commit implementation**

Run:

```bash
git add src/pages/home.js src/style.css tests/silver-infrastructure-design.test.mjs docs/superpowers/plans/2026-05-30-baytech-4-silver-infrastructure.md
git commit -m "feat: refresh Baytech silver infrastructure theme"
```

Expected: commit succeeds on `zhiyi/baytech-4-silver-infrastructure`.

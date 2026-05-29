# Baytech.cloud Agent Guide

This repository is a small Vite static SPA for the Baytech.cloud website. Keep changes focused, conservative, and consistent with the existing vanilla JavaScript structure.

## Project Shape

- Runtime: Vite 5 with vanilla ES modules.
- Do not introduce React, Vue, Next.js, Tailwind, shadcn, or another framework unless the user explicitly approves it.
- Source lives in `src/`; static files live in `public/`.
- `baytech.cloud/` is the Vite production output directory. Do not edit generated files there by hand.

## Development Commands

- Install dependencies with `npm ci` when `node_modules` is missing or stale.
- Start local development with `npm run dev`.
- Build production assets with `npm run build`.
- Preview production output with `npm run preview`.
- For frontend code or asset changes, run `npm run build` before saying the work is complete. For documentation-only changes, verify by reading the changed file and checking `git status`.

## Pull Request Workflow

- Manage formal changes through pull requests. Do not treat direct edits on `main` as ready to merge.
- Create a short-lived feature branch for each change, using `zhiyi/<short-topic>` unless the user asks for another branch name.
- Keep each PR focused on one coherent change. Avoid mixing unrelated cleanup, design experiments, and feature work.
- Before opening a PR, verify the work with the appropriate command, usually `npm run build` for frontend changes.
- PR descriptions should summarize the user-facing change, list verification performed, and call out any known gaps or follow-up work.
- Do not include generated `baytech.cloud/` build output in a PR unless the user explicitly asks to commit deploy artifacts.

## App Architecture

- The app shell is built in `src/main.js`: navigation rail, footer, side sheet, mobile nav, back-to-top button, scroll animations, and router initialization.
- SPA routes are registered in `src/router.js`.
- Pages live in `src/pages/*.js` and should export a render function that returns a DOM element.
- To add a page:
  1. Create `src/pages/<page>.js`.
  2. Register the route in `src/router.js`.
  3. Add navigation or footer links in `src/main.js` only when the page should be user-visible.
  4. Add styles in `src/style.css`, reusing existing classes and CSS variables first.

## Styling Rules

- Reuse the existing Material Design 3 inspired tokens in `src/style.css`, especially `--md-*`, `--space-*`, and existing button/card/layout classes.
- Keep the dark Baytech visual language: restrained grey surfaces, Baytech green accent, subtle technical texture.
- Avoid adding a second design system or one-off color palette.
- Make mobile behavior explicit. Check the existing `@media (max-width: 768px)` section before adding new responsive CSS.
- Do not enlarge the already-large stylesheet with duplicated patterns when an existing class can be reused.

## Content And Assets

- Put images, presentations, and downloadable assets under `public/assets/`.
- Before referencing an asset, confirm the exact filename exists. This project currently references logo files that may be missing from `public/assets`.
- Treat brand name, address, phone number, email, Web3Forms access key, and external iframe URLs as business-sensitive content. Do not change them without explicit user direction.
- Keep public copy professional and concise. This is a consulting website, not a marketing experiment page.

## JavaScript Rules

- Prefer small, page-local DOM assembly following the existing render function pattern.
- Be careful with `innerHTML`. Do not interpolate untrusted user input into HTML strings.
- Preserve accessibility attributes on navigation, buttons, forms, and iframes.
- Respect reduced-motion behavior when adding animation or scroll effects.
- Avoid global state unless it belongs to the app shell and matches existing `window.*` patterns.

## Known Gaps

- `README.md` mentions `DEPLOYMENT.md` and `WEBSITE_TRANSCRIPT.md`, but they are not currently tracked in the repository.
- `index.html`, `src/main.js`, and `src/pages/home.js` reference `baytech logo.png` / `baytech logo 1.png`, but only `ireland-map.png` and the strategy PPTX are currently tracked under `public/assets`.
- The navigation rail shows disabled "Case" and "Live Status" entries while the router has a `/case` page. Confirm intended behavior before exposing or removing these links.
- `company-profile` embeds the live `baytech.cloud` PPTX through Office Online; local preview depends on network access and the production URL.

## Agent Workflow

- Start by reading the relevant page, `src/router.js`, `src/main.js`, and nearby CSS before editing.
- Keep diffs narrow. Do not reformat large files or rewrite unrelated content.
- If changing UI, inspect the rendered page in a browser when practical and check desktop/mobile layouts.
- If a command creates `baytech.cloud/`, leave it untracked unless the user asks for build artifacts.
- Report verification honestly: say exactly which commands were run and whether anything could not be verified.

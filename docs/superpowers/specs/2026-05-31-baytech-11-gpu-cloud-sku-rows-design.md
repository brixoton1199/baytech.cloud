# BAYTECH-11 GPU Cloud SKU Rows Design

## Goal

Redesign the `/gpu-cloud` model listing so it reads like a professional GPU system availability surface, not a small marketing-card list. The page should make the six GPU systems easy to scan, show the full baseline configuration for each system, make `Configurable` visible, and route interest through `Request for availability`.

## Context

The current `/gpu-cloud` page uses three small cards with short workload bullets. PM provided a reference that looks like a GPU SKU availability list and also said the earlier font sizing felt too small, as if the page did not want the visitor to notice the information. The accepted direction is a Baytech-styled SKU row layout: use the reference's scan pattern, but keep Baytech's dark, restrained, technical subpage language.

## Page Structure

Keep `/gpu-cloud` as a normal Baytech subpage:

1. Breadcrumb.
2. Existing `page-header` rhythm with concise AI infrastructure copy.
3. New GPU Systems section using SKU rows.
4. Existing Why Baytech trust section.
5. Existing final CTA section.

Do not add a decorative hero, pricing, checkout, real-time inventory, stock counts, or GPU quantity selectors.

## SKU Row Design

Each row represents one configurable GPU system. Rows should use the existing `solution-card` / elevated-surface language, but with a row-first layout:

- Left: vendor marker, large model name, workload category, and `Configurable`.
- Middle: visible configuration values for `CPU`, `Mem`, `Data`, and `Network`.
- Right: `Request for availability` link to `/contact`.

Desktop should show two rows per grid track when there is enough width, with each row internally aligned for scanning. Mobile should stack each row into model, specs, and CTA blocks with no horizontal scrolling.

Typography targets:

- Model names should be visually prominent, about headline/card-title scale, not body-small.
- Specs should be readable body text, not tiny metadata.
- Labels like `CPU`, `Mem`, `Data`, and `Network` can be smaller than values, but values must remain easy to read.

## GPU Systems

Use these six systems exactly:

1. `Nvidia H100` - `Rendering, inference`
   - `CPU: Intel 8468 48C 2.1GHz * 2`
   - `Mem: 64GB 4800MHz * 32`
   - `Data: 3.84TB * 2`
   - `Network: 400G`

2. `Nvidia H200` - `Rendering, inference`
   - `CPU: Intel 8558 48C 2.1GHz * 2`
   - `Mem: 64GB 5600MHz * 32`
   - `Data: 3.84TB * 4`
   - `Network: 400G`

3. `Nvidia B200` - `Training, rendering, inference`
   - `CPU: Intel 6960P 72C 2.7GHz * 2`
   - `Mem: 128GB 6400MHz * 16`
   - `Data: 3.84TB * 8`
   - `Network: 400G`

4. `Nvidia B300` - `Training, rendering, inference`
   - `CPU: Intel 6776P 64C 2.3GHz`
   - `Mem: 96GB 6400MHz * 32`
   - `Data: 3.84TB * 8`
   - `Network: 800G`

5. `AMD MI350X` - `Training, rendering, inference`
   - `CPU: EPYC 9575F 64C 3.3GHz`
   - `Mem: 128GB 64MHz * 24`
   - `Data: 3.84TB * 3`
   - `Network: 800G`

6. `Nvidia RTX Pro 6000` - `Inference`
   - `CPU: Intel 6740P 48C 2.1GHz`
   - `Mem: 64GB 5600MHz * 16`
   - `Data: 3.84TB * 8`
   - `Network: 400G`

## Copy

Header copy should emphasize inquiry-led access and deployment support, not instant purchasing:

`Inquiry-led access to configurable Nvidia and AMD GPU systems with architecture, security, and deployment guidance from Baytech.`

Section copy should frame these as baseline configurations:

`Compare baseline CPU, memory, storage, and network profiles, then talk with Baytech about availability, configuration changes, and deployment readiness.`

Every row CTA should say `Request for availability`.

## Data And Rendering

Keep data page-local in `src/pages/gpu-cloud.js`. Use a structured object per system:

- `name`
- `vendor`
- `workloads`
- `configurable`
- `specs` as label/value pairs or equivalent structured shape

Render specs through structured DOM assembly or a safe static template. Do not interpolate user input. The source data is static and controlled.

## Styling

Add scoped GPU Cloud CSS only under the existing GPU Cloud section of `src/style.css`. Reuse existing tokens:

- `--md-*` color and typography tokens.
- `--space-*` spacing tokens.
- Existing button classes.
- Existing card/elevated surface feel.

The new CSS should not introduce a second palette. It can add GPU-specific classes for row layout, spec grid, configurable pill, and row CTA alignment.

## Testing And Verification

Update `tests/gpu-cloud-page.test.mjs` to verify:

- All six system names are present.
- Each exact CPU, Mem, Data, and Network string is present.
- `Configurable` appears.
- `Request for availability` appears.
- Old small-card-only language and old three-model-only copy are gone.
- No pricing, checkout, live inventory, or quantity controls are introduced.
- GPU Cloud styles remain scoped and responsive.

Before completion, run:

- `node --test tests/gpu-cloud-page.test.mjs`
- `npm test`
- `npm run build`

Visual QA should inspect `/gpu-cloud` at desktop and mobile widths to confirm row readability, no text overlap, no clipped long model names, and no tiny hidden-looking spec text.

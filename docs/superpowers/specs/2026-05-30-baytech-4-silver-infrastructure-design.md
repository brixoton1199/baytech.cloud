# BAYTECH-4 Silver Infrastructure Visual Refresh Design

Date: 2026-05-30
Branch: `zhiyi/baytech-4-silver-infrastructure`
Ticket: `BAYTECH-4`

## Summary

Refresh the Baytech.cloud website from its current dark technical theme into a bright, premium "Silver Infrastructure" visual direction inspired by Northern Data's homepage. The redesign keeps the current site architecture, page structure, routing, and business copy intact while changing the visual language to feel lighter, more spatial, and more infrastructure-oriented.

The approved direction uses white and silver-gray as the dominant palette, charcoal text and black high-priority CTAs for authority, and Baytech green only as a precise signal color. The technical feeling should come from geometric depth, fine grid lines, layered service modules, and restrained motion rather than neon, cyberpunk styling, or a one-color green theme.

## Goals

- Move the site to a bright, premium technology consulting aesthetic.
- Preserve the existing Vite vanilla JavaScript SPA structure.
- Keep the current content architecture: homepage hero, services, insights, CTA, navigation, footer, and existing pages.
- Make the homepage first viewport feel closer to a modern infrastructure/cloud company: spacious, white/silver, geometric, and confident.
- Reuse the existing MD3-style token system and classes where practical instead of creating a second design system.
- Improve perceived polish across desktop and mobile without changing sensitive business details.

## Non-Goals

- Do not introduce React, Vue, Next.js, Tailwind, shadcn, or another UI framework.
- Do not rewrite the router, app shell, or page model.
- Do not change brand name, address, phone number, email, Web3Forms keys, Office iframe URLs, or external business links.
- Do not expose disabled navigation items unless separately approved.
- Do not commit generated `baytech.cloud/` production output.
- Do not create a marketing landing page that replaces the current usable site structure.

## Approved Visual Direction

### Palette

Use a light infrastructure palette:

- Page background: near-white to silver-gray, with subtle depth.
- Primary surfaces: white panels with low-contrast borders.
- Text: charcoal for headings and body text, not pure black everywhere.
- Muted text: cool gray.
- Primary CTA: black or near-black pill button.
- Secondary CTA: white/transparent button with silver border.
- Accent: Baytech green used sparingly for labels, small signals, focus states, and select highlights.
- Optional micro-accent: very pale cyan may appear in gradients or grid lines if needed, but it must remain secondary to silver and green.

This ticket intentionally changes the site's current dark background system to a light theme while preserving the existing token-based styling approach.

### Spatial Language

The key Northern Data-inspired trait is not "more color"; it is bright spatial infrastructure. Baytech should use:

- Pale geometric hero background with a 3D plane, cube, prism, or infrastructure grid.
- Soft shadows and subtle borders instead of heavy glowing panels.
- Floating service modules/cards in the hero, echoing technical product stacks.
- Large, confident typography with generous whitespace.
- Sparse accent lines or signal dots in Baytech green.
- Motion that is slow, subtle, and disabled under reduced-motion preferences.

## Page-Level Design

### App Shell

Keep `src/main.js` as the app shell. The navigation rail, mobile nav, footer, side sheet, back-to-top button, scroll animations, and router initialization stay structurally the same.

The visual update should primarily happen in `src/style.css`:

- Re-map existing `--md-*` surface, outline, text, and primary tokens to light-theme values.
- Update navigation rail and footer surfaces to white/silver instead of dark panels.
- Keep existing class names where possible so pages continue to work without broad markup changes.
- Avoid nested cards and decorative one-off components.

### Homepage

`src/pages/home.js` receives the most visible adjustment. Keep the current content order, but refine the hero into the approved A direction:

- Left side: logo, headline, supporting headline, body copy, and two CTAs.
- Right side: replace the current dark/glowing map emphasis with a light silver infrastructure visual.
- Add lightweight service/status cards floating over the geometric field.
- Keep the Ireland map asset only if it can be integrated subtly without fighting the silver infrastructure look.
- Preserve the current CTA destinations: `/contact` and `/services`.

The services, insights, and CTA sections should keep their current copy and intent, but their cards should become white/silver panels with slimmer borders, calmer shadows, and green signal accents.

### Other Pages

All existing pages should inherit the light visual system:

- `services.js`, `approach.js`, `solutions.js`, `about.js`, `insights.js`, `case.js`, `contact.js`, and `company-profile.js` should not need structural rewrites unless a class relies on dark-theme assumptions.
- Page headers should use the same bright section label, large charcoal title, and muted subtitle pattern.
- Existing cards should become light cards through shared CSS instead of duplicated per-page overrides.
- Contact form readability, iframe spacing, disabled states, and validation states must remain clear.

## Components And Styles

### Buttons

- `btn-filled`: black/charcoal pill with white text.
- `btn-outlined`: transparent or white pill with silver border and charcoal text.
- `btn-tonal`: pale green or pale silver treatment, used sparingly.
- Keep icons inside important buttons where already present.
- Focus states must remain visible on light backgrounds.

### Cards

- Cards use white background, 1px silver border, 8px border radius where possible, and restrained shadows.
- Service icons use thin-line icon treatment with green signal accents.
- Hover states should lift slightly or change border/shadow, not flood the card with color.

### Hero Geometry

Preferred implementation is CSS-based geometry and gradients inside the hero so the page remains lightweight and easy to maintain. If a raster asset becomes necessary for polish, place it under `public/assets/`, verify the exact filename before referencing it, and keep the asset focused on bright silver infrastructure rather than generic stock imagery.

### Motion

- Keep existing scroll reveal patterns if they still feel polished in the light theme.
- Remove or soften heavy glow animations from the old dark theme.
- Respect `prefers-reduced-motion: reduce`.
- Avoid motion that changes layout dimensions.

## Accessibility And Responsive Behavior

- Maintain strong contrast for body text, labels, and buttons on white/silver backgrounds.
- Keep semantic anchors and existing accessibility labels.
- Check desktop and mobile hero layout explicitly.
- On mobile, stack hero content above the infrastructure visual and keep CTA buttons readable without text overflow.
- Do not use viewport-width-driven font scaling that causes unstable text sizing.
- Ensure cards, labels, buttons, and nav text do not overlap at 768px and below.

## Implementation Scope

Expected files:

- `src/style.css`: main light-theme token remap and component visual updates.
- `src/pages/home.js`: homepage hero markup refinements for the silver infrastructure visual and floating modules.
- `src/main.js`: only if the app shell needs minor class or copy-neutral structural support.
- `public/assets/`: only if a new verified visual asset is needed.

Expected untouched files:

- `baytech.cloud/` generated production output.
- Sensitive content values in footer/contact/company profile.
- Routing definitions unless an existing class dependency requires a tiny markup-safe adjustment.

## Verification

Before completing implementation:

- Run `npm run build`.
- Inspect the local site in the browser on desktop.
- Inspect mobile layout around 390px wide or equivalent.
- Check at least homepage, services, contact, and one secondary content page.
- Confirm no generated `baytech.cloud/` output is included in the commit unless explicitly requested.
- Confirm `git status` only includes intended source/spec changes.

## Acceptance Criteria

- The site reads as a bright white/silver technology consulting website.
- The homepage first viewport reflects the approved A / Silver Infrastructure direction.
- Baytech green appears as a controlled signal color, not as the dominant background.
- Existing navigation, routes, CTAs, and business content continue to work.
- Mobile layout is polished and readable.
- Build succeeds.
- The implementation remains within the existing vanilla Vite architecture.

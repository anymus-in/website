# Hero redesign — "Big headline + real shot"

**Date:** 2026-07-18
**Scope:** Homepage hero only (`src/components/sections/Hero.tsx`). No other sections change.

## Problem

The homepage reads as "AI sloppy": heavily filled, no white space, no real imagery,
no single focal point. The hero is the worst offender — it stacks an animated
line-by-line headline reveal, a self-drawing pencil stroke, a 4-card animated
schematic filled with gray placeholder bars, a ticking live feed, a blueprint
grid band, registration marks, a "Fig. 01" caption, and a "Doc. 00 / Index"
header rule, all on the first screen. The only "product" shown is fake wireframe
bars.

A real product mockup now exists at `public/images/mockup.png` (3600×2078, the
Anymus workspace dashboard with realistic data).

## Design

One centered column with generous vertical white space, then the real product
shot, cropped by the fold.

### Removed from the hero

- `SystemSchematic` entirely: stage cards, `MiniRow` placeholder bars,
  connectors, live feed, stage dots, `FEED`/`STAGE_META`/`RULES`/`SPARK` data
- `SignalTraces` blueprint band, ruler ticks, `graph-bg` backdrop
- Registration marks (`reg-marks` plate) and the "Fig. 01" caption
- The "Doc. 00 / Index" document-header rule row (the doc motif stays on the
  rest of the site — the hero just stops announcing it)
- Staggered per-line indents on the headline (`sm:pl-[8vw]` etc.)
- The "Or read the index first ↓" link (the cropped mockup is the scroll
  invitation)

### Structure (top to bottom, all centered)

1. **Headline** — same words: "We build the system your business runs on."
   Same serif (Newsreader, light, tight tracking), set as a clean 2-line block.
   Slightly smaller max size than today (headline no longer has to fill the
   whole screen — cap around `clamp(38px, 7.5vw, 96px)`).
2. **Sub-sentence** — one sentence, max-width ~560px:
   "One connected system — websites, automation, internal tools — built around
   what you already use."
3. **CTA** — single primary button "Book a discovery call →" (existing
   `btn-stamp` style), with the quiet reassurance line beneath:
   "✳ Free 30-min call · no lock-in · 24h reply".
4. **Product shot** — `public/images/mockup.png` via `next/image` (priority,
   proper `sizes`), ~min(1100px, 92vw) wide, sharp. The hero section clips the
   image so roughly the top 65% is visible above the fold and the bottom is
   cropped — it visibly continues, inviting scroll. On short/mobile viewports
   the image may sit fully below the text stack; cropping is a desktop
   nicety, not a requirement.

### Visual treatment

- The mockup (cool blue/white SaaS palette) is framed as an *exhibit* on the
  warm paper background: thin warm hairline border (`rule` token), existing
  `--shadow-card`, small radius. No fake browser dots — the mockup carries its
  own app chrome.
- The red pencil stroke under the word "runs" **stays** — the single surviving
  accent/human gesture on the screen.
- Red otherwise appears only in the CTA button.

### Motion

One entrance, no loops:

- Text stack fades/rises once on load; image follows a beat later.
- Use existing motion primitives (`Reveal` or equivalent simple
  `motion.div` with the project's easing); `useReducedMotion` respected —
  reduced motion gets static content.
- The `PencilStroke` draw-in animation may stay (it already respects reduced
  motion).
- Drop the scroll-linked `useScroll`/`useSpring` drift and fade on the hero.

## Out of scope (noted for later)

- The `Ticker` section immediately below the hero ("Ten apps → One system")
  was also flagged as AI-ish copy — untouched here, candidate for a follow-up
  pass.
- Rest-of-page de-slop (density, doc labels, testimonial photos).

## Success criteria

- First screen shows: headline, one sentence, one CTA, real product image.
  Nothing animates continuously.
- `npm run build` passes; no layout shift from the image (explicit
  width/height or `fill` with sized container).
- Mobile (~390px) and desktop (~1440px) both show a calm, uncrowded first
  screen with the real mockup visible.

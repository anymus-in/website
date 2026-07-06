# Mobile Improvement Plan — Defects + Polish

_Scope agreed 2026-07-06: fix real defects (as a hard, measured gate) + mobile-native polish. Vertical-rhythm/page-height rework explicitly deferred._

## Context

Audited live at 390×844 (iPhone 14 width) against the running dev build, with DOM measurement + full-page screenshots. The mobile view is already structurally sound — no horizontal overflow (`scrollWidth === 390`), a clean full-screen hamburger menu, hero cards as a snap carousel, BuildSheet as a vertical timeline. What remains are legibility/accessibility defects and missing mobile-native affordances. This plan removes the defects and adds the polish that makes the site feel designed *for* the phone, not adapted to it.

---

## Part A — Defects (hard gate: measured, not eyeballed)

### A1. Micro-typography floor (legibility)
The editorial mono "marginalia" voice uses fixed sizes far below phone legibility: `text-[7.5px]` ×3, `text-[8px]` ×11, `text-[8.5px]` ×6, `text-[9px]` ×20, `text-[9.5px]` ×4, `text-[10px]` ×13 across `src/components/`.

- **Rule:** on mobile, essential text ≥11px; decorative texture either stays tiny *and* gets `aria-hidden` + reduced prominence, or is hidden below `sm:`.
- **Mechanism:** responsive floor per instance (`text-[11px] sm:text-[8px]`) — desktop look unchanged. Where the `.anno` utility (globals.css) is the source, add the floor there once.
- Triage each of the ~57 instances as *essential* vs *texture*; Hero.tsx (30 breakpoint usages) and ServiceLayout.tsx are the dense spots.

### A2. Tap targets ≥44×44px
16 interactive elements measured under 44px: navbar links (~23px tall), hero secondary links, footer links, carousel dots.

- Pad the interactive element (`py-*`, negative margin to preserve layout) — visual size unchanged, hit area grows.
- Carousel dots: wrap in a padded invisible hit-area.
- **Gate:** re-run the measurement script; real controls under 44px must reach 0.

### A3. Grain overlay z-index sanity check
`body::before` film grain sits at `z-index: 9999` (globals.css:106), above navbar (`z-50`) and ScrollProgress (`z-[100]`). It's `pointer-events:none`, so purely visual — verify it isn't muddying fixed chrome on mobile; if it is, move it below chrome (e.g. `z-40`) and confirm the texture still reads.

---

## Part B — Mobile-native polish

### B1. Sticky "Start a project" CTA
Compact bottom bar that slides in after the hero scrolls out of view, keeping the primary conversion one tap away.
- New `src/components/layout/MobileCtaBar.tsx`, mounted in `page.tsx`; `md:hidden`.
- Use Framer Motion + `useReducedMotion` (match existing primitives in `src/components/motion/`).
- Respect `env(safe-area-inset-bottom)`.

### B2. Carousel affordance (Hero + Ticker)
Swipeability is currently signaled only by a peeking half-card.
- Add edge-fade masks (`mask-image` gradient) on the scroll containers.
- Animate the existing position dots (Hero.tsx:324) on scroll-snap change so state is obvious.

### B3. Safe-area insets
Add `env(safe-area-inset-*)` padding to the fixed navbar (Navbar.tsx:63), the mobile menu overlay (Navbar.tsx:130), and the new CTA bar. Ensure `viewport-fit=cover` is set in `layout.tsx` metadata if needed.

### B4. Tap feedback
Mobile has no hover. Add `:active` states (subtle scale/opacity via `active:` variants) to cards, buttons, and nav links so taps feel acknowledged.

---

## Files touched (main)

- `src/components/sections/Hero.tsx` — A1, A2, B2 (note: has uncommitted changes already)
- `src/components/layout/Navbar.tsx` — A2, B3, B4
- `src/components/layout/Footer.tsx` — A1, A2
- `src/components/sections/Ticker.tsx`, `ServiceIndex.tsx`, `BuildSheet.tsx`, `Testimonials.tsx`, `Interlude.tsx`, `ClosingCta.tsx`, `Principles.tsx` — A1 triage, B4
- `src/components/layout/ServiceLayout.tsx` — A1 (service pages share the voice)
- `src/app/globals.css` — A1 (`.anno` floor), A3
- `src/app/layout.tsx` — B3 (`viewport-fit=cover`)
- **New:** `src/components/layout/MobileCtaBar.tsx` — B1

## Verification

1. Playwright at **360 / 390 / 430px**: assert `scrollWidth === clientWidth` (no overflow regressions).
2. Re-run tap-target scan: 0 real controls under 44×44.
3. Text scan: no *essential* text under 11px at 390px.
4. Screenshot every section before/after at 390px; visually diff.
5. Toggle `prefers-reduced-motion` and confirm the sticky CTA and dot animations short-circuit.
6. `npm run build` + `npm run lint` clean.

## Sequencing

1. A1 + A2 together (same files, one pass per component, screenshot each).
2. A3 quick check.
3. B3 (safe-area groundwork) → B1 (sticky CTA) → B2 → B4.

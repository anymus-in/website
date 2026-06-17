# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Single-page marketing site for **anymus** — an ERP/CRM/business automation implementation agency. One route (`/`), no backend.

### Stack
- **Next.js 16** (App Router) — see AGENTS.md: read `node_modules/next/dist/docs/` before writing Next.js code
- **React 19** with **TypeScript**
- **Tailwind CSS v4** — configured entirely via `@theme inline` in `src/app/globals.css`; no `tailwind.config.*` file
- **Framer Motion** for all animation
- **@splinetool/react-spline** for 3D scenes (always lazy-loaded with `dynamic(..., { ssr: false })`)

### Directory layout
```
src/
  app/
    globals.css       # Tailwind @theme tokens (colors, fonts, radii, shadows)
    layout.tsx        # Google Fonts: Newsreader (serif), Inter (sans), JetBrains Mono
    page.tsx          # Assembles all sections in order
  components/
    layout/           # AnnouncementBar, Navbar, Footer
    motion/           # Reusable animation primitives
    sections/         # One file per homepage section
  lib/utils.ts        # cn() helper (clsx + tailwind-merge)
```

### Design tokens
All tokens live in `globals.css` under `@theme inline`. Key groups:
- **Colors**: `ink`, `paper`, `line`, `accent` (warm amber), `grad-*` (gradient palette)
- **Fonts**: `--font-serif` / `--font-sans` / `--font-mono` map to the Google Font CSS variables set in `layout.tsx`
- **Radii**: `sm` (8px) → `2xl` (32px) → `full`
- **Shadows**: `--shadow-card`

### Motion primitives (`src/components/motion/`)
- `Reveal` / `RevealGroup` / `RevealItem` — scroll-triggered fade+rise; respects `useReducedMotion`
- `Highlight` — animated highlighter-marker swipe behind a key word/phrase
- `ScrollProgress` — fixed top progress bar

Use these primitives for all new animation rather than writing inline Framer Motion variants.

### Adding a section
1. Create `src/components/sections/MySection.tsx`
2. Import and place it in `src/app/page.tsx`
3. Use `Reveal` / `RevealGroup` for scroll animations; use design tokens for colors

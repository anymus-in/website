# Hero De-Slop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the over-decorated animated hero with a calm centered stack — headline, one sentence, one CTA — over the real product mockup (`public/images/mockup.png`), cropped by the fold.

**Architecture:** Full rewrite of `src/components/sections/Hero.tsx` as a single client component. All fake-schematic subcomponents and their data are deleted from the file; `PencilStroke` is the only helper kept. The mockup renders via `next/image` with explicit dimensions (no layout shift). One entrance animation via `framer-motion`, gated on `useReducedMotion`. No other file changes.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4 tokens from `globals.css`, framer-motion.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-18-hero-deslop-design.md`
- Only `src/components/sections/Hero.tsx` may change. Do NOT delete or edit `src/components/motion/LineReveal.tsx`, `src/components/motion/SignalTraces.tsx`, or `src/components/icons.tsx` — they are used by other sections/pages.
- Headline copy verbatim: `We build the system your business runs on.` — pencil stroke stays under "runs".
- Sub-copy verbatim: `One connected system — websites, automation, internal tools — built around what you already use.`
- Reassurance line verbatim: `✳ Free 30-min call · no lock-in · 24h reply`
- CTA: `Book a discovery call →` linking to `/schedule-call`, existing `btn-stamp` class.
- Image: `/images/mockup.png`, intrinsic size 3600×2078, `priority`, explicit `sizes`.
- No looping/continuous animation anywhere in the hero. `useReducedMotion` must yield a static hero.
- Brand name is "Anymus" (capital A) in any copy.
- No test suite exists in this repo. Verification = `npm run build` + Playwright screenshots at 1440×900 and 390×844.
- A dev server already runs at `http://localhost:3000` (PID may vary); do not start a second one — if you need a fresh build state, reuse it (Turbopack hot-reloads).

---

### Task 1: Rewrite Hero.tsx

**Files:**
- Modify: `src/components/sections/Hero.tsx` (full replacement, 569 lines → ~100)

**Interfaces:**
- Consumes: `btn-stamp`, `anno`, `rule`, `text-inkwarm`, `text-inkwarm-soft`, `text-mark`, `--shadow-card`, `--color-mark` (all defined in `src/app/globals.css`); `/images/mockup.png` (3600×2078).
- Produces: default export `Hero(): JSX.Element`, still imported by `src/app/page.tsx` (no change needed there).

- [ ] **Step 1: Replace the entire contents of `src/components/sections/Hero.tsx` with:**

```tsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/* A hand-drawn red pencil stroke that draws itself under a word */
function PencilStroke({ delay = 0.9 }: { delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className="absolute left-[-3%] bottom-[-0.06em] w-[106%] h-[0.13em] pointer-events-none"
    >
      <motion.path
        d="M2 6.5 C 22 3.5, 44 8, 63 5.5 S 90 4, 98 6"
        fill="none"
        stroke="var(--color-mark)"
        strokeWidth="2.6"
        strokeLinecap="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.55, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

/* ── Hero — calm centered stack over the real product ── */

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative lg:max-h-screen overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-[calc(104px+env(safe-area-inset-top))] sm:pt-[calc(132px+env(safe-area-inset-top))] flex flex-col items-center text-center">
        <motion.h1
          {...rise(0.1)}
          className="font-serif font-light text-[clamp(38px,7.5vw,92px)] leading-[1.05] tracking-[-0.03em] text-inkwarm max-w-[16ch]"
        >
          We build the system your business{" "}
          <span className="relative inline-block">
            <span className="italic">runs</span>
            <PencilStroke />
          </span>{" "}
          on.
        </motion.h1>

        <motion.p
          {...rise(0.25)}
          className="mt-6 sm:mt-7 text-[15px] sm:text-[17px] text-inkwarm-soft leading-relaxed max-w-[560px]"
        >
          One connected system — websites, automation, internal tools — built
          around what you already use.
        </motion.p>

        <motion.div
          {...rise(0.4)}
          className="mt-8 sm:mt-9 flex flex-col items-center gap-4"
        >
          <a
            href="/schedule-call"
            className="btn-stamp px-7 py-4 text-[15px] font-medium tracking-[-0.01em]"
          >
            Book a discovery call
            <span aria-hidden className="font-mono text-[12px]">→</span>
          </a>
          <p className="anno !text-[11px] sm:!text-[10px]">
            <span className="text-mark">✳</span> Free 30-min call · no lock-in
            · 24h reply
          </p>
        </motion.div>
      </div>

      {/* The real product — cropped by the fold on tall viewports */}
      <motion.div
        {...rise(0.55)}
        className="relative max-w-[1140px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16"
      >
        <div className="rounded-[8px] border rule shadow-[var(--shadow-card)] overflow-hidden bg-white">
          <Image
            src="/images/mockup.png"
            alt="The Anymus workspace — enquiries, customers, automations, and pipeline in one dashboard"
            width={3600}
            height={2078}
            priority
            sizes="(min-width: 1140px) 1076px, 92vw"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Lint and build**

Run: `npm run lint && npm run build`
Expected: both succeed; no unused-import or type errors. (If lint flags the `ease` tuple typing, the `as const` in `rise` is the intended fix — do not switch to a string easing.)

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: replace animated schematic hero with calm stack over real product shot

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Visual verification and spacing tune

**Files:**
- Modify (only if tuning needed): `src/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: the rewritten Hero from Task 1; dev server at `http://localhost:3000`.
- Produces: screenshots proving the success criteria; optional spacing-tweak commit.

- [ ] **Step 1: Screenshot desktop**

Using Playwright MCP: set viewport 1440×900 (`browser_resize`), navigate to `http://localhost:3000`, wait ~1.5s for the entrance animation to settle, screenshot the viewport.
Expected: headline (2 lines), sub-sentence, CTA button, reassurance line, and the TOP PORTION of the mockup all visible; mockup bottom cropped by the fold; no schematic cards, no live feed, no "Doc. 00 / Index" row, no blueprint grid.

- [ ] **Step 2: Screenshot mobile**

Resize viewport to 390×844, reload, screenshot.
Expected: headline readable without overflow, CTA tappable, mockup visible below the stack (full image acceptable on mobile — cropping is a desktop nicety per spec). No horizontal scrollbar.

- [ ] **Step 3: Tune only if criteria fail**

If at 1440×900 less than roughly the top third of the mockup is visible, reduce vertical spend in this order and re-screenshot: headline clamp max 92→84px; `pt-[calc(132px...)]`→`pt-[calc(116px...)]`; `mt-12 sm:mt-16`→`mt-10 sm:mt-12` on the image block. Stop as soon as the criterion passes. If no tuning was needed, skip Step 4.

- [ ] **Step 4: Commit the tune (only if Step 3 changed the file)**

```bash
git add src/components/sections/Hero.tsx
git commit -m "fix: tune hero vertical rhythm so mockup shows above the fold

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

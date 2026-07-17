"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const PHASES = [
  {
    week: "Wk 00",
    title: "Discovery",
    body: "A free call. We map how work actually moves through your business today — the handoffs, the workarounds, the things nobody wrote down.",
    pos: 0,
  },
  {
    week: "Wk 01",
    title: "Blueprint",
    body: "A clear scope, timeline, and price for exactly what gets built. You know what you're getting before anything gets built.",
    pos: 1 / 6,
  },
  {
    week: "Wk 02–05",
    title: "Build",
    body: "We design, build, and wire the system into the tools you already use. You see working software early, not a big reveal at the end.",
    pos: 3 / 6,
  },
  {
    week: "Wk 06 →",
    title: "Handover",
    body: "Your team trained hands-on, everything running against real work, and support on hand through the first weeks of going live.",
    pos: 1,
  },
];

const CONDITIONS = [
  "Free discovery call",
  "Built on your existing tools",
  "Clear scope & timeline",
  "No long-term lock-in",
];

/* Desktop: milestones measured along a drafting ruler that draws itself.
   Mobile: a vertical spine with the same stations. */
export default function BuildSheet() {
  const rulerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rulerRef,
    offset: ["start 0.85", "start 0.35"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: spineProgress } = useScroll({
    target: spineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const spineDraw = useSpring(spineProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="process" className="relative border-t rule bg-sheet-lift/40">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-32">
        <Reveal>
          <div className="flex items-baseline justify-between border-b rule-strong pb-3">
            <span className="anno">Sec. 03 — The build sheet</span>
            <span className="anno hidden sm:block">Weeks, not months</span>
          </div>
        </Reveal>

        <div className="pt-12 sm:pt-16 pb-14 sm:pb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <LineReveal
            as="h2"
            className="font-serif font-light text-[clamp(34px,5.5vw,68px)] leading-[1.0] tracking-[-0.025em] text-inkwarm"
            lines={[
              <span key="1">Six weeks, measured</span>,
              <span key="2">
                like a <span className="italic text-mark">drawing</span>.
              </span>,
            ]}
          />
          <Reveal delay={0.2}>
            <p className="text-[13.5px] text-inkwarm-soft leading-relaxed max-w-[340px] lg:text-right lg:pb-2">
              Four milestones, one Anymus team, no surprises. You&rsquo;ll know
              what &ldquo;done&rdquo; means before we start — and see it running
              before we leave.
            </p>
          </Reveal>
        </div>

        {/* ── Desktop: the ruler ── */}
        <div ref={rulerRef} className="hidden lg:block">
          {/* Measured ruler with week graduations */}
          <div className="relative h-[46px] mb-4">
            <div className="ruler-ticks absolute bottom-0 left-0 right-0 h-[12px]" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-hairline-strong" aria-hidden />
            <motion.div
              aria-hidden
              style={reduce ? undefined : { scaleX: draw }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-mark origin-left"
            />
            {/* Week labels along the scale */}
            {["Wk 00", "Wk 01", "Wk 02", "Wk 03", "Wk 04", "Wk 05", "Wk 06"].map(
              (w, i) => (
                <span
                  key={w}
                  className="anno !text-[9px] absolute bottom-[18px] -translate-x-1/2"
                  style={{ left: `${(i / 6) * 100}%` }}
                >
                  {w}
                </span>
              ),
            )}
            {/* Milestone stations */}
            {PHASES.map((p) => (
              <span
                key={p.title}
                aria-hidden
                className="absolute -bottom-[5px] w-[11px] h-[11px] rounded-full border-2 border-mark bg-sheet -translate-x-1/2"
                style={{ left: `calc(${p.pos * 100}% )` }}
              />
            ))}
          </div>

          {/* Milestone plaques */}
          <RevealGroup className="grid grid-cols-4 gap-5 pt-10" stagger={0.12}>
            {PHASES.map((p, i) => (
              <RevealItem key={p.title} className={i % 2 === 1 ? "lg:mt-12" : ""}>
                <div className="group relative border rule bg-sheet-lift h-full px-6 pt-6 pb-5 rounded-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_rgba(200,57,27,0.9)] hover:border-mark">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mark">
                      {p.week}
                    </span>
                    <span className="anno !text-[9px]">{`0${i + 1}/04`}</span>
                  </div>
                  <h3 className="font-serif text-[26px] leading-none text-inkwarm mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[12.5px] text-inkwarm-soft leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* ── Mobile / tablet: vertical spine ── */}
        <div ref={spineRef} className="lg:hidden relative">
          <div aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
          <motion.div
            aria-hidden
            style={reduce ? undefined : { scaleY: spineDraw }}
            className="absolute left-[4.5px] top-2 bottom-2 w-[2px] bg-mark origin-top"
          />
          <div className="space-y-12">
            {PHASES.map((p, i) => (
              <Reveal key={p.title} className="relative pl-10" amount={0.3}>
                <span
                  aria-hidden
                  className="absolute left-0 top-[4px] w-[11px] h-[11px] rounded-full border-2 border-mark bg-sheet"
                />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-mark block mb-1.5">
                  {p.week} · {`0${i + 1}/04`}
                </span>
                <h3 className="font-serif font-light text-[30px] leading-none text-inkwarm mb-2.5">
                  {p.title}
                </h3>
                <p className="text-[14px] text-inkwarm-soft leading-relaxed">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Conditions of engagement — stamped tickets */}
        <Reveal delay={0.1}>
          <div className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {CONDITIONS.map((c, i) => (
              <div
                key={c}
                className="group relative border rule bg-sheet-lift/70 hover:bg-sheet-lift px-4 sm:px-6 py-5 sm:py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-mark)] rounded-[2px]"
              >
                <span className="anno anno-mark block mb-4">{`✳ Condition ${i + 1}`}</span>
                <span className="font-serif text-[16px] sm:text-[19px] leading-tight text-inkwarm block">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

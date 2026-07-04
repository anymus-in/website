"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const PHASES = [
  {
    week: "Wk 00",
    title: "Discovery",
    body: "A free call. We map how work actually moves through your business today — the handoffs, the workarounds, the things nobody wrote down.",
    note: "One conversation",
  },
  {
    week: "Wk 01",
    title: "Blueprint",
    body: "A clear scope, timeline, and price for exactly what gets built. You know what you're getting before anything gets built.",
    note: "Fixed on paper",
  },
  {
    week: "Wk 02–05",
    title: "Build",
    body: "We design, build, and wire the system into the tools you already use. You see working software early, not a big reveal at the end.",
    note: "Working software early",
  },
  {
    week: "Wk 06 →",
    title: "Handover",
    body: "Your team trained hands-on, everything running against real work, and support on hand through the first weeks of going live.",
    note: "Running, not handed off",
  },
];

const CONDITIONS = [
  "Free discovery call",
  "Built on your existing tools",
  "Clear scope & timeline",
  "No long-term lock-in",
];

export default function BuildSheet() {
  const spineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="process" className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-32">
      <Reveal>
        <div className="flex items-baseline justify-between border-b rule-strong pb-3">
          <span className="anno">Sec. 03 — The build sheet</span>
          <span className="anno hidden sm:block">Weeks, not months</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pt-12 sm:pt-16">
        {/* Sticky heading */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <LineReveal
              as="h2"
              className="font-serif font-light text-[clamp(32px,5vw,58px)] leading-[1.04] tracking-[-0.025em] text-inkwarm"
              lines={[
                <span key="1">From first call</span>,
                <span key="2" className="pl-[1.2em]">
                  to a <span className="italic text-mark">running</span>
                </span>,
                <span key="3">system.</span>,
              ]}
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-[13.5px] text-inkwarm-soft leading-relaxed max-w-[340px]">
                Four phases, one owner, no surprises. You&rsquo;ll know what
                &ldquo;done&rdquo; means before we start — and you&rsquo;ll see it
                running before we leave.
              </p>
            </Reveal>
          </div>
        </div>

        {/* The spine — a red thread drawn by scroll, phases as stations */}
        <div ref={spineRef} className="lg:col-span-7 relative">
          <div
            aria-hidden
            className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline"
          />
          <motion.div
            aria-hidden
            style={reduce ? undefined : { scaleY: draw }}
            className="absolute left-[4.5px] top-2 bottom-2 w-[2px] bg-mark origin-top"
          />
          <div className="space-y-14 sm:space-y-20">
            {PHASES.map((p, i) => (
              <Reveal key={p.title} className="relative pl-10 sm:pl-14" amount={0.4}>
                <span
                  aria-hidden
                  className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border border-hairline-strong bg-sheet"
                />
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-3">
                  <span className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-mark">
                    {p.week}
                  </span>
                  <h3 className="font-serif font-light text-[clamp(28px,3.6vw,44px)] leading-none text-inkwarm">
                    {p.title}
                  </h3>
                  <span className="anno hidden sm:inline ml-auto">{`0${i + 1} / 04`}</span>
                </div>
                <p className="text-[14px] sm:text-[15px] text-inkwarm-soft leading-relaxed max-w-[460px] mb-2.5">
                  {p.body}
                </p>
                <p className="anno">{p.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Conditions of engagement — stamped tickets */}
      <Reveal delay={0.1}>
        <div className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CONDITIONS.map((c, i) => (
            <div
              key={c}
              className="group relative border rule bg-sheet-lift/60 hover:bg-sheet-lift px-4 sm:px-6 py-5 sm:py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-mark)] rounded-[2px]"
            >
              <span className="anno anno-mark block mb-4">{`✳ Condition ${i + 1}`}</span>
              <span className="font-serif text-[16px] sm:text-[19px] leading-tight text-inkwarm block">
                {c}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

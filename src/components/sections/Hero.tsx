"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import LineReveal from "@/components/motion/LineReveal";

/* ── The schematic — how work moves once the system is in ── */

const STAGES = [
  {
    key: "capture",
    title: "Enquiry",
    lines: ["WhatsApp", "Website", "Phone"],
    note: "Every channel, captured",
  },
  {
    key: "crm",
    title: "CRM",
    lines: ["One record", "Assigned owner", "Full history"],
    note: "Nothing lives in an inbox",
  },
  {
    key: "automation",
    title: "Automation",
    lines: ["Routed", "Followed up", "Escalated"],
    note: "No one has to remember",
  },
  {
    key: "dashboard",
    title: "Dashboard",
    lines: ["Live pipeline", "Real numbers", "One truth"],
    note: "Decisions on data",
  },
];

const FEED: { t: string; text: string; stage: number }[] = [
  { t: "10:42", text: "Enquiry via WhatsApp — Mehta Textiles", stage: 0 },
  { t: "10:42", text: "Contact created in CRM · assigned to Priya", stage: 1 },
  { t: "10:43", text: "Follow-up scheduled · quote drafted", stage: 2 },
  { t: "10:44", text: "Pipeline updated · ₹1.4L added", stage: 3 },
  { t: "10:51", text: "Enquiry via website form — Sharma Traders", stage: 0 },
  { t: "10:51", text: "Duplicate check passed · record created", stage: 1 },
  { t: "10:52", text: "Intro message sent automatically", stage: 2 },
  { t: "10:52", text: "Dashboard refreshed · 2 new this hour", stage: 3 },
];

function StageCard({
  stage,
  active,
  index,
}: {
  stage: (typeof STAGES)[number];
  active: boolean;
  index: number;
}) {
  return (
    <div
      className={`relative flex-1 border rounded-[2px] px-4 py-3.5 sm:px-5 sm:py-4 transition-colors duration-500 ${
        active ? "border-mark bg-sheet-lift" : "rule bg-sheet-lift/70"
      }`}
    >
      <div className="flex items-baseline justify-between mb-2.5">
        <span
          className={`anno !text-[9px] transition-colors duration-500 ${
            active ? "text-mark" : ""
          }`}
        >
          {`0${index + 1}`}
        </span>
        <span
          aria-hidden
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
            active ? "bg-mark live-dot" : "bg-hairline"
          }`}
        />
      </div>
      <p className="font-serif text-[17px] sm:text-[19px] leading-none text-inkwarm mb-2.5">
        {stage.title}
      </p>
      <ul className="space-y-1">
        {stage.lines.map((l) => (
          <li
            key={l}
            className="text-[10.5px] sm:text-[11px] font-mono text-inkwarm-soft leading-snug"
          >
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SystemSchematic() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const event = FEED[tick % FEED.length];
  const activeStage = reduce ? 3 : event.stage;

  return (
    <figure className="reg-marks plate p-4 sm:p-6 md:p-8">
      <span aria-hidden className="reg reg-tl" />
      <span aria-hidden className="reg reg-tr" />
      <span aria-hidden className="reg reg-bl" />
      <span aria-hidden className="reg reg-br" />

      {/* Stage flow */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-0">
        {STAGES.map((s, i) => (
          <div key={s.key} className="contents">
            <StageCard stage={s} active={activeStage === i} index={i} />
            {i < STAGES.length - 1 && (
              <>
                <div className="hidden md:flex items-center w-10 lg:w-14 shrink-0 px-1">
                  <div className="flow-line w-full" />
                </div>
                <div className="md:hidden flex justify-center h-7">
                  <div className="flow-line-y h-full" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Live feed */}
      <div className="mt-5 sm:mt-6 border-t rule pt-3.5 flex items-center gap-3 sm:gap-4 overflow-hidden">
        <span className="inline-flex items-center gap-1.5 shrink-0">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-live live-dot" />
          <span className="anno !text-[9px] !text-live">Live</span>
        </span>
        <div className="relative flex-1 h-[16px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={reduce ? "static" : tick}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 font-mono text-[10.5px] sm:text-[11.5px] text-inkwarm-soft whitespace-nowrap overflow-hidden text-ellipsis leading-[16px]"
            >
              <span className="text-inkwarm-faint">{event.t}</span>
              {"  —  "}
              {event.text}
            </motion.p>
          </AnimatePresence>
        </div>
        <span className="anno !text-[9px] hidden sm:block shrink-0">
          {STAGES[activeStage].note}
        </span>
      </div>

      <figcaption className="mt-3.5 flex items-center justify-between">
        <span className="anno">Fig. 01 — How work moves once the system is in</span>
        <span className="anno hidden sm:block">Scale — one enquiry, zero touches</span>
      </figcaption>
    </figure>
  );
}

/* ── Hero — an editorial opening spread ── */

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const drift = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), {
    stiffness: 80,
    damping: 24,
  });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);

  return (
    <section ref={ref} id="top" className="relative">
      {/* Vertical margin note (desktop) */}
      <span
        aria-hidden
        className="hidden xl:block absolute right-4 top-[220px] anno whitespace-nowrap [writing-mode:vertical-rl]"
      >
        Doc. 00 — Systems for operations / issued 2025
      </span>

      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-[92px] sm:pt-[116px]">
        {/* Document header rule */}
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-baseline justify-between border-b rule-strong pb-3"
        >
          <span className="anno">Anymus — Websites · Automation · Internal systems</span>
          <span className="anno anno-mark hidden sm:block">Doc. 00 / Index</span>
        </motion.div>

        {/* The statement — staggered, oversized, masked reveal */}
        <motion.div style={reduce ? undefined : { opacity: fade }} className="pt-10 sm:pt-16 pb-6">
          <LineReveal
            as="h1"
            className="font-serif font-light text-[clamp(46px,10.5vw,150px)] leading-[0.98] tracking-[-0.03em] text-inkwarm"
            lineClassName={(i) =>
              i === 1 ? "sm:pl-[8vw]" : i === 2 ? "sm:pl-[2vw]" : undefined
            }
            lines={[
              <span key="l1">We build</span>,
              <span key="l2">
                the system{" "}
                <span className="hidden md:inline-block align-middle -mt-3 ml-4 max-w-[200px] font-sans font-normal text-[12px] leading-snug tracking-normal text-inkwarm-faint">
                  websites · automations
                  <br />· internal tools, as one
                </span>
              </span>,
              <span key="l3">
                your business <span className="italic text-mark">runs</span> on.
              </span>,
            ]}
          />
        </motion.div>

        {/* Sub + CTA — asymmetric, pushed to the right margin */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-16 pb-14 sm:pb-20"
        >
          <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed max-w-[400px] md:pt-1.5">
            Designed, built, and wired together around the tools you already
            use — one connected system, instead of ten disconnected apps and a
            very tired team.
          </p>
          <div className="flex flex-col items-start gap-5 shrink-0">
            <a
              href="/schedule-call"
              className="btn-stamp px-7 py-4 text-[15px] font-medium tracking-[-0.01em]"
            >
              Book a discovery call
              <span aria-hidden className="font-mono text-[12px]">→</span>
            </a>
            <a
              href="#index"
              className="u-draw text-[13px] font-medium text-inkwarm"
            >
              Or read the index first ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Fig. 01 — the plate breaks across the section boundary */}
      <div className="relative">
        <div aria-hidden className="absolute inset-x-0 bottom-0 top-[45%] bg-sheet-deep/60 border-t rule" />
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1240px] mx-auto px-4 sm:px-8 pb-16 sm:pb-24"
        >
          <motion.div style={reduce ? undefined : { y: drift }}>
            <SystemSchematic />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

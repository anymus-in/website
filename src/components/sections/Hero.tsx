"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
        active ? "border-mark bg-sheet-lift" : "rule bg-sheet-lift/60"
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
    <figure className="reg-marks border rule bg-sheet-deep/40 p-4 sm:p-6 md:p-8">
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
                {/* Horizontal connector (desktop) */}
                <div className="hidden md:flex items-center w-10 lg:w-14 shrink-0 px-1">
                  <div className="flow-line w-full" />
                </div>
                {/* Vertical connector (mobile) */}
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

/* ── Hero ── */

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-[96px] sm:pt-[120px]"
      >
        {/* Document header rule */}
        <motion.div
          variants={rise}
          className="flex items-baseline justify-between border-b rule-strong pb-3 mb-10 sm:mb-14"
        >
          <span className="anno">Anymus — Websites · Automation · Internal systems</span>
          <span className="anno anno-mark hidden sm:block">Doc. 00 / Index</span>
        </motion.div>

        <div className="max-w-[1080px]">
          <motion.h1
            variants={rise}
            className="font-serif font-light text-[clamp(42px,9.5vw,104px)] leading-[1.02] tracking-[-0.025em] text-inkwarm mb-7 sm:mb-9"
          >
            We build the system
            <br />
            your business{" "}
            <em className="font-normal not-italic">
              <span className="italic text-mark">runs</span>
            </em>{" "}
            on.
          </motion.h1>

          <motion.div
            variants={rise}
            className="flex flex-col md:flex-row md:items-end gap-7 md:gap-14 mb-12 sm:mb-16"
          >
            <p className="text-[15px] sm:text-[16.5px] text-inkwarm-soft leading-relaxed max-w-[520px]">
              Websites, automations, and internal tools — designed, built, and
              wired together around the tools you already use. One connected
              system, instead of ten disconnected apps and a very tired team.
            </p>
            <div className="flex items-center gap-6 sm:gap-8 shrink-0">
              <a
                href="/schedule-call"
                className="btn-stamp px-6 sm:px-7 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em]"
              >
                Book a discovery call
                <span aria-hidden className="font-mono text-[12px]">→</span>
              </a>
              <a
                href="#index"
                className="u-draw text-[14px] font-medium text-inkwarm hidden sm:inline-block"
              >
                Browse the index ↓
              </a>
            </div>
          </motion.div>
        </div>

        {/* Fig. 01 — the schematic */}
        <motion.div variants={rise} className="pb-16 sm:pb-24 px-1.5 sm:px-0">
          <SystemSchematic />
        </motion.div>
      </motion.div>
    </section>
  );
}

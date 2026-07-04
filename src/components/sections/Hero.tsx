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
    metric: "3 new today",
    note: "Every channel, captured",
  },
  {
    key: "crm",
    title: "CRM",
    lines: ["One record", "Assigned owner", "Full history"],
    metric: "1,204 records",
    note: "Nothing lives in an inbox",
  },
  {
    key: "automation",
    title: "Automation",
    lines: ["Routed", "Followed up", "Escalated"],
    metric: "12 rules live",
    note: "No one has to remember",
  },
  {
    key: "dashboard",
    title: "Dashboard",
    lines: ["Live pipeline", "Real numbers", "One truth"],
    metric: "spark",
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

const SPARK = [3, 5, 4, 7, 6, 9];

function Sparkline({ active }: { active: boolean }) {
  return (
    <span className="inline-flex items-end gap-[2px] h-[12px]" aria-hidden>
      {SPARK.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-t-[1px] transition-colors duration-500 ${
            active && i === SPARK.length - 1 ? "bg-mark" : "bg-inkwarm/20"
          }`}
          style={{ height: `${h + 3}px` }}
        />
      ))}
    </span>
  );
}

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
      className={`relative flex-1 border rounded-[2px] px-4 py-3.5 sm:px-5 sm:py-4 transition-all duration-500 ${
        active
          ? "border-mark bg-sheet-lift shadow-[4px_4px_0_0_rgba(200,57,27,0.18)]"
          : "rule bg-sheet-lift/80"
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
      <ul className="space-y-1 mb-3">
        {stage.lines.map((l) => (
          <li
            key={l}
            className="text-[10.5px] sm:text-[11px] font-mono text-inkwarm-soft leading-snug"
          >
            {l}
          </li>
        ))}
      </ul>
      <div className="border-t rule pt-2 flex items-center justify-between min-h-[22px]">
        {stage.metric === "spark" ? (
          <Sparkline active={active} />
        ) : (
          <span
            className={`font-mono text-[9px] transition-colors duration-500 ${
              active ? "text-mark" : "text-inkwarm-faint"
            }`}
          >
            {stage.metric}
          </span>
        )}
      </div>
    </div>
  );
}

/* A red pulse that travels the connector feeding the active stage */
function Connector({ active, tick }: { active: boolean; tick: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      <div className="hidden md:flex items-center w-10 lg:w-14 shrink-0 px-1 relative">
        <div className="flow-line w-full" />
        {active && !reduce && (
          <motion.span
            key={tick}
            aria-hidden
            className="absolute top-1/2 -mt-[3px] left-1 w-[6px] h-[6px] rounded-full bg-mark"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: "calc(100% + 28px)", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        )}
      </div>
      <div className="md:hidden flex justify-center h-7">
        <div className="flow-line-y h-full" />
      </div>
    </>
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
              <Connector active={activeStage === i + 1} tick={tick} />
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

        {/* The statement — sub-copy set into the headline's whitespace */}
        <motion.div
          style={reduce ? undefined : { opacity: fade }}
          className="relative pt-10 sm:pt-16 pb-14 sm:pb-24"
        >
          <LineReveal
            as="h1"
            className="font-serif font-light text-[clamp(46px,10.5vw,150px)] leading-[0.98] tracking-[-0.03em] text-inkwarm"
            lineClassName={(i) =>
              i === 1 ? "sm:pl-[8vw]" : i === 2 ? "sm:pl-[2vw]" : undefined
            }
            lines={[
              <span key="l1">We build</span>,
              <span key="l2">the system</span>,
              <span key="l3">
                your business <span className="italic text-mark">runs</span> on.
              </span>,
            ]}
          />

          {/* Sub + CTA — occupies the void beside "We build" */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:absolute lg:right-0 lg:top-[calc(2.5rem+0.35em)] lg:max-w-[330px] mt-9 lg:mt-0 flex flex-col items-start gap-6"
          >
            <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed max-w-[440px] lg:max-w-none lg:border-l lg:rule lg:pl-5">
              Websites, automations, and internal tools — designed, built, and
              wired together around the ones you already use.{" "}
              <em className="text-inkwarm not-italic font-medium">
                One connected system,
              </em>{" "}
              not ten disconnected apps.
            </p>
            <div className="flex items-center gap-6 lg:pl-5">
              <a
                href="/schedule-call"
                className="btn-stamp px-6 py-3.5 text-[14px] font-medium tracking-[-0.01em]"
              >
                Book a discovery call
                <span aria-hidden className="font-mono text-[12px]">→</span>
              </a>
            </div>
            <a
              href="#index"
              className="u-draw lg:pl-5 text-[13px] font-medium text-inkwarm"
            >
              Or read the index first ↓
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fig. 01 — the plate sits on a blueprint band, breaking the boundary */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 top-[38%] graph-bg bg-sheet-deep/70 border-t rule"
        >
          <div className="ruler-ticks absolute top-0 left-0 right-0 h-[10px]" />
        </div>
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1240px] mx-auto px-4 sm:px-8 pb-8 sm:pb-10"
        >
          <motion.div style={reduce ? undefined : { y: drift }}>
            <SystemSchematic />
            <p className="anno mt-5 sm:mt-6 text-center">
              Fig. 01 — How work moves once the system is in
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

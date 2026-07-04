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
import { Globe, Phone } from "lucide-react";
import LineReveal from "@/components/motion/LineReveal";
import SignalTraces from "@/components/motion/SignalTraces";
import { WhatsAppIcon } from "@/components/icons";

/* ── The schematic — one enquiry travelling through the system ── */

const FEED: { t: string; text: string; stage: number }[] = [
  { t: "10:42", text: "Enquiry via WhatsApp — Mehta Textiles", stage: 0 },
  { t: "10:42", text: "Contact created in CRM · assigned to Priya", stage: 1 },
  { t: "10:43", text: "Follow-up scheduled · quote drafted", stage: 2 },
  { t: "10:44", text: "Pipeline updated · ₹1.4L added", stage: 3 },
  { t: "10:51", text: "Enquiry via website form — Sharma Traders", stage: 0 },
  { t: "10:51", text: "Duplicate check passed · record created", stage: 1 },
  { t: "10:52", text: "AI-drafted intro sent after review", stage: 2 },
  { t: "10:52", text: "Dashboard refreshed · 2 new this hour", stage: 3 },
];

const STAGE_META = [
  { title: "Enquiry", verb: "capture", metric: "3 new today", note: "Every channel, captured" },
  { title: "CRM", verb: "record", metric: "1,204 records", note: "Nothing lives in an inbox" },
  { title: "Automation", verb: "act", metric: "12 rules live", note: "No one has to remember" },
  { title: "Dashboard", verb: "see", metric: "one truth", note: "Decisions on data" },
];

/* A mini interface row inside a stage card */
function MiniRow({
  active,
  className,
  children,
}: {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2 h-[26px] px-2.5 border rounded-[2px] transition-colors duration-500 ${
        active ? "border-mark/70 bg-mark/[0.06]" : "rule bg-white/50"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

const mono = "font-mono text-[9.5px] sm:text-[10px] leading-none";

/* 01 — channels; WhatsApp lights up when the enquiry arrives */
function EnquiryBody({ active }: { active: boolean }) {
  return (
    <div className="space-y-1.5">
      <MiniRow active={active}>
        <span className="flex items-center gap-1.5 min-w-0">
          <WhatsAppIcon
            className={`w-3 h-3 shrink-0 transition-colors duration-500 ${
              active ? "text-[#25D366]" : "text-inkwarm-soft"
            }`}
          />
          <span className={`${mono} text-inkwarm`}>WhatsApp</span>
        </span>
        <span
          className={`${mono} text-mark transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          Mehta Textiles →
        </span>
      </MiniRow>
      <MiniRow>
        <span className="flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-inkwarm-soft shrink-0" strokeWidth={1.8} aria-hidden />
          <span className={`${mono} text-inkwarm-soft`}>Website</span>
        </span>
        <span aria-hidden className="w-1 h-1 rounded-full bg-hairline" />
      </MiniRow>
      <MiniRow>
        <span className="flex items-center gap-1.5">
          <Phone className="w-3 h-3 text-inkwarm-soft shrink-0" strokeWidth={1.8} aria-hidden />
          <span className={`${mono} text-inkwarm-soft`}>Phone</span>
        </span>
        <span aria-hidden className="w-1 h-1 rounded-full bg-hairline" />
      </MiniRow>
    </div>
  );
}

/* 02 — the record appears among the ledger */
function CrmBody({ active }: { active: boolean }) {
  return (
    <div className="space-y-1.5">
      <motion.div
        animate={active ? { scale: [0.96, 1] } : {}}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <MiniRow active={active}>
          <span className="flex items-center gap-2 min-w-0">
            <span
              className={`w-[16px] h-[16px] rounded-full flex items-center justify-center text-[7px] font-mono shrink-0 transition-colors duration-500 ${
                active ? "bg-mark text-sheet" : "bg-inkwarm/15 text-inkwarm"
              }`}
            >
              MT
            </span>
            <span className={`${mono} text-inkwarm truncate`}>Mehta Textiles</span>
          </span>
          <span className={`${mono} text-inkwarm-faint shrink-0`}>Priya</span>
        </MiniRow>
      </motion.div>
      {[14, 10].map((w, i) => (
        <MiniRow key={i}>
          <span className="flex items-center gap-2">
            <span aria-hidden className="w-[16px] h-[16px] rounded-full bg-inkwarm/10 shrink-0" />
            <span aria-hidden className="h-[5px] rounded-full bg-inkwarm/15" style={{ width: w * 4 }} />
          </span>
          <span aria-hidden className="h-[5px] w-6 rounded-full bg-inkwarm/10" />
        </MiniRow>
      ))}
    </div>
  );
}

/* 03 — rules fire in order while active */
const RULES = ["Route to owner", "AI drafts reply", "Nudge in 2 days"];

function AutomationBody({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="space-y-1.5">
      {RULES.map((r, i) => (
        <MiniRow key={r} active={active && i < 2}>
          <span className={`${mono} ${active && i < 2 ? "text-inkwarm" : "text-inkwarm-soft"}`}>
            {r}
          </span>
          <motion.span
            className={`${mono} ${i < 2 ? "text-live" : "text-inkwarm-faint"}`}
            animate={
              active && !reduce
                ? { opacity: [0, 1] }
                : { opacity: i < 2 ? 0.9 : 0.6 }
            }
            transition={{ delay: 0.25 + i * 0.35, duration: 0.3 }}
          >
            {i < 2 ? "✓" : "◷ 2d"}
          </motion.span>
        </MiniRow>
      ))}
    </div>
  );
}

/* 04 — the number moves */
const SPARK = [5, 8, 6, 10, 9, 12, 15];

function DashboardBody({ active }: { active: boolean }) {
  return (
    <div className="space-y-1.5">
      <MiniRow active={active}>
        <span className={`${mono} text-inkwarm-soft`}>Pipeline</span>
        <span className="flex items-baseline gap-1.5">
          <span className={`${mono} !text-[11px] font-medium text-inkwarm`}>
            {active ? "₹96.2L" : "₹94.8L"}
          </span>
          <span
            className={`${mono} text-mark transition-opacity duration-500 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            +1.4
          </span>
        </span>
      </MiniRow>
      <div className="flex items-end gap-[3px] h-[24px] px-1 pt-1" aria-hidden>
        {SPARK.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-[1px] transition-colors duration-500 ${
              active && i === SPARK.length - 1 ? "bg-mark" : "bg-inkwarm/15"
            }`}
            style={{ height: `${h + 4}px` }}
          />
        ))}
      </div>
      <MiniRow>
        <span className={`${mono} text-inkwarm-soft`}>Overdue follow-ups</span>
        <span className={`${mono} text-live`}>0</span>
      </MiniRow>
    </div>
  );
}

const STAGE_BODIES = [EnquiryBody, CrmBody, AutomationBody, DashboardBody];

function StageCard({ active, index }: { active: boolean; index: number }) {
  const meta = STAGE_META[index];
  const Body = STAGE_BODIES[index];
  return (
    <div
      className={`relative snap-center shrink-0 w-[78vw] max-w-[300px] md:w-auto md:max-w-none md:shrink md:flex-1 border rounded-[2px] px-3.5 py-3.5 sm:px-4 sm:py-4 transition-all duration-500 ${
        active
          ? "border-mark bg-sheet-lift shadow-[4px_4px_0_0_rgba(200,57,27,0.18)] md:-translate-y-1"
          : "rule bg-sheet-lift/80"
      }`}
    >
      <div className="flex items-baseline justify-between mb-2">
        <span
          className={`anno !text-[9px] transition-colors duration-500 ${
            active ? "text-mark" : ""
          }`}
        >
          {`0${index + 1} · ${meta.verb}`}
        </span>
        <span
          aria-hidden
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
            active ? "bg-mark live-dot" : "bg-hairline"
          }`}
        />
      </div>
      <p className="font-serif text-[17px] sm:text-[19px] leading-none text-inkwarm mb-3">
        {meta.title}
      </p>
      <Body active={active} />
      <div className="border-t rule mt-3 pt-2 flex items-center justify-between">
        <span
          className={`font-mono text-[9px] transition-colors duration-500 ${
            active ? "text-mark" : "text-inkwarm-faint"
          }`}
        >
          {meta.metric}
        </span>
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
        <div
          className={`flow-line w-full transition-opacity duration-500 ${
            active ? "flow-line-mark" : ""
          }`}
        />
        <span
          aria-hidden
          className={`font-mono text-[11px] leading-none -ml-1 transition-colors duration-500 ${
            active ? "text-mark" : "text-inkwarm-faint/60"
          }`}
        >
          ›
        </span>
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
      {/* Mobile: a small arrow between carousel cards */}
      <span
        aria-hidden
        className={`md:hidden self-center shrink-0 font-mono text-[14px] px-0.5 transition-colors duration-500 ${
          active ? "text-mark" : "text-inkwarm-faint/60"
        }`}
      >
        ›
      </span>
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

      {/* Stage flow — horizontal snap carousel on mobile, full row on desktop */}
      <div className="flex md:items-stretch gap-2 md:gap-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {STAGE_META.map((s, i) => (
          <div key={s.title} className="contents">
            <StageCard active={activeStage === i} index={i} />
            {i < STAGE_META.length - 1 && (
              <Connector active={activeStage === i + 1} tick={tick} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile stage dots */}
      <div className="md:hidden flex items-center justify-center gap-4 mt-4" aria-hidden>
        {STAGE_META.map((s, i) => (
          <span
            key={s.title}
            className={`font-mono text-[9px] tracking-[0.14em] transition-colors duration-500 ${
              activeStage === i ? "text-mark" : "text-inkwarm-faint/60"
            }`}
          >
            {`0${i + 1}`}
          </span>
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
          {STAGE_META[activeStage].note}
        </span>
      </div>
    </figure>
  );
}

/* A hand-drawn red pencil stroke that draws itself under a word */
function PencilStroke({ delay = 1.15 }: { delay?: number }) {
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
              i === 1
                ? "sm:pl-[8vw]"
                : i === 2
                  ? "sm:pl-[2vw] pb-[0.1em] -mb-[0.1em]"
                  : undefined
            }
            lines={[
              <span key="l1">We build</span>,
              <span key="l2">the system</span>,
              <span key="l3">
                your business{" "}
                <span className="relative inline-block">
                  <span className="italic">runs</span>
                  <PencilStroke />
                </span>{" "}
                on.
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
              <span className="font-serif text-[17px] sm:text-[18px] text-inkwarm">
                anymus
              </span>{" "}
              designs, builds, and wires together your websites, automations,
              and internal tools — around the ones you already use.{" "}
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
            <p className="anno !text-[9.5px] lg:pl-5 border-t rule pt-3 w-full whitespace-nowrap">
              <span className="text-mark">✳</span> Free 30-min call · no
              lock-in · 24h reply
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Fig. 01 — the plate sits on a blueprint band, breaking the boundary */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 top-[38%] graph-bg bg-sheet-deep/70 border-t rule overflow-hidden"
        >
          <div className="ruler-ticks absolute top-0 left-0 right-0 h-[10px]" />
          <SignalTraces className="absolute inset-0 w-full h-full" />
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
              Fig. 01 — How work moves once anymus is in
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

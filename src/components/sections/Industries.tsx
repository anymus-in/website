"use client";

import { useState } from "react";
import {
  Stethoscope,
  UtensilsCrossed,
  Building2,
  Wrench,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

type Pillar = "digital" | "automation" | "internal";

const pillarMeta: Record<Pillar, { label: string; dot: string; tag: string }> = {
  digital: {
    label: "Digital Presence",
    dot: "bg-grad-blue",
    tag: "text-grad-blue bg-grad-blue/10",
  },
  automation: {
    label: "Automation",
    dot: "bg-grad-green",
    tag: "text-[#1F8A56] bg-grad-green/10",
  },
  internal: {
    label: "Internal Systems",
    dot: "bg-grad-amber",
    tag: "text-accent-ink bg-grad-amber/15",
  },
};

interface Industry {
  icon: LucideIcon;
  name: string;
  short: string;
  scenario: string;
  steps: { label: string; pillar: Pillar }[];
  result: string;
}

const industries: Industry[] = [
  {
    icon: Stethoscope,
    name: "Clinics & Healthcare",
    short: "Bookings & reminders",
    scenario:
      "A patient finds you on Google, books a slot online, and gets a reminder the day before — no front-desk phone tag.",
    steps: [
      { label: "Professional website", pillar: "digital" },
      { label: "Online appointment booking", pillar: "automation" },
      { label: "Automatic patient reminders", pillar: "automation" },
      { label: "Records & schedule dashboard", pillar: "internal" },
    ],
    result: "Fewer no-shows, zero phone tag.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Cafés",
    short: "Orders & regulars",
    scenario:
      "Guests order online, join your list automatically, and come back because the system actually remembers them.",
    steps: [
      { label: "Website with your menu", pillar: "digital" },
      { label: "Online ordering & reservations", pillar: "automation" },
      { label: "Customer database", pillar: "internal" },
      { label: "Win-back offers & campaigns", pillar: "automation" },
    ],
    result: "More repeat orders, less paid to third parties.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    short: "Leads & follow-up",
    scenario:
      "A lead fills out a landing page at midnight and gets a reply before a competitor is even awake.",
    steps: [
      { label: "High-converting landing pages", pillar: "digital" },
      { label: "Instant lead capture", pillar: "automation" },
      { label: "CRM follow-up sequences", pillar: "automation" },
      { label: "Live deal pipeline", pillar: "internal" },
    ],
    result: "Faster response, no lead left cold.",
  },
  {
    icon: Wrench,
    name: "Service Businesses",
    short: "Jobs & operations",
    scenario:
      "An enquiry becomes a booked job without anyone copy-pasting between five different apps.",
    steps: [
      { label: "Website built to convert", pillar: "digital" },
      { label: "Lead funnel & qualification", pillar: "automation" },
      { label: "Job scheduling automation", pillar: "automation" },
      { label: "Operations dashboard", pillar: "internal" },
    ],
    result: "More jobs booked, far less admin.",
  },
];

function StackFlow({ industry }: { industry: Industry }) {
  const reduce = useReducedMotion();
  return (
    <motion.ol
      className="relative"
      initial={reduce ? undefined : "hidden"}
      animate={reduce ? undefined : "show"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
    >
      {industry.steps.map((s, i) => {
        const meta = pillarMeta[s.pillar];
        const last = i === industry.steps.length - 1;
        return (
          <motion.li
            key={s.label}
            className="relative flex items-center gap-3 sm:gap-4 pb-4 sm:pb-5 last:pb-0"
            variants={{
              hidden: { opacity: 0, x: -10 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {/* connector line */}
            {!last && (
              <span className="absolute left-[13px] sm:left-[15px] top-7 sm:top-8 bottom-0 w-px bg-line" />
            )}
            {/* node */}
            <span
              className={`relative z-10 grid place-items-center w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full ${meta.dot} shrink-0`}
            >
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>
            <span className="flex-1 text-[14px] sm:text-[15px] font-medium text-black leading-snug">
              {s.label}
            </span>
            <span
              className={`hidden sm:inline-flex shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${meta.tag}`}
            >
              {meta.label}
            </span>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}

export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const reduce = useReducedMotion();

  return (
    <section className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3 sm:mb-4">Use cases</p>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[560px]">
            What this looks like for your business
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[520px] leading-relaxed">
            Every business is different, but the patterns repeat. Pick yours and
            see how the three pillars wire together into one connected system.
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_1.55fr] gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Selector */}
          <div
            role="tablist"
            aria-label="Industries"
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-1 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {industries.map((ind, i) => {
              const selected = i === active;
              const Icon = ind.icon;
              return (
                <button
                  key={ind.name}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-3 rounded-2xl border px-3.5 sm:px-4 py-3 sm:py-3.5 text-left shrink-0 lg:shrink lg:w-full transition-all duration-200 ${
                    selected
                      ? "border-line-strong bg-paper shadow-[var(--shadow-soft)]"
                      : "border-transparent hover:bg-paper/60"
                  }`}
                >
                  <span
                    className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 transition-colors ${
                      selected
                        ? "bg-white border border-line"
                        : "bg-paper border border-line group-hover:bg-white"
                    }`}
                  >
                    <Icon
                      className={`w-[18px] h-[18px] ${selected ? "text-accent-ink" : "text-ink-500"}`}
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="flex-1 min-w-0 hidden sm:block">
                    <span className="block font-serif text-[16px] sm:text-[17px] text-black leading-tight truncate">
                      {ind.name}
                    </span>
                    <span className="block text-[12px] text-ink-500 truncate">
                      {ind.short}
                    </span>
                  </span>
                  <span className="font-serif text-[15px] text-black sm:hidden whitespace-nowrap">
                    {ind.name}
                  </span>
                  <ChevronRight
                    className={`hidden lg:block w-4 h-4 shrink-0 transition-all ${
                      selected
                        ? "text-accent-ink translate-x-0"
                        : "text-ink-300 -translate-x-1 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Preview */}
          <div className="relative rounded-[22px] sm:rounded-[26px] border border-line bg-paper overflow-hidden shadow-[var(--shadow-card)]">
            <div className="h-[3px] w-full bg-gradient-to-r from-grad-blue via-grad-green to-grad-amber" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 sm:p-8 md:p-10"
              >
                <p className="text-[12px] font-semibold uppercase tracking-wide text-accent-ink mb-3">
                  {current.name}
                </p>
                <p className="font-serif text-[19px] sm:text-[22px] md:text-[24px] leading-[1.3] tracking-tight text-black max-w-[560px]">
                  {current.scenario}
                </p>

                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400 mt-7 sm:mt-8 mb-4">
                  What we&apos;d build
                </p>
                <StackFlow industry={current} />

                <div className="mt-6 sm:mt-7 flex items-center gap-2.5 rounded-xl bg-white border border-line px-4 py-3">
                  <ArrowRight className="w-4 h-4 text-accent-ink shrink-0" />
                  <span className="text-[14px] sm:text-[15px] font-medium text-black">
                    {current.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-6 sm:mt-8 text-[13px] text-ink-500 max-w-[560px] leading-relaxed">
          Example builds — every engagement is scoped to what your business
          actually needs.
        </p>
      </div>
    </section>
  );
}

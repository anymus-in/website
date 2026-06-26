"use client";

import { useState } from "react";
import {
  Stethoscope,
  UtensilsCrossed,
  Building2,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

type Pillar = "digital" | "automation" | "internal";

const pillarTag: Record<Pillar, string> = {
  digital: "bg-grad-blue/10 text-[#1d4ed8]",
  automation: "bg-grad-green/10 text-[#1F8A56]",
  internal: "bg-grad-amber/15 text-accent-ink",
};

/* Simple Icons CDN — SVG logos with official brand colours */
const LOGO: Record<string, string> = {
  gmail:    "https://cdn.simpleicons.org/gmail/EA4335",
  gcal:     "https://cdn.simpleicons.org/googlecalendar/4285F4",
  gmeet:    "https://cdn.simpleicons.org/googlemeet/00897B",
  gsheets:  "https://cdn.simpleicons.org/googlesheets/34A853",
  whatsapp: "https://cdn.simpleicons.org/whatsapp/25D366",
  calendly: "https://cdn.simpleicons.org/calendly/006BFF",
  hubspot:  "https://cdn.simpleicons.org/hubspot/FF7A59",
  notion:   "https://cdn.simpleicons.org/notion/000000",
  airtable: "https://cdn.simpleicons.org/airtable/18BFFF",
  mailchimp:"https://cdn.simpleicons.org/mailchimp/FFE01B",
  meta:     "https://cdn.simpleicons.org/meta/0467DF",
  instagram:"https://cdn.simpleicons.org/instagram/E4405F",
  google:   "https://cdn.simpleicons.org/google/4285F4",
};

interface Step {
  label: string;
  pillar: Pillar;
  tool: keyof typeof LOGO;
}

interface Industry {
  icon: LucideIcon;
  name: string;
  short: string;
  scenario: string;
  steps: Step[];
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
      { label: "Professional website",    pillar: "digital",     tool: "google" },
      { label: "Online booking",          pillar: "automation",  tool: "calendly" },
      { label: "Patient reminders",       pillar: "automation",  tool: "whatsapp" },
      { label: "Records dashboard",       pillar: "internal",    tool: "gsheets" },
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
      { label: "Menu website",            pillar: "digital",     tool: "google" },
      { label: "Online ordering",         pillar: "automation",  tool: "whatsapp" },
      { label: "Customer database",       pillar: "internal",    tool: "airtable" },
      { label: "Win-back campaigns",      pillar: "automation",  tool: "mailchimp" },
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
      { label: "Landing pages",           pillar: "digital",     tool: "meta" },
      { label: "Lead capture",            pillar: "automation",  tool: "instagram" },
      { label: "CRM sequences",           pillar: "automation",  tool: "hubspot" },
      { label: "Deal pipeline",           pillar: "internal",    tool: "notion" },
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
      { label: "Conversion website",      pillar: "digital",     tool: "google" },
      { label: "Lead qualification",      pillar: "automation",  tool: "whatsapp" },
      { label: "Job scheduling",          pillar: "automation",  tool: "gmeet" },
      { label: "Ops dashboard",           pillar: "internal",    tool: "gsheets" },
    ],
    result: "More jobs booked, far less admin.",
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const reduce = useReducedMotion();

  return (
    <section className="bg-white border-t border-line">
      <div className="max-w-308 mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-18 md:py-24">

        <Reveal>
          <p className="eyebrow mb-3">Use cases</p>
          <h2 className="font-serif text-[26px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.025em] text-black">
            What this looks like for your business
          </h2>
        </Reveal>

        {/* Tab Selector — 2 col mobile, 4 col desktop, no overflow trickery */}
        <div
          role="tablist"
          aria-label="Industries"
          className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-1 bg-paper rounded-2xl p-1.5"
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
                className={`flex items-center gap-2 lg:gap-2.5 rounded-xl px-3 py-2.5 lg:py-3 text-left min-w-0 transition-all duration-200 ${
                  selected
                    ? "bg-white shadow-(--shadow-soft)"
                    : "hover:bg-white/60"
                }`}
              >
                <span
                  className={`grid place-items-center w-7 h-7 lg:w-8 lg:h-8 rounded-lg shrink-0 transition-all duration-200 ${
                    selected ? "bg-ink-900 text-white" : "bg-white/80 text-ink-400"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 lg:w-[15px] lg:h-[15px]" strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span
                    className={`block text-[11px] lg:text-[13px] font-semibold leading-tight truncate transition-colors ${
                      selected ? "text-black" : "text-ink-600"
                    }`}
                  >
                    {ind.name}
                  </span>
                  <span className="hidden lg:block text-[11px] text-ink-400 truncate leading-snug mt-0.5">
                    {ind.short}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] sm:rounded-[24px] border border-line bg-paper px-7 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-(--shadow-card)"
            >
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400 mb-4 sm:mb-5">
                {current.name}
              </p>

              <p className="font-serif text-[20px] sm:text-[26px] lg:text-[30px] text-black leading-[1.38] tracking-[-0.01em] max-w-[720px]">
                {current.scenario}
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                {/* Result */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={2.2} />
                  <span className="text-[13px] sm:text-[14px] font-semibold text-black">
                    {current.result}
                  </span>
                </div>

                {/* Tool chips with real logos */}
                <motion.div
                  key={current.name + "-chips"}
                  className="flex flex-wrap gap-2"
                  initial={reduce ? undefined : "hidden"}
                  animate={reduce ? undefined : "show"}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                  }}
                >
                  {current.steps.map((s) => (
                    <motion.span
                      key={s.label}
                      variants={{
                        hidden: { opacity: 0, scale: 0.92 },
                        show: { opacity: 1, scale: 1, transition: { duration: 0.22, ease: "easeOut" } },
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] sm:text-[12px] font-medium ${pillarTag[s.pillar]}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={LOGO[s.tool]}
                        alt=""
                        aria-hidden
                        className="w-3.5 h-3.5 rounded-sm object-contain shrink-0"
                      />
                      {s.label}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

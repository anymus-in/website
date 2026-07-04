"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceVisualKey } from "@/lib/services";

/* Richer homepage-only product scenes. Each fills its plate edge-to-edge
   with a realistic interface and one living detail, framed like an
   instrument rather than a floating screenshot. */

function WindowChrome({ label, url }: { label: string; url?: string }) {
  return (
    <div className="flex items-center gap-3 border-b rule px-4 py-2.5 bg-sheet-lift shrink-0">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="w-2 h-2 rounded-full border border-hairline-strong" />
        <span className="w-2 h-2 rounded-full border border-hairline-strong" />
        <span className="w-2 h-2 rounded-full bg-mark/70" />
      </div>
      {url ? (
        <span className="flex-1 text-center font-mono text-[9.5px] text-inkwarm-faint truncate border rule rounded-[2px] py-0.5 px-3 bg-sheet/60">
          {url}
        </span>
      ) : (
        <span className="flex-1" />
      )}
      <span className="anno !text-[8px]">{label}</span>
    </div>
  );
}

function PopIn({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── 01 · Digital Presence — a site capturing a lead ── */
function WebsiteScene() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <WindowChrome label="Live" url="mehtatextiles.in" />
      <div className="relative flex-1 bg-white p-5 sm:p-7 overflow-hidden">
        {/* Site hero */}
        <div className="flex items-center justify-between mb-6">
          <div className="h-2.5 w-20 rounded-full bg-inkwarm/80" />
          <div className="flex gap-3">
            <div className="h-2 w-8 rounded-full bg-inkwarm/15" />
            <div className="h-2 w-8 rounded-full bg-inkwarm/15" />
            <div className="h-4 w-14 rounded-[2px] bg-inkwarm/85" />
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex-1 min-w-0">
            <div className="h-4 sm:h-5 w-[92%] rounded-full bg-inkwarm/85 mb-2.5" />
            <div className="h-4 sm:h-5 w-[64%] rounded-full bg-inkwarm/85 mb-4" />
            <div className="h-2 w-[78%] rounded-full bg-inkwarm/15 mb-1.5" />
            <div className="h-2 w-[58%] rounded-full bg-inkwarm/15" />
          </div>
          {/* Real product photography inside the mock site */}
          <div className="relative w-[38%] shrink-0 aspect-[4/3] rounded-[3px] overflow-hidden border rule">
            <Image
              src="/images/rack.jpg"
              alt=""
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Enquiry form */}
        <div className="border rule rounded-[3px] p-4 max-w-[290px] bg-sheet-lift/70">
          <div className="anno !text-[8px] mb-3">Request a quote</div>
          <div className="h-7 border rule rounded-[2px] bg-white mb-2 flex items-center px-2.5">
            <span className="font-mono text-[9px] text-inkwarm-soft">Ravi Mehta</span>
          </div>
          <div className="h-7 border rule rounded-[2px] bg-white mb-3 flex items-center px-2.5">
            <span className="font-mono text-[9px] text-inkwarm-soft">+91 98•• ••• •12</span>
          </div>
          <div className="h-7 rounded-[2px] bg-inkwarm flex items-center justify-center">
            <span className="font-mono text-[9px] text-sheet tracking-[0.12em] uppercase">
              Send enquiry →
            </span>
          </div>
        </div>

        {/* The moment of capture */}
        <PopIn
          delay={0.7}
          className="absolute right-4 sm:right-6 bottom-16 sm:bottom-20 border border-mark bg-sheet-lift rounded-[2px] px-3.5 py-2.5 shadow-[4px_4px_0_0_rgba(200,57,27,0.25)]"
        >
          <p className="font-mono text-[9px] text-mark uppercase tracking-[0.12em] mb-1">
            ● Lead captured
          </p>
          <p className="font-mono text-[9px] text-inkwarm-soft">
            → CRM · assigned to Priya
          </p>
        </PopIn>
        <PopIn
          delay={1.1}
          className="absolute right-8 sm:right-12 bottom-6 sm:bottom-8 border rule bg-white rounded-[2px] px-3.5 py-2"
        >
          <p className="font-mono text-[9px] text-inkwarm-soft">
            ✓ Follow-up scheduled — 09:00
          </p>
        </PopIn>
      </div>
    </div>
  );
}

/* ── 02 · Automation — a workflow run, step by step ── */
const RUN_STEPS = [
  { label: "Trigger — WhatsApp message received", meta: "10:42:07", state: "done" },
  { label: "Match contact · Mehta Textiles", meta: "10:42:08", state: "done" },
  { label: "Create deal — pipeline: New", meta: "10:42:08", state: "done" },
  { label: "AI drafts the reply · owner approves", meta: "10:42:09", state: "run" },
  { label: "Wait 2 days → nudge if silent", meta: "queued", state: "wait" },
];

function AutomationScene() {
  const reduce = useReducedMotion();
  return (
    <div className="absolute inset-0 flex flex-col">
      <WindowChrome label="Run #4,182" />
      <div className="relative flex-1 bg-white p-5 sm:p-7 overflow-hidden">
        <div className="flex items-baseline justify-between mb-5">
          <span className="font-mono text-[10px] text-inkwarm uppercase tracking-[0.14em]">
            Workflow — new enquiry
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-live live-dot" aria-hidden />
            <span className="anno !text-[8px] !text-live">Running</span>
          </span>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
          <div className="space-y-2.5">
            {RUN_STEPS.map((s, i) => (
              <PopIn key={s.label} delay={0.25 + i * 0.28} className="relative pl-7">
                <span
                  aria-hidden
                  className={`absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full border ${
                    s.state === "done"
                      ? "bg-live/80 border-live"
                      : s.state === "run"
                        ? "bg-mark border-mark"
                        : "bg-sheet border-hairline-strong"
                  } ${s.state === "run" && !reduce ? "live-dot" : ""}`}
                />
                <div
                  className={`flex items-baseline justify-between gap-3 border rounded-[2px] px-3 py-2 ${
                    s.state === "run"
                      ? "border-mark bg-sheet-lift"
                      : "rule bg-sheet-lift/50"
                  }`}
                >
                  <span className="font-mono text-[9.5px] text-inkwarm-soft truncate">
                    {s.label}
                  </span>
                  <span className="font-mono text-[8.5px] text-inkwarm-faint shrink-0">
                    {s.meta}
                  </span>
                </div>
              </PopIn>
            ))}
          </div>
        </div>

        {/* WhatsApp bubble — the trigger, pinned like evidence */}
        <PopIn
          delay={0.1}
          className="absolute right-4 sm:right-6 bottom-5 sm:bottom-7 max-w-[190px] -rotate-[1.5deg]"
        >
          <div className="rounded-[10px] rounded-bl-[2px] bg-[#E7F6E9] border border-[#c9e6cd] px-3 py-2 shadow-sm">
            <p className="text-[10px] text-inkwarm leading-snug">
              Hi, need 400m of the printed cotton — rate?
            </p>
            <p className="text-[8px] text-inkwarm-faint text-right mt-1">10:42 ✓✓</p>
          </div>
          <p className="anno !text-[8px] mt-1.5 text-right">The trigger</p>
        </PopIn>
      </div>
    </div>
  );
}

/* ── 03 · Internal Systems — the morning dashboard ── */
const BARS = [34, 48, 42, 60, 55, 74, 88];

function DashboardScene() {
  const reduce = useReducedMotion();
  return (
    <div className="absolute inset-0 flex flex-col">
      <WindowChrome label="08:00 IST" />
      <div className="relative flex-1 bg-white p-5 sm:p-7 overflow-hidden">
        <div className="flex items-baseline justify-between mb-5">
          <span className="font-mono text-[10px] text-inkwarm uppercase tracking-[0.14em]">
            Operations — today
          </span>
          <span className="anno !text-[8px]">One source of truth</span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            ["Revenue MTD", "₹18.4L", "+12%"],
            ["Open deals", "34", "+5"],
            ["Overdue", "2", "↓ from 11"],
          ].map(([label, value, delta], i) => (
            <PopIn key={label} delay={0.15 + i * 0.12} className="border rule rounded-[2px] px-2.5 py-2.5 bg-sheet-lift/60">
              <p className="font-mono text-[8px] text-inkwarm-faint uppercase tracking-[0.1em] mb-1.5 truncate">
                {label}
              </p>
              <p className="font-serif text-[17px] sm:text-[19px] leading-none text-inkwarm mb-1">
                {value}
              </p>
              <p className="font-mono text-[8px] text-live">{delta}</p>
            </PopIn>
          ))}
        </div>

        {/* Revenue bars */}
        <div className="border rule rounded-[2px] bg-sheet-lift/60 px-4 pt-3 pb-2 mb-4">
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-mono text-[8.5px] text-inkwarm-faint uppercase tracking-[0.1em]">
              Pipeline value / wk
            </span>
            <span className="font-mono text-[8.5px] text-mark">₹96.2L</span>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                className={`flex-1 rounded-t-[1px] ${
                  i === BARS.length - 1 ? "bg-mark" : "bg-inkwarm/15"
                }`}
                initial={reduce ? { height: `${h}%` } : { height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="space-y-1.5">
          {[
            ["Anita", "moved Mehta Textiles → Proposal", "2m"],
            ["System", "synced 248 SKUs from Tally", "9m"],
          ].map(([who, what, when], i) => (
            <PopIn key={what} delay={0.6 + i * 0.15} className="flex items-baseline gap-2">
              <span className="font-mono text-[9px] text-inkwarm shrink-0">{who}</span>
              <span className="font-mono text-[9px] text-inkwarm-soft truncate">{what}</span>
              <span className="font-mono text-[8px] text-inkwarm-faint ml-auto shrink-0">{when}</span>
            </PopIn>
          ))}
        </div>

        {/* The point, stamped on the glass */}
        <PopIn
          delay={0.9}
          className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 rotate-[2deg] border-2 border-mark/60 rounded-[2px] px-3 py-1.5 bg-sheet-lift/90"
        >
          <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-mark/90">
            Zero spreadsheets harmed
          </span>
        </PopIn>
      </div>
    </div>
  );
}

const SCENES: Record<ServiceVisualKey, () => React.ReactElement> = {
  website: WebsiteScene,
  automation: AutomationScene,
  internal: DashboardScene,
};

export default function SpreadVisual({ visualKey }: { visualKey: ServiceVisualKey }) {
  const Scene = SCENES[visualKey];
  return <Scene />;
}

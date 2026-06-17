"use client";

import { Check, ArrowRight } from "lucide-react";
import { PortalCard, TabHeader } from "../components";
import type { TabId } from "../types";

const stages = [
  { label: "Discovery", done: true, active: false },
  { label: "Build & Automate", done: false, active: true },
  { label: "Launch", done: false, active: false },
];

const quickStats = [
  { label: "Active deliverables", value: "2" },
  { label: "Open invoices", value: "1" },
  { label: "Next milestone", value: "5 days" },
  { label: "Overall progress", value: "45%" },
];

export default function OverviewTab({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  return (
    <div>
      <TabHeader
        title="Welcome back, Acme Co."
        subtitle="Here's where things stand on your engagement."
      />

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
        {quickStats.map((s) => (
          <PortalCard key={s.label} className="p-4 sm:p-5">
            <p className="text-[11px] sm:text-[12px] text-ink-500 mb-1.5">{s.label}</p>
            <p className="font-serif text-[20px] sm:text-[24px] text-black">{s.value}</p>
          </PortalCard>
        ))}
      </div>

      {/* Phase progress */}
      <PortalCard className="p-5 sm:p-7 mb-5 sm:mb-6">
        <div className="flex items-center justify-between mb-4 gap-3">
          <div>
            <p className="text-[12px] text-ink-500 mb-1">Current phase</p>
            <p className="font-serif text-[20px] sm:text-[22px] text-black">
              Build &amp; Automate
            </p>
          </div>
          <span className="text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full bg-grad-blue/15 text-ink-700 shrink-0">
            In Progress
          </span>
        </div>
        <div className="h-2 bg-[#F2F1ED] rounded-full overflow-hidden mb-2">
          <div className="h-full bg-grad-blue rounded-full" style={{ width: "45%" }} />
        </div>
        <p className="text-[12px] text-ink-500">45% complete</p>
      </PortalCard>

      {/* Stage cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
        {stages.map((s) => (
          <PortalCard key={s.label} className="p-4 sm:p-5">
            {s.done ? (
              <span className="w-7 h-7 rounded-full bg-grad-green/20 flex items-center justify-center mb-3">
                <Check className="w-3.5 h-3.5 text-ink-700" />
              </span>
            ) : s.active ? (
              <span className="w-7 h-7 rounded-full bg-grad-blue/20 flex items-center justify-center mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-grad-blue" />
              </span>
            ) : (
              <span className="w-7 h-7 rounded-full border border-[#D4D4D1] flex items-center justify-center mb-3" />
            )}
            <p className="text-[13px] sm:text-[14px] font-semibold text-black">{s.label}</p>
          </PortalCard>
        ))}
      </div>

      {/* Key contact + next milestone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <PortalCard className="p-5 sm:p-6 flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[13px] sm:text-[14px] font-semibold text-black">Sarah Chen</p>
            <p className="text-[12px] text-ink-500">Senior Solutions Lead</p>
          </div>
          <button
            onClick={() => onNavigate("communication")}
            className="focus-accent shrink-0 inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-medium text-accent-ink hover:underline"
          >
            Message
            <ArrowRight className="w-3 h-3" />
          </button>
        </PortalCard>

        <PortalCard className="p-5 sm:p-6">
          <p className="text-[11px] sm:text-[12px] text-ink-500 mb-1">Next milestone</p>
          <p className="text-[14px] sm:text-[15px] font-semibold text-black mb-0.5">
            Automation Live
          </p>
          <p className="text-[12px] text-ink-500">Jun 23, 2026</p>
        </PortalCard>
      </div>
    </div>
  );
}

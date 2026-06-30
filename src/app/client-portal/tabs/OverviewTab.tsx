"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  CircleCheck,
  Clock,
  FileSignature,
  MessageSquare,
  Receipt,
  Upload,
} from "lucide-react";
import { PortalCard, TabHeader, Avatar, Badge } from "../components";
import type { TabId } from "../types";

const statCards = [
  {
    label: "Open deliverables",
    value: "2",
    trend: "-1 this week",
    trendUp: true,
    icon: Upload,
  },
  {
    label: "Open invoices",
    value: "$4,500",
    trend: "due in 5 days",
    trendUp: false,
    icon: Receipt,
  },
  {
    label: "Next milestone",
    value: "5 days",
    trend: "Automation Live",
    trendUp: true,
    icon: Clock,
  },
  {
    label: "Overall progress",
    value: "45%",
    trend: "+12% this month",
    trendUp: true,
    icon: ArrowUpRight,
  },
];

const nextAction = {
  title: "Review & approve: Automation Workflow Map",
  description:
    "Your anymus team needs your sign-off before automations move from staging to production.",
  due: "Due in 2 days",
};

const activity = [
  {
    id: 1,
    icon: FileSignature,
    text: "Automation Workflow Map.pdf was shared for your review",
    time: "2h ago",
  },
  {
    id: 2,
    icon: Receipt,
    text: "Invoice INV-1071 was issued, due Jul 1",
    time: "1d ago",
  },
  {
    id: 3,
    icon: MessageSquare,
    text: "Sarah Chen replied in Messages",
    time: "2d ago",
  },
  {
    id: 4,
    icon: CircleCheck,
    text: "Milestone \"System Build Begins\" marked complete",
    time: "4d ago",
  },
];

const onboardingChecklist = [
  { id: 1, label: "Sign Master Services Agreement", done: true },
  { id: 2, label: "Complete discovery questionnaire", done: true },
  { id: 3, label: "Grant CRM data access", done: true },
  { id: 4, label: "Approve automation workflow map", done: false },
  { id: 5, label: "Confirm go-live training dates", done: false },
];

const team = [
  { name: "Sarah Chen", role: "Senior Solutions Lead" },
  { name: "Marcus Yu", role: "Automation Engineer" },
  { name: "Priya Patel", role: "Client Success Manager" },
];

export default function OverviewTab({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  const [checklist, setChecklist] = useState(onboardingChecklist);
  const doneCount = checklist.filter((c) => c.done).length;

  return (
    <div>
      <TabHeader
        eyebrow="Acme Co. · CRM & Automation Implementation"
        title="Welcome back, Jane"
        subtitle="Here's where things stand on your engagement."
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
        {statCards.map((s) => (
          <PortalCard key={s.label} className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#F2F1ED] flex items-center justify-center">
                <s.icon className="w-3.5 h-3.5 text-ink-700" />
              </span>
            </div>
            <p className="text-[11px] sm:text-[12px] text-ink-500 mb-1">{s.label}</p>
            <p className="font-serif text-[20px] sm:text-[24px] text-black mb-1.5">{s.value}</p>
            <p
              className={`text-[11px] font-medium ${
                s.trendUp ? "text-[#1F8A56]" : "text-ink-500"
              }`}
            >
              {s.trend}
            </p>
          </PortalCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
        {/* Next action required */}
        <PortalCard className="lg:col-span-2 p-5 sm:p-7 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative">
            <Badge tint="bg-grad-amber/25" dot="bg-grad-amber">
              Next action required
            </Badge>
            <p className="font-serif text-[18px] sm:text-[20px] text-black mt-3 mb-1.5">
              {nextAction.title}
            </p>
            <p className="text-[13px] text-ink-500 mb-4 max-w-[480px]">
              {nextAction.description}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => onNavigate("deliverables")}
                className="cta-lift focus-accent inline-flex items-center gap-1.5 bg-black text-white rounded-full px-4 py-2.5 text-[13px] font-medium min-h-[40px]"
              >
                Review now
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[12px] text-ink-500">{nextAction.due}</span>
            </div>
          </div>
        </PortalCard>

        {/* Health / phase card */}
        <PortalCard className="p-5 sm:p-7">
          <p className="text-[12px] text-ink-500 mb-1">Current phase</p>
          <p className="font-serif text-[18px] sm:text-[20px] text-black mb-3">
            Build & Automate
          </p>
          <div className="h-2 bg-[#F2F1ED] rounded-full overflow-hidden mb-2">
            <div className="h-full bg-grad-blue rounded-full" style={{ width: "45%" }} />
          </div>
          <p className="text-[12px] text-ink-500 mb-4">45% complete · est. completion Jul 14</p>
          <button
            onClick={() => onNavigate("timeline")}
            className="focus-accent inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-medium text-accent-ink hover:underline"
          >
            View full roadmap
            <ArrowRight className="w-3 h-3" />
          </button>
        </PortalCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
        {/* Recent activity */}
        <PortalCard className="lg:col-span-2 p-5 sm:p-7">
          <p className="text-[13px] font-semibold text-black mb-4">Recent activity</p>
          <div className="space-y-4">
            {activity.map((a) => (
              <div key={a.id} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#F2F1ED] flex items-center justify-center shrink-0 mt-0.5">
                  <a.icon className="w-3.5 h-3.5 text-ink-700" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] text-black leading-snug">{a.text}</p>
                  <p className="text-[11px] text-ink-500 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </PortalCard>

        {/* Onboarding checklist */}
        <PortalCard className="p-5 sm:p-7">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[13px] font-semibold text-black">Onboarding checklist</p>
            <span className="text-[11px] text-ink-500">
              {doneCount}/{checklist.length}
            </span>
          </div>
          <div className="space-y-3">
            {checklist.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  setChecklist((prev) =>
                    prev.map((c) => (c.id === item.id ? { ...c, done: !c.done } : c)),
                  )
                }
                className="focus-accent flex items-start gap-2.5 w-full text-left group"
              >
                {item.done ? (
                  <CircleCheck className="w-4 h-4 text-[#1F8A56] shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-4 h-4 text-[#D4D4D1] shrink-0 mt-0.5 group-hover:text-ink-500 transition-colors" />
                )}
                <span
                  className={`text-[13px] leading-snug ${
                    item.done ? "text-ink-500 line-through" : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </PortalCard>
      </div>

      {/* Project team */}
      <PortalCard className="p-5 sm:p-7">
        <p className="text-[13px] font-semibold text-black mb-4">Your project team</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {team.map((m) => (
            <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF8]">
              <Avatar name={m.name} size={40} />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-black truncate">{m.name}</p>
                <p className="text-[11px] text-ink-500 truncate">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-5 pt-5 border-t border-[#E4E4E1]">
          <button
            onClick={() => onNavigate("communication")}
            className="focus-accent inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-accent-ink hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Message the team
          </button>
          <button
            onClick={() => onNavigate("meetings")}
            className="focus-accent inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-accent-ink hover:underline"
          >
            <Check className="w-3.5 h-3.5" />
            Schedule a call
          </button>
        </div>
      </PortalCard>
    </div>
  );
}

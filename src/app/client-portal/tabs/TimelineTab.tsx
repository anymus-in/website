import { AlertTriangle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PortalCard, TabHeader, Badge } from "../components";

const phases = [
  {
    name: "Discovery",
    state: "done" as const,
    range: "May 5 – May 19",
    summary: "Process mapping, requirements, and current-state audit.",
  },
  {
    name: "Build & Automate",
    state: "active" as const,
    range: "May 19 – Jul 7",
    summary: "CRM migration, workflow automation, and integration build.",
  },
  {
    name: "Launch",
    state: "upcoming" as const,
    range: "Jul 7 – Jul 14",
    summary: "Team training, go-live support, and handoff.",
  },
];

const milestones = [
  {
    date: "May 5, 2026",
    label: "Kickoff & Discovery",
    state: "done",
    phase: "Discovery",
  },
  {
    date: "May 19, 2026",
    label: "Process Mapping Complete",
    state: "done",
    phase: "Discovery",
  },
  {
    date: "Jun 9, 2026",
    label: "System Build Begins",
    state: "done",
    phase: "Build & Automate",
  },
  {
    date: "Jun 23, 2026",
    label: "Automation Live",
    state: "active",
    phase: "Build & Automate",
    blocker: "Waiting on your sign-off for Automation Workflow Map",
  },
  {
    date: "Jul 7, 2026",
    label: "Team Training",
    state: "upcoming",
    phase: "Launch",
    dependsOn: "Automation Live",
  },
  {
    date: "Jul 14, 2026",
    label: "Go-Live",
    state: "upcoming",
    phase: "Launch",
    dependsOn: "Team Training",
  },
];

const doneCount = milestones.filter((m) => m.state === "done").length;

export default function TimelineTab() {
  return (
    <div>
      <TabHeader
        title="Timeline"
        subtitle={`${doneCount} of ${milestones.length} milestones complete · estimated completion Jul 14, 2026`}
      />

      {/* Phase roadmap */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {phases.map((p) => (
          <PortalCard key={p.name} className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              {p.state === "done" ? (
                <span className="w-7 h-7 rounded-full bg-grad-green/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#1F8A56]" />
                </span>
              ) : p.state === "active" ? (
                <span className="w-7 h-7 rounded-full bg-grad-blue/20 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-grad-blue" />
                </span>
              ) : (
                <span className="w-7 h-7 rounded-full border border-[#D4D4D1]" />
              )}
              {p.state === "active" && (
                <Badge tint="bg-grad-blue/15" dot="bg-grad-blue">
                  In progress
                </Badge>
              )}
              {p.state === "done" && (
                <Badge tint="bg-grad-green/20" dot="bg-[#1F8A56]">
                  Complete
                </Badge>
              )}
            </div>
            <p className="text-[14px] sm:text-[15px] font-semibold text-black mb-0.5">{p.name}</p>
            <p className="text-[11px] text-ink-500 mb-2">{p.range}</p>
            <p className="text-[12px] text-ink-500 leading-snug">{p.summary}</p>
          </PortalCard>
        ))}
      </div>

      {/* Milestone detail timeline */}
      <PortalCard className="p-5 sm:p-7">
        <p className="text-[13px] font-semibold text-black mb-5">Milestones</p>
        {milestones.map((m, i) => (
          <div key={m.label} className="flex gap-4 sm:gap-5">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "w-3 h-3 rounded-full shrink-0 mt-1.5",
                  m.state === "done"
                    ? "bg-grad-green"
                    : m.state === "active"
                      ? "bg-grad-blue"
                      : "border-2 border-[#D4D4D1] bg-white",
                )}
              />
              {i < milestones.length - 1 && (
                <span className="w-px flex-1 bg-[#E4E4E1] my-1" />
              )}
            </div>
            <div className="pb-6 sm:pb-7">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <p className="text-[11px] sm:text-[12px] text-ink-500">{m.date}</p>
                <span className="text-[10px] text-ink-400">· {m.phase}</span>
                {m.state === "active" && (
                  <Badge tint="bg-grad-blue/15" dot="bg-grad-blue">
                    In progress
                  </Badge>
                )}
              </div>
              <p className="text-[13px] sm:text-[14px] font-medium text-black mb-1">{m.label}</p>
              {m.blocker && (
                <p className="flex items-start gap-1.5 text-[12px] text-[#A35F14] bg-grad-amber/15 rounded-lg px-2.5 py-1.5 max-w-[420px]">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-[1px]" />
                  {m.blocker}
                </p>
              )}
              {m.dependsOn && (
                <p className="text-[11px] text-ink-500">Depends on: {m.dependsOn}</p>
              )}
            </div>
          </div>
        ))}
      </PortalCard>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  ListChecks,
  Calendar,
  MessageSquare,
  LogOut,
  Check,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "status", label: "Project Status", icon: LayoutDashboard },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "invoices", label: "Invoices", icon: Receipt },
  { id: "deliverables", label: "Deliverables", icon: ListChecks },
  { id: "timeline", label: "Timeline", icon: Calendar },
  { id: "communication", label: "Communication", icon: MessageSquare },
] as const;

type TabId = (typeof tabs)[number]["id"];

const stages = [
  { label: "Discovery", done: true, active: false },
  { label: "Build & Automate", done: false, active: true },
  { label: "Launch", done: false, active: false },
];

function ProjectStatusTab() {
  return (
    <div>
      <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">
        Project Status
      </h1>
      <p className="text-[13px] sm:text-[14px] text-ink-500 mb-6 sm:mb-8">
        Current phase and overall progress.
      </p>

      <div
        className="bg-white border border-black/[0.06] rounded-[20px] p-5 sm:p-7 mb-5 sm:mb-6"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {stages.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-black/[0.06] rounded-2xl p-4 sm:p-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}

const documents = [
  { name: "Discovery Summary.pdf", date: "Jun 2, 2026", size: "1.2 MB" },
  { name: "System Architecture.pdf", date: "Jun 9, 2026", size: "3.4 MB" },
  { name: "Training Guide.pdf", date: "Jun 16, 2026", size: "2.1 MB" },
];

function DocumentsTab() {
  return (
    <div>
      <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">Documents</h1>
      <p className="text-[13px] sm:text-[14px] text-ink-500 mb-6 sm:mb-8">
        Files shared with you throughout the engagement.
      </p>
      <div
        className="bg-white border border-black/[0.06] rounded-[20px] divide-y divide-[#E4E4E1] overflow-hidden"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {documents.map((d) => (
          <div key={d.name} className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-9 h-9 rounded-lg bg-[#F2F1ED] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-ink-700" />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] sm:text-[14px] font-medium text-black truncate">
                  {d.name}
                </p>
                <p className="text-[11px] sm:text-[12px] text-ink-500">
                  {d.date} · {d.size}
                </p>
              </div>
            </div>
            <button className="focus-accent shrink-0 inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-accent-ink hover:underline">
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const invoices = [
  { id: "INV-1042", date: "May 1, 2026", amount: "$4,500", status: "Paid" },
  { id: "INV-1058", date: "Jun 1, 2026", amount: "$4,500", status: "Paid" },
  { id: "INV-1071", date: "Jul 1, 2026", amount: "$4,500", status: "Pending" },
];

function InvoicesTab() {
  return (
    <div>
      <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">Invoices</h1>
      <p className="text-[13px] sm:text-[14px] text-ink-500 mb-6 sm:mb-8">
        Billing history for this engagement.
      </p>
      <div
        className="bg-white border border-black/[0.06] rounded-[20px] overflow-hidden overflow-x-auto"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b border-[#E4E4E1]">
              <th className="px-5 sm:px-6 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide">
                Invoice
              </th>
              <th className="px-3 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide">
                Date
              </th>
              <th className="px-3 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide">
                Amount
              </th>
              <th className="px-5 sm:px-6 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-[#E4E4E1] last:border-0">
                <td className="px-5 sm:px-6 py-4 text-[13px] sm:text-[14px] font-medium text-black">
                  {inv.id}
                </td>
                <td className="px-3 py-4 text-[13px] sm:text-[14px] text-ink-700">{inv.date}</td>
                <td className="px-3 py-4 text-[13px] sm:text-[14px] text-ink-700">{inv.amount}</td>
                <td className="px-5 sm:px-6 py-4 text-right">
                  <span
                    className={cn(
                      "text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-full text-ink-700",
                      inv.status === "Paid" ? "bg-grad-green/20" : "bg-grad-amber/25",
                    )}
                  >
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const deliverables = [
  { name: "Process mapping workshop", status: "Complete" },
  { name: "CRM data migration", status: "In Progress" },
  { name: "Automation workflows (Phase 1)", status: "In Progress" },
  { name: "Team training sessions", status: "Upcoming" },
  { name: "Go-live support", status: "Upcoming" },
];

const statusTint: Record<string, string> = {
  Complete: "bg-grad-green/20",
  "In Progress": "bg-grad-blue/15",
  Upcoming: "bg-[#F2F1ED]",
};

function DeliverablesTab() {
  return (
    <div>
      <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">Deliverables</h1>
      <p className="text-[13px] sm:text-[14px] text-ink-500 mb-6 sm:mb-8">
        What&apos;s included in this engagement.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {deliverables.map((d) => (
          <div
            key={d.name}
            className="bg-white border border-black/[0.06] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <p className="text-[13px] sm:text-[14px] font-medium text-black">{d.name}</p>
            <span
              className={cn(
                "text-[11px] font-medium px-2.5 py-1 rounded-full text-ink-700 shrink-0",
                statusTint[d.status],
              )}
            >
              {d.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const milestones = [
  { date: "May 5, 2026", label: "Kickoff & Discovery", state: "done" },
  { date: "May 19, 2026", label: "Process Mapping Complete", state: "done" },
  { date: "Jun 9, 2026", label: "System Build Begins", state: "done" },
  { date: "Jun 23, 2026", label: "Automation Live", state: "active" },
  { date: "Jul 7, 2026", label: "Team Training", state: "upcoming" },
  { date: "Jul 14, 2026", label: "Go-Live", state: "upcoming" },
];

function TimelineTab() {
  return (
    <div>
      <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">Timeline</h1>
      <p className="text-[13px] sm:text-[14px] text-ink-500 mb-6 sm:mb-8">
        Key milestones for this engagement.
      </p>
      <div>
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
              <p className="text-[11px] sm:text-[12px] text-ink-500 mb-0.5">{m.date}</p>
              <p className="text-[13px] sm:text-[14px] font-medium text-black">{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const updates = [
  {
    date: "Jun 16, 2026",
    message:
      "Automation workflows for order processing are now live in staging. Review link sent via email.",
  },
  {
    date: "Jun 9, 2026",
    message:
      "Training guide draft uploaded to Documents — let us know if anything needs adjusting.",
  },
  {
    date: "May 19, 2026",
    message: "Discovery phase wrapped up. Summary document available in Documents tab.",
  },
];

function CommunicationTab() {
  return (
    <div>
      <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">Communication</h1>
      <p className="text-[13px] sm:text-[14px] text-ink-500 mb-6 sm:mb-8">
        Updates from the anymus team.
      </p>
      <div className="space-y-3 sm:space-y-4">
        {updates.map((u) => (
          <div
            key={u.date}
            className="bg-white border border-black/[0.06] rounded-2xl p-4 sm:p-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0" />
              <p className="text-[12px] sm:text-[13px] font-semibold text-black">anymus Team</p>
              <span className="text-[11px] text-ink-500">· {u.date}</span>
            </div>
            <p className="text-[13px] sm:text-[14px] text-ink-700 leading-relaxed">
              {u.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientPortalApp() {
  const [active, setActive] = useState<TabId>("status");

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-[#E4E4E1] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/final-logo.svg" alt="" width={24} height={24} className="shrink-0" />
          <span className="font-serif text-[16px] sm:text-[18px] text-black">anymus</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden sm:inline text-[13px] text-ink-500">Acme Co. Workspace</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0" />
          <a
            href="/client-sign-in"
            className="focus-accent inline-flex items-center gap-1.5 text-[13px] text-ink-700 hover:text-black transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Log out</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1232px] w-full mx-auto">
        {/* Sidebar */}
        <nav className="lg:w-56 shrink-0 border-b lg:border-b-0 lg:border-r border-[#E4E4E1] p-3 sm:p-4 flex lg:flex-col gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "focus-accent flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium whitespace-nowrap shrink-0",
                active === t.id ? "bg-black text-white" : "text-ink-700 hover:bg-[#F2F1ED]",
              )}
            >
              <t.icon className="w-4 h-4 shrink-0" />
              {t.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="flex-1 p-5 sm:p-7 md:p-9 min-w-0">
          {active === "status" && <ProjectStatusTab />}
          {active === "documents" && <DocumentsTab />}
          {active === "invoices" && <InvoicesTab />}
          {active === "deliverables" && <DeliverablesTab />}
          {active === "timeline" && <TimelineTab />}
          {active === "communication" && <CommunicationTab />}
        </main>
      </div>
    </div>
  );
}

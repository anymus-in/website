"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  ListChecks,
  Calendar,
  CalendarClock,
  MessageSquare,
  LifeBuoy,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { TabId } from "./types";
import { Avatar, Badge, ScoreRing } from "./components";
import OverviewTab from "./tabs/OverviewTab";
import DocumentsTab from "./tabs/DocumentsTab";
import InvoicesTab from "./tabs/InvoicesTab";
import DeliverablesTab from "./tabs/DeliverablesTab";
import TimelineTab from "./tabs/TimelineTab";
import MeetingsTab from "./tabs/MeetingsTab";
import CommunicationTab from "./tabs/CommunicationTab";
import SupportTab from "./tabs/SupportTab";
import AccountTab from "./tabs/AccountTab";

const mainTabs = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "deliverables", label: "Deliverables", icon: ListChecks },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "invoices", label: "Invoices", icon: Receipt },
  { id: "timeline", label: "Timeline", icon: Calendar },
  { id: "meetings", label: "Meetings", icon: CalendarClock },
  { id: "communication", label: "Messages", icon: MessageSquare },
  { id: "support", label: "Support", icon: LifeBuoy },
] as const;

const notifications = [
  { id: 1, text: "New document: Automation Workflow Map.pdf", time: "2h ago" },
  { id: 2, text: "Invoice INV-1071 is due in 5 days", time: "1d ago" },
  { id: 3, text: "Automation Live milestone scheduled for Jun 23", time: "3d ago" },
];

export default function ClientPortalApp() {
  const [active, setActive] = useState<TabId>("overview");
  const [notifOpen, setNotifOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  function go(tab: TabId) {
    setActive(tab);
    setNotifOpen(false);
    setAccountOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      {/* Backdrop to close dropdowns on outside click */}
      {(notifOpen || accountOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setNotifOpen(false);
            setAccountOpen(false);
          }}
        />
      )}

      {/* Top bar */}
      <header className="relative z-50 bg-white border-b border-[#E4E4E1] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/final-logo.svg" alt="" width={24} height={24} className="shrink-0" />
          <span className="font-serif text-[16px] sm:text-[18px] text-black">anymus</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setNotifOpen((v) => !v);
                setAccountOpen(false);
              }}
              aria-label="Notifications"
              aria-expanded={notifOpen}
              className="focus-accent relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#F2F1ED] transition-colors"
            >
              <Bell className="w-4 h-4 text-ink-700" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#E53935]" />
            </button>
            {notifOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-[#E4E4E1] rounded-xl shadow-lg overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-[#E4E4E1] flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-black">Notifications</p>
                  <button className="text-[11px] text-accent-ink hover:underline">
                    Mark all read
                  </button>
                </div>
                <div className="divide-y divide-[#E4E4E1] max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="px-4 py-3">
                      <p className="text-[12px] sm:text-[13px] text-black leading-snug mb-0.5">
                        {n.text}
                      </p>
                      <p className="text-[11px] text-ink-500">{n.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Account */}
          <div className="relative">
            <button
              onClick={() => {
                setAccountOpen((v) => !v);
                setNotifOpen(false);
              }}
              aria-label="Account menu"
              aria-expanded={accountOpen}
              className="focus-accent flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full hover:bg-[#F2F1ED] transition-colors"
            >
              <Avatar name="Jane Cooper" size={32} />
              <ChevronDown className="w-3.5 h-3.5 text-ink-500" />
            </button>
            {accountOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-[#E4E4E1] rounded-xl shadow-lg overflow-hidden py-1.5 z-50">
                <div className="px-4 py-2 mb-1 border-b border-[#E4E4E1]">
                  <p className="text-[13px] font-semibold text-black">Jane Cooper</p>
                  <p className="text-[11px] text-ink-500">Acme Co.</p>
                </div>
                <button
                  onClick={() => go("account")}
                  className="focus-accent w-full flex items-center gap-2 px-4 py-2 text-[13px] text-ink-700 hover:bg-[#F2F1ED] transition-colors text-left"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Settings
                </button>
                <a
                  href="/client-sign-in"
                  className="focus-accent flex items-center gap-2 px-4 py-2 text-[13px] text-ink-700 hover:bg-[#F2F1ED] transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Log out
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Project header band — persistent project identity + status + quick actions */}
      <div className="relative z-30 bg-white border-b border-[#E4E4E1] shrink-0">
        <div className="max-w-[1232px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#18181B] flex items-center justify-center text-white font-serif text-[16px] shrink-0">
              AC
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-[17px] sm:text-[19px] text-black truncate">
                  Acme Co.
                </h1>
                <Badge tint="bg-grad-blue/15" dot="bg-grad-blue">
                  On Track
                </Badge>
              </div>
              <p className="text-[12px] sm:text-[13px] text-ink-500 truncate">
                CRM &amp; Automation Implementation: Phase 2 of 3
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ScoreRing value={86} size={44} stroke={4} label="health" />
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => go("meetings")}
                className="focus-accent inline-flex items-center gap-1.5 border border-[#D4D4D1] text-black rounded-full px-3.5 py-2 text-[12px] sm:text-[13px] font-medium hover:bg-[#F2F1ED] transition-colors min-h-[36px]"
              >
                <Phone className="w-3.5 h-3.5" />
                Schedule call
              </button>
              <button
                onClick={() => go("support")}
                className="cta-lift focus-accent inline-flex items-center gap-1.5 bg-black text-white rounded-full px-3.5 py-2 text-[12px] sm:text-[13px] font-medium min-h-[36px]"
              >
                <LifeBuoy className="w-3.5 h-3.5" />
                Get support
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1232px] w-full mx-auto">
        {/* Sidebar */}
        <nav className="lg:w-56 shrink-0 border-b lg:border-b-0 lg:border-r border-[#E4E4E1] p-3 sm:p-4 flex lg:flex-col gap-1 overflow-x-auto">
          {mainTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              className={cn(
                "focus-accent flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors",
                active === t.id ? "bg-black text-white" : "text-ink-700 hover:bg-[#F2F1ED]",
              )}
            >
              <t.icon className="w-4 h-4 shrink-0" />
              {t.label}
            </button>
          ))}
          <div className="hidden lg:block border-t border-[#E4E4E1] my-2" />
          <button
            onClick={() => go("account")}
            className={cn(
              "focus-accent flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors",
              active === "account" ? "bg-black text-white" : "text-ink-700 hover:bg-[#F2F1ED]",
            )}
          >
            <Settings className="w-4 h-4 shrink-0" />
            Settings
          </button>
        </nav>

        {/* Content */}
        <main className="flex-1 p-5 sm:p-7 md:p-9 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {active === "overview" && <OverviewTab onNavigate={go} />}
              {active === "deliverables" && <DeliverablesTab />}
              {active === "documents" && <DocumentsTab />}
              {active === "invoices" && <InvoicesTab />}
              {active === "timeline" && <TimelineTab />}
              {active === "meetings" && <MeetingsTab />}
              {active === "communication" && <CommunicationTab />}
              {active === "support" && <SupportTab onNavigate={go} />}
              {active === "account" && <AccountTab />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

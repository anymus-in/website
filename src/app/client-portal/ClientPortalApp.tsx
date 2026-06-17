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
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { TabId } from "./types";
import OverviewTab from "./tabs/OverviewTab";
import DocumentsTab from "./tabs/DocumentsTab";
import InvoicesTab from "./tabs/InvoicesTab";
import DeliverablesTab from "./tabs/DeliverablesTab";
import TimelineTab from "./tabs/TimelineTab";
import CommunicationTab from "./tabs/CommunicationTab";
import AccountTab from "./tabs/AccountTab";

const mainTabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "invoices", label: "Invoices", icon: Receipt },
  { id: "deliverables", label: "Deliverables", icon: ListChecks },
  { id: "timeline", label: "Timeline", icon: Calendar },
  { id: "communication", label: "Communication", icon: MessageSquare },
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
          <span className="hidden sm:inline text-[13px] text-ink-500 mr-1">
            Acme Co. Workspace
          </span>

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
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0" />
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
                  Account settings
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

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1232px] w-full mx-auto">
        {/* Sidebar */}
        <nav className="lg:w-56 shrink-0 border-b lg:border-b-0 lg:border-r border-[#E4E4E1] p-3 sm:p-4 flex lg:flex-col gap-1 overflow-x-auto">
          {mainTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              className={cn(
                "focus-accent flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium whitespace-nowrap shrink-0",
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
              "focus-accent flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-medium whitespace-nowrap shrink-0",
              active === "account" ? "bg-black text-white" : "text-ink-700 hover:bg-[#F2F1ED]",
            )}
          >
            <Settings className="w-4 h-4 shrink-0" />
            Account
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
              {active === "documents" && <DocumentsTab />}
              {active === "invoices" && <InvoicesTab />}
              {active === "deliverables" && <DeliverablesTab />}
              {active === "timeline" && <TimelineTab />}
              {active === "communication" && <CommunicationTab />}
              {active === "account" && <AccountTab />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

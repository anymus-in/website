"use client";

import {
  Bell,
  Check,
  ChevronDown,
  GitBranch,
  LayoutGrid,
  Package,
  Plus,
  Search,
  Settings,
  TrendingUp,
  Zap,
  ClipboardCheck,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};
const line: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const trustPoints = [
  "Free discovery call",
  "Built around your existing tools",
  "No long-term lock-in",
];

const trustPillsMobile = ["Free Audit", "Custom Built", "No Lock-In"];

const modules = [
  { label: "Overview", icon: LayoutGrid, count: null, active: true },
  { label: "Pipeline", icon: GitBranch, count: "59", active: false },
  { label: "Inventory", icon: Package, count: "312", active: false },
  { label: "Automations", icon: Zap, count: "12", active: false },
  { label: "Approvals", icon: ClipboardCheck, count: "7", active: false },
];

const kpis = [
  { label: "Total Revenue", value: "₹2,84,500", trend: "+12%", icon: TrendingUp, accent: "text-grad-blue" },
  { label: "Open Deals", value: "34", trend: "+5", icon: GitBranch, accent: "text-grad-amber" },
  { label: "Inventory Value", value: "₹96,200", trend: "+3%", icon: Package, accent: "text-grad-green" },
  { label: "Approvals Cleared", value: "21", trend: "+8", icon: ClipboardCheck, accent: "text-grad-blue" },
];

const timeRanges = ["7D", "30D", "90D"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const revenueBars = [42, 55, 48, 64, 72, 80, 95];

const pipelineStages = [
  { label: "New", count: 24, total: 24 },
  { label: "Qualified", count: 16, total: 24 },
  { label: "Proposal", count: 9, total: 24 },
  { label: "Won", count: 5, total: 24 },
];

const approvals = [
  { name: "Supplier payment — Patel & Sons", initials: "PS", status: "Pending", time: "2h ago" },
  { name: "Staff advance — R. Kumar", initials: "RK", status: "Pending", time: "5h ago" },
  { name: "GST invoice — Sharma Traders", initials: "ST", status: "Approved", time: "1d ago" },
];

const activity = [
  { actor: "Anita", initials: "AN", action: "moved", target: "Mehta Textiles deal to Proposal", time: "12m ago" },
  { actor: "Automation", initials: "⚡", action: "synced", target: "248 SKUs from Tally", time: "34m ago" },
  { actor: "Rohan", initials: "RJ", action: "approved", target: "GST invoice #4471", time: "1h ago" },
];

/* Enterprise dashboard mockup — the hero centerpiece visual */
function EnterpriseDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="relative rounded-[24px] sm:rounded-[28px] bg-paper border border-black/[0.06] p-2 sm:p-3 overflow-hidden"
      style={{ boxShadow: "var(--shadow-deep)" }}
    >
      <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#E4E4E1] bg-white flex flex-col">
        <div className="h-[3px] bg-gradient-to-r from-grad-amber via-grad-green to-grad-blue w-full shrink-0" />

        {/* Top app bar */}
        <div className="flex items-center justify-between gap-3 sm:gap-5 px-4 sm:px-7 py-3 sm:py-4 border-b border-[#E4E4E1] shrink-0">
          <div className="flex items-center gap-5 sm:gap-7 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex items-end gap-[2px]">
                {[3, 5, 7, 5, 3].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2px] rounded-full bg-black"
                    style={{ height: h * 1.8 }}
                  />
                ))}
              </div>
              <span className="font-serif text-[13px] sm:text-[15px] text-black">
                anymus
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-5 text-[12px] font-medium">
              {["Overview", "Pipeline", "Inventory", "Reports"].map((t, i) => (
                <span key={t} className={i === 0 ? "text-black" : "text-ink-400"}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-[#F7F7F5] rounded-full px-3.5 py-2 w-full max-w-[260px]">
            <Search className="w-3.5 h-3.5 text-ink-500 shrink-0" />
            <span className="text-[12px] text-ink-500">Search...</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Bell className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-ink-700" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="hidden lg:flex w-56 bg-[#18181B] shrink-0 flex-col p-4 pt-6">
            <button className="flex items-center justify-center gap-1.5 bg-zinc-700/60 text-white text-[12px] font-medium rounded-lg py-2.5 mb-5">
              <Plus className="w-3.5 h-3.5" />
              New record
            </button>
            {modules.map((m) => (
              <div
                key={m.label}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-1 text-[12px] ${
                  m.active ? "bg-zinc-700 text-white" : "text-zinc-500"
                }`}
              >
                <m.icon className="w-3.5 h-3.5 shrink-0" />
                <span className="flex-1">{m.label}</span>
                {m.count && (
                  <span className="text-[10px] text-zinc-500">{m.count}</span>
                )}
              </div>
            ))}
            <div className="flex-1" />
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] text-zinc-500 border-t border-zinc-700/60 mt-2 pt-4">
              <Settings className="w-3.5 h-3.5 shrink-0" />
              <span className="flex-1">Settings</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0" />
              <span className="text-[11px] text-zinc-300 truncate">Priya Sharma</span>
            </div>
          </div>

          {/* Main panel */}
          <div className="flex-1 bg-white p-5 sm:p-8 md:p-10 min-w-0">
            <div className="flex items-center justify-between mb-6 sm:mb-7">
              <div>
                <p className="text-[11px] text-ink-400 mb-1">Overview</p>
                <p className="text-[17px] sm:text-[20px] font-semibold text-black">
                  Revenue overview
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="hidden sm:flex items-center gap-1 bg-[#F7F7F5] rounded-full p-1">
                  {timeRanges.map((r, i) => (
                    <span
                      key={r}
                      className={`text-[11px] font-medium rounded-full px-2.5 py-1 ${
                        i === 1 ? "bg-white text-black shadow-sm" : "text-ink-500"
                      }`}
                    >
                      {r}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-ink-500 bg-[#F7F7F5] rounded-full px-3 py-1.5">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#1F8A56]"
                    animate={{ opacity: [1, 0.25, 1], scale: [1, 0.8, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Live
                </span>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-7 sm:mb-9">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="bg-[#F7F7F5] rounded-xl px-3.5 sm:px-4 py-3.5 sm:py-4"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-[9px] sm:text-[10px] text-ink-500 truncate">
                      {k.label}
                    </p>
                    <k.icon className={`w-3 h-3 ${k.accent} shrink-0`} />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-[16px] sm:text-[20px] font-semibold text-black">
                      {k.value}
                    </p>
                    <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-medium text-[#1F8A56] shrink-0">
                      <TrendingUp className="w-2.5 h-2.5" />
                      {k.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="relative mb-7 sm:mb-9">
              <div className="absolute left-0 top-0 w-9 sm:w-10 h-32 sm:h-44 flex flex-col justify-between text-right pr-1">
                <span className="text-[9px] sm:text-[10px] text-ink-400">₹1L</span>
                <span className="text-[9px] sm:text-[10px] text-ink-400">₹50k</span>
                <span className="text-[9px] sm:text-[10px] text-ink-400">₹0</span>
              </div>
              <div className="absolute left-9 sm:left-10 right-0 top-0 h-32 sm:h-44 flex flex-col justify-between pointer-events-none">
                <div className="h-px bg-[#F0F0EE]" />
                <div className="h-px bg-[#F0F0EE]" />
                <div className="h-px bg-[#F0F0EE]" />
              </div>
              <motion.div
                className="flex items-end gap-2.5 sm:gap-4 h-32 sm:h-44 pl-9 sm:pl-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              >
                {revenueBars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 relative group"
                    variants={{
                      hidden: { scaleY: 0 },
                      show: {
                        scaleY: 1,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    style={{ height: `${h}%`, transformOrigin: "bottom" }}
                  >
                    {i === revenueBars.length - 1 && (
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-medium rounded-md px-2 py-1 whitespace-nowrap">
                        ₹95k
                      </div>
                    )}
                    <div
                      className={`w-full h-full rounded-t-sm ${
                        i === revenueBars.length - 1 ? "bg-grad-blue" : "bg-[#E4E4E1]"
                      }`}
                    />
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex gap-2.5 sm:gap-4 pl-9 sm:pl-10 mt-1.5">
                {months.map((m) => (
                  <span
                    key={m}
                    className="flex-1 text-center text-[9px] sm:text-[10px] text-ink-500"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {!compact && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                {/* Pipeline */}
                <div>
                  <p className="text-[11px] sm:text-[12px] font-semibold text-black mb-2.5 sm:mb-3">
                    Pipeline
                  </p>
                  <div className="space-y-2">
                    {pipelineStages.map((s) => (
                      <div key={s.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] sm:text-[11px] text-ink-700">
                            {s.label}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-black">
                            {s.count}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#F0F0EE] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-grad-blue"
                            style={{ width: `${(s.count / s.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Approvals */}
                <div>
                  <p className="text-[11px] sm:text-[12px] font-semibold text-black mb-2.5 sm:mb-3">
                    Approvals
                  </p>
                  <div className="space-y-1.5">
                    {approvals.map((a) => (
                      <div
                        key={a.name}
                        className="flex items-center gap-2 bg-[#F7F7F5] rounded-lg px-2.5 py-2"
                      >
                        <div className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-600 text-[8px] font-semibold flex items-center justify-center shrink-0">
                          {a.initials}
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-ink-700 truncate flex-1">
                          {a.name}
                        </span>
                        <span
                          className={`text-[9px] font-medium px-2 py-0.5 rounded-full text-ink-700 shrink-0 ${
                            a.status === "Approved" ? "bg-grad-green/20" : "bg-grad-amber/25"
                          }`}
                        >
                          {a.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <p className="text-[11px] sm:text-[12px] font-semibold text-black">
                      Recent activity
                    </p>
                    <ChevronDown className="w-3 h-3 text-ink-400" />
                  </div>
                  <div className="space-y-1.5">
                    {activity.map((a) => (
                      <div key={a.target} className="flex items-start gap-2 px-2.5 py-2">
                        <div className="w-5 h-5 rounded-full bg-grad-blue/15 text-grad-blue text-[8px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                          {a.initials}
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-ink-700 leading-snug">
                          <span className="font-medium text-black">{a.actor}</span>{" "}
                          {a.action} {a.target}
                          <span className="text-ink-400"> · {a.time}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden dot-grid"
      style={{ background: "var(--gradient-hero-bg)" }}
    >
      {/* Text content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 pt-24 md:pt-40 max-w-4xl mx-auto"
      >
        <motion.p variants={line} className="eyebrow mb-3 md:mb-5">
          Business Systems &amp; Automation
        </motion.p>
        <motion.h1
          variants={line}
          className="font-serif font-normal text-[clamp(26px,7vw,34px)] md:text-[clamp(32px,6vw,68px)] leading-[1.25] md:leading-[1.18] tracking-[-0.01em] md:tracking-[-1px] text-black mb-5 md:mb-4 max-w-[300px] md:max-w-3xl"
        >
          Scale Operations Faster
          <br />
          With Systems Built For You
        </motion.h1>
        <motion.p
          variants={line}
          className="hidden md:block text-[13px] text-ink-400 mb-6"
        >
          Built by <span style={{ color: "#5F44E0" }}>Anymus</span>
        </motion.p>

        <motion.p
          variants={line}
          className="text-[14px] md:text-[15px] mb-8 md:mb-9 max-w-[300px] md:max-w-xl text-ink-500 md:text-[#5f6368] leading-relaxed"
        >
          We help companies automate operations, sales, inventory,
          approvals, and reporting — so teams spend less time on manual
          work and more time growing the business.
        </motion.p>

        <motion.div
          variants={line}
          className="flex flex-col items-center gap-3.5 md:flex-row md:gap-4 mb-7 md:mb-8 w-full md:w-auto"
        >
          <a
            href="/schedule-call"
            className="cta-lift inline-flex w-full md:w-auto items-center justify-center gap-2 bg-black text-white rounded-full px-7 py-4 md:py-3.5 text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[50px] md:min-h-[44px]"
          >
            Book Free Consultation
          </a>
          <a
            href="#process"
            className="focus-accent inline-flex items-center justify-center gap-1.5 text-ink-500 text-[13px] md:text-[15px] font-medium tracking-[-0.01em] py-2 md:py-3.5 md:px-7 md:text-black md:border md:border-[#D4D4D1] md:rounded-full md:w-auto hover:text-black md:hover:bg-[#F2F1ED] transition-colors md:min-h-[44px]"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div variants={line} className="w-full">
          {/* Mobile — subtle, lightweight badges */}
          <p className="flex md:hidden flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[12px] text-ink-400">
            {trustPillsMobile.map((t, i) => (
              <span key={t} className="inline-flex items-center">
                {t}
                {i < trustPillsMobile.length - 1 && (
                  <span className="mx-2 text-ink-300">·</span>
                )}
              </span>
            ))}
          </p>
          {/* Desktop — unchanged */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] sm:text-[13px] text-ink-500">
            {trustPoints.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-grad-green" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Dashboard mockup — business outcomes visual */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 mt-10 md:mt-6 mb-14 md:mb-24"
      >
        {/* Desktop — full dashboard, unchanged */}
        <div className="hidden md:block">
          <EnterpriseDashboard />
        </div>

        {/* Mobile — premium showcase preview, ~90% width, gently floating */}
        <motion.div
          className="md:hidden w-[90%] mx-auto rounded-[28px]"
          style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <EnterpriseDashboard compact />
        </motion.div>
      </motion.div>
    </section>
  );
}

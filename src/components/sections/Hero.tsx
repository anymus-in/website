"use client";

import dynamic from "next/dynamic";
import {
  Bell,
  Check,
  GitBranch,
  Package,
  Search,
  TrendingUp,
  Zap,
  ClipboardCheck,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Highlight from "@/components/motion/Highlight";

/* Spline is heavy (3D runtime) — load client-only with a gradient fallback */
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

function SplineFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(50% 70% at 22% 60%, rgba(245,194,107,0.55), transparent 70%), radial-gradient(45% 70% at 70% 50%, rgba(59,130,246,0.45), transparent 70%)",
      }}
    />
  );
}

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

const modules = [
  { label: "Pipeline", icon: GitBranch, count: "59", active: false },
  { label: "Inventory", icon: Package, count: "312", active: false },
  { label: "Revenue", icon: TrendingUp, count: null, active: true },
  { label: "Automations", icon: Zap, count: "12", active: false },
  { label: "Approvals", icon: ClipboardCheck, count: "7", active: false },
];

const kpis = [
  { label: "Total Revenue", value: "₹2,84,500", trend: "+12%" },
  { label: "Open Deals", value: "34", trend: "+5" },
  { label: "Inventory Value", value: "₹96,200", trend: "+3%" },
  { label: "Approvals Cleared", value: "21", trend: "+8" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const revenueBars = [42, 55, 48, 64, 72, 80, 95];

const pipelineStages = [
  { label: "New", count: 24 },
  { label: "Qualified", count: 16 },
  { label: "Proposal", count: 9 },
  { label: "Won", count: 5 },
];

const approvals = [
  { name: "Supplier payment — Patel & Sons", status: "Pending" },
  { name: "Staff advance — R. Kumar", status: "Pending" },
  { name: "GST invoice — Sharma Traders", status: "Approved" },
];

/* Enterprise dashboard mockup — the hero centerpiece visual */
function EnterpriseDashboard() {
  return (
    <div
      className="relative rounded-[24px] sm:rounded-[28px] bg-paper border border-black/[0.06] p-2 sm:p-3 overflow-hidden"
      style={{ boxShadow: "var(--shadow-deep)" }}
    >
      <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#E4E4E1] bg-white flex flex-col">
        <div className="h-[3px] bg-gradient-to-r from-grad-amber via-grad-green to-grad-blue w-full shrink-0" />

        {/* Top app bar */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-[#E4E4E1] shrink-0">
          <div className="flex items-center gap-2 shrink-0">
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
          <div className="hidden lg:flex w-52 bg-[#18181B] shrink-0 flex-col p-4 pt-6">
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
          </div>

          {/* Main panel */}
          <div className="flex-1 bg-white p-5 sm:p-7 md:p-8 min-w-0">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <p className="text-[15px] sm:text-[17px] font-semibold text-black">
                Revenue overview
              </p>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-ink-500 bg-[#F7F7F5] rounded-full px-3 py-1">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#1F8A56]"
                  animate={{ opacity: [1, 0.25, 1], scale: [1, 0.8, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                Live · This month
              </span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-7">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="bg-[#F7F7F5] rounded-xl px-3 sm:px-4 py-3 sm:py-3.5"
                >
                  <p className="text-[9px] sm:text-[10px] text-ink-500 mb-1.5 truncate">
                    {k.label}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-[15px] sm:text-[18px] font-semibold text-black">
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
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute left-0 top-0 w-9 sm:w-10 h-28 sm:h-36 flex flex-col justify-between text-right pr-1">
                <span className="text-[9px] sm:text-[10px] text-ink-400">₹1L</span>
                <span className="text-[9px] sm:text-[10px] text-ink-400">₹50k</span>
                <span className="text-[9px] sm:text-[10px] text-ink-400">₹0</span>
              </div>
              <div className="absolute left-9 sm:left-10 right-0 top-0 h-28 sm:h-36 flex flex-col justify-between pointer-events-none">
                <div className="h-px bg-[#F0F0EE]" />
                <div className="h-px bg-[#F0F0EE]" />
                <div className="h-px bg-[#F0F0EE]" />
              </div>
              <motion.div
                className="flex items-end gap-2 sm:gap-3 h-28 sm:h-36 pl-9 sm:pl-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              >
                {revenueBars.map((h, i) => (
                  <motion.div
                    key={i}
                    className={`flex-1 rounded-t-sm origin-bottom ${
                      i === revenueBars.length - 1 ? "bg-grad-blue" : "bg-[#E4E4E1]"
                    }`}
                    style={{ height: `${h}%` }}
                    variants={{
                      hidden: { scaleY: 0 },
                      show: {
                        scaleY: 1,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  />
                ))}
              </motion.div>
              <div className="flex gap-2 sm:gap-3 pl-9 sm:pl-10 mt-1.5">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Pipeline */}
              <div>
                <p className="text-[11px] sm:text-[12px] font-semibold text-black mb-2 sm:mb-2.5">
                  Pipeline
                </p>
                <div className="space-y-1.5">
                  {pipelineStages.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between bg-[#F7F7F5] rounded-lg px-3 py-2"
                    >
                      <span className="text-[10px] sm:text-[11px] text-ink-700">
                        {s.label}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-black">
                        {s.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approvals */}
              <div>
                <p className="text-[11px] sm:text-[12px] font-semibold text-black mb-2 sm:mb-2.5">
                  Approvals
                </p>
                <div className="space-y-1.5">
                  {approvals.map((a) => (
                    <div
                      key={a.name}
                      className="flex items-center justify-between bg-[#F7F7F5] rounded-lg px-3 py-2 gap-2"
                    >
                      <span className="text-[10px] sm:text-[11px] text-ink-700 truncate">
                        {a.name}
                      </span>
                      <span
                        className={`text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full text-ink-700 shrink-0 ${
                          a.status === "Approved" ? "bg-grad-green/20" : "bg-grad-amber/25"
                        }`}
                      >
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 max-w-4xl mx-auto"
      >
        <motion.p variants={line} className="eyebrow mb-4 sm:mb-5">
          Business Systems &amp; Automation
        </motion.p>
        <motion.h1
          variants={line}
          className="font-serif font-normal text-[clamp(32px,6vw,68px)] leading-[1.08] tracking-[-1px] text-black mb-4 sm:mb-6"
        >
          <Highlight color="#5F44E0"><span style={{ color: "#5F44E0" }}>Anymus</span></Highlight> Is Your
          <br />
          Technical Growth Partner
        </motion.h1>
      
        <motion.p
          variants={line}
          className="text-[14px] sm:text-[15px] text-ink-500 mb-7 sm:mb-9 max-w-xl"
        >
          We help companies automate operations, sales, inventory,
          approvals, and reporting — so teams spend less time on manual
          work and more time growing the business.
        </motion.p>

        <motion.div
          variants={line}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <a
            href="/schedule-call"
            className="cta-lift inline-flex items-center gap-2 bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
          >
            Book Free Consultation
          </a>
          <a
            href="#process"
            className="focus-accent inline-flex items-center gap-2 text-black rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] border border-[#D4D4D1] hover:bg-[#F2F1ED] transition-colors min-h-[44px]"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          variants={line}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] sm:text-[13px] text-ink-500"
        >
          {trustPoints.map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-grad-green" />
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Spline flowing ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.44, duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative w-full -mt-2 sm:-mt-4"
        style={{ minHeight: "260px", height: "clamp(260px, 42vw, 460px)" }}
      >
        <div className="absolute inset-0 pointer-events-none sm:pointer-events-auto" style={{ opacity: 1 }}>
          <Spline scene="https://prod.spline.design/F-nKRrS5AnCe0xod/scene.splinecode" />
        </div>
        {/* Cover the "Built with Spline" watermark */}
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-white z-10" />
      </motion.div>

      {/* Dashboard mockup — business outcomes visual */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-10 w-full max-w-[1080px] mx-auto px-4 sm:px-6 mt-4 sm:mt-6 mb-16 sm:mb-24"
      >
        <EnterpriseDashboard />
      </motion.div>
    </section>
  );
}

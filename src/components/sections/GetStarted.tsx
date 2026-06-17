import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "1.",
    label: "Discovery",
    body: "We map your current tools, workflows, and pain points, then document how work actually happens — not how it's supposed to.",
  },
  {
    num: "2.",
    label: "Build & Automate",
    body: "We configure your ERP, CRM, or automation system around that reality, and connect your tools so handoffs run themselves.",
  },
  {
    num: "3.",
    label: "Launch",
    body: "Your team learns the system hands-on, then you go live with something they actually use.",
  },
];

const stages = [
  { label: "Discovery", done: true },
  { label: "Build & Automate", done: false, active: true },
  { label: "Launch", done: false },
];

function ImplementationPlanMock() {
  return (
    /* Outer paper wrapper — matches the dashboard chrome used elsewhere */
    <div
      className="relative dot-grid rounded-[20px] sm:rounded-[24px] bg-paper border border-black/[0.06] p-4 sm:p-6 pt-6 sm:pt-8 overflow-hidden h-full"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#E4E4E1] shadow-sm flex flex-col md:flex-row relative h-full">
        {/* Gradient top accent bar */}
        <div className="h-1 bg-gradient-to-r from-grad-amber to-grad-blue w-full absolute top-0 left-0 right-0 rounded-t-[14px] z-10" />

        {/* Sidebar */}
        <div className="w-full md:w-44 bg-[#18181B] shrink-0 flex flex-col p-3 sm:p-4 pt-5 order-last md:order-first h-full">
          <div className="flex items-center gap-1.5 mb-4 sm:mb-6">
            <div className="flex items-end gap-[2px]">
              {[3, 5, 7, 5, 3].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] rounded-full bg-white"
                  style={{ height: h * 2.2 }}
                />
              ))}
            </div>
            <span className="text-white text-[10px] sm:text-[11px] font-serif">anymus</span>
          </div>
          {stages.map((s) => (
            <div
              key={s.label}
              className={cn(
                "flex items-center gap-2 px-2 py-2 rounded-lg mb-0.5 text-[10px] sm:text-[11px]",
                s.active ? "bg-zinc-700 text-white" : "text-zinc-500",
              )}
            >
              <div
                className={cn(
                  "w-1 h-1 rounded-full shrink-0",
                  s.active ? "bg-white" : s.done ? "bg-grad-green" : "bg-zinc-600",
                )}
              />
              {s.label}
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="flex-1 bg-white p-5 sm:p-7 min-w-0 h-full flex flex-col justify-center">
          <p className="text-[12px] sm:text-[13px] font-semibold text-black mb-1">
            Implementation Plan
          </p>
          <p className="text-[10px] sm:text-[11px] text-ink-500 mb-3 sm:mb-4">
            1 of 3 stages complete
          </p>
          <div className="h-1.5 bg-[#F2F1ED] rounded-full mb-4 sm:mb-5 overflow-hidden">
            <div className="h-full bg-grad-blue rounded-full" style={{ width: "33%" }} />
          </div>
          <div className="space-y-2 sm:space-y-2.5">
            {stages.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 bg-[#F7F7F5] rounded-lg px-3 py-2.5 sm:py-3"
              >
                {s.done ? (
                  <span className="w-4 h-4 rounded-full bg-grad-green/25 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-ink-700" />
                  </span>
                ) : (
                  <span className="w-4 h-4 rounded-full border border-[#D4D4D1] shrink-0" />
                )}
                <span className="text-[11px] sm:text-[12px] text-ink-700">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GetStarted() {
  return (
    <section id="process" className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <p className="eyebrow mb-3 sm:mb-4">Implementation Process</p>
        <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[460px]">
          How we get you there
        </h2>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[460px] leading-relaxed mb-8 sm:mb-12 md:mb-16">
          A clear process, not a black box — here&apos;s exactly what an
          engagement looks like.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 sm:gap-12 md:gap-16 lg:items-stretch">
          {/* Steps */}
          <div>
            {steps.map((s, i) => (
              <div key={i} className="border-t border-[#E4E4E1] py-5 sm:py-6">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <p className="font-serif text-[18px] sm:text-[20px] text-accent-ink shrink-0">
                    {s.num}
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-black">
                    {s.label}
                  </p>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#52525B] leading-relaxed mt-1 ml-[28px] sm:ml-[32px] max-w-[320px]">
                  {s.body}
                </p>
              </div>
            ))}
            <div className="mt-6 sm:mt-8">
              <a
                href="/schedule-call"
                className="cta-lift inline-flex items-center bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
              >
                Book Free Consultation
              </a>
              <p className="text-[11px] sm:text-[12px] text-ink-500 mt-2 sm:mt-3">
                Free 30-minute discovery call
              </p>
            </div>
          </div>

          {/* Implementation plan mock */}
          <ImplementationPlanMock />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { PortalCard, TabHeader } from "../components";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`focus-accent relative w-10 h-6 rounded-full transition-colors shrink-0 ${
        checked ? "bg-black" : "bg-[#D4D4D1]"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

const initialPrefs = [
  {
    id: "email",
    label: "Email updates",
    description: "Get notified when there's a new update.",
    checked: true,
  },
  {
    id: "summary",
    label: "Weekly summary",
    description: "A short recap of progress every Monday.",
    checked: true,
  },
  {
    id: "invoices",
    label: "Invoice reminders",
    description: "Reminders for upcoming and overdue invoices.",
    checked: false,
  },
];

export default function AccountTab() {
  const [prefs, setPrefs] = useState(initialPrefs);

  return (
    <div>
      <TabHeader title="Account" subtitle="Your workspace and notification preferences." />

      <PortalCard className="p-5 sm:p-7 mb-5 sm:mb-6">
        <p className="text-[12px] text-ink-500 mb-4">Workspace</p>
        <div className="flex items-center gap-4 mb-5">
          <span className="w-12 h-12 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0" />
          <div>
            <p className="text-[15px] font-semibold text-black">Acme Co.</p>
            <p className="text-[12px] text-ink-500">Engagement started May 5, 2026</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] pt-4 border-t border-[#E4E4E1]">
          <div>
            <p className="text-ink-500 mb-1">Primary contact</p>
            <p className="text-black font-medium">Jane Cooper</p>
            <p className="text-ink-500">jane@acme.com</p>
          </div>
          <div>
            <p className="text-ink-500 mb-1">anymus account lead</p>
            <p className="text-black font-medium">Sarah Chen</p>
            <p className="text-ink-500">sarah@anymus.io</p>
          </div>
        </div>
      </PortalCard>

      <PortalCard className="p-5 sm:p-7">
        <p className="text-[12px] text-ink-500 mb-4">Notification preferences</p>
        <div className="space-y-4 sm:space-y-5">
          {prefs.map((p) => (
            <div key={p.id} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[13px] sm:text-[14px] font-medium text-black">{p.label}</p>
                <p className="text-[12px] text-ink-500">{p.description}</p>
              </div>
              <Toggle
                checked={p.checked}
                onChange={(v) =>
                  setPrefs((prev) => prev.map((x) => (x.id === p.id ? { ...x, checked: v } : x)))
                }
              />
            </div>
          ))}
        </div>
      </PortalCard>
    </div>
  );
}

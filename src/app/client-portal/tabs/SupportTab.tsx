"use client";

import { useState } from "react";
import { BookOpen, LifeBuoy, MessageSquare, Phone, Send } from "lucide-react";
import { PortalCard, TabHeader } from "../components";
import type { TabId } from "../types";

const knowledgeBase = [
  { title: "How automation approvals work", category: "Workflows" },
  { title: "Reading your invoice & payment schedule", category: "Billing" },
  { title: "Inviting teammates to the portal", category: "Account" },
  { title: "What happens during go-live week", category: "Launch" },
];

const priorities = ["Low", "Normal", "High", "Urgent"] as const;

export default function SupportTab({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  const [priority, setPriority] = useState<(typeof priorities)[number]>("Normal");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit() {
    if (!message.trim()) return;
    setSent(true);
    setMessage("");
  }

  return (
    <div>
      <TabHeader title="Support" subtitle="Get help from your Anymus team, fast." />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <button
          onClick={() => onNavigate("communication")}
          className="focus-accent text-left"
        >
          <PortalCard className="p-5 h-full hover:border-black/[0.12] transition-colors">
            <MessageSquare className="w-5 h-5 text-ink-700 mb-3" />
            <p className="text-[13px] font-semibold text-black mb-1">Message your team</p>
            <p className="text-[12px] text-ink-500">Usually replies within a few hours.</p>
          </PortalCard>
        </button>
        <button onClick={() => onNavigate("meetings")} className="focus-accent text-left">
          <PortalCard className="p-5 h-full hover:border-black/[0.12] transition-colors">
            <Phone className="w-5 h-5 text-ink-700 mb-3" />
            <p className="text-[13px] font-semibold text-black mb-1">Schedule a call</p>
            <p className="text-[12px] text-ink-500">Talk it through live with your lead.</p>
          </PortalCard>
        </button>
        <PortalCard className="p-5">
          <LifeBuoy className="w-5 h-5 text-ink-700 mb-3" />
          <p className="text-[13px] font-semibold text-black mb-1">Priority support</p>
          <p className="text-[12px] text-ink-500">For production-impacting issues only.</p>
        </PortalCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Quick request form */}
        <PortalCard className="lg:col-span-2 p-5 sm:p-7">
          <p className="text-[13px] font-semibold text-black mb-4">Submit a support request</p>
          <div className="flex items-center gap-1.5 mb-3">
            {priorities.map((p) => (
              <button
                key={p}
                onClick={() => setPriority(p)}
                className={`focus-accent px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                  priority === p ? "bg-black text-white" : "bg-[#F2F1ED] text-ink-700 hover:bg-[#E4E4E1]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Describe what you need help with..."
            className="focus-accent w-full bg-[#FAFAF8] border border-[#E4E4E1] rounded-xl p-3.5 text-[13px] text-black placeholder:text-ink-400 outline-none resize-none mb-3"
          />
          <div className="flex items-center justify-between">
            {sent ? (
              <p className="text-[12px] text-[#1F8A56]">Request sent. We&apos;ll be in touch shortly.</p>
            ) : (
              <span />
            )}
            <button
              onClick={submit}
              className="cta-lift focus-accent inline-flex items-center gap-1.5 bg-black text-white rounded-full px-4 py-2 text-[13px] font-medium min-h-[40px]"
            >
              <Send className="w-3.5 h-3.5" />
              Submit
            </button>
          </div>
        </PortalCard>

        {/* Knowledge base */}
        <PortalCard className="p-5 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-ink-700" />
            <p className="text-[13px] font-semibold text-black">Knowledge base</p>
          </div>
          <div className="space-y-3">
            {knowledgeBase.map((k) => (
              <button key={k.title} className="focus-accent block w-full text-left group">
                <p className="text-[12.5px] text-black leading-snug group-hover:underline">
                  {k.title}
                </p>
                <p className="text-[10.5px] text-ink-500">{k.category}</p>
              </button>
            ))}
          </div>
        </PortalCard>
      </div>
    </div>
  );
}

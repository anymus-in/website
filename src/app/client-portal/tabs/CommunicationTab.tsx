"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { PortalCard, TabHeader } from "../components";

const initialUpdates = [
  {
    id: 1,
    author: "anymus Team",
    date: "Jun 16, 2026",
    message:
      "Automation workflows for order processing are now live in staging. Review link sent via email.",
  },
  {
    id: 2,
    author: "anymus Team",
    date: "Jun 9, 2026",
    message:
      "Training guide draft uploaded to Documents. Let us know if anything needs adjusting.",
  },
  {
    id: 3,
    author: "anymus Team",
    date: "May 19, 2026",
    message: "Discovery phase wrapped up. Summary document available in Documents tab.",
  },
];

export default function CommunicationTab() {
  const [updates, setUpdates] = useState(initialUpdates);
  const [draft, setDraft] = useState("");

  function handleSend() {
    if (!draft.trim()) return;
    setUpdates((prev) => [
      { id: Date.now(), author: "You", date: "Just now", message: draft.trim() },
      ...prev,
    ]);
    setDraft("");
  }

  return (
    <div>
      <TabHeader title="Messages" subtitle="Direct line to your anymus team." />

      <PortalCard className="p-3 sm:p-4 mb-5 sm:mb-6">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          rows={2}
          placeholder="Send a message to your anymus team..."
          className="focus-accent w-full bg-transparent text-[13px] sm:text-[14px] text-black placeholder:text-ink-400 outline-none resize-none mb-2"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSend}
            className="cta-lift focus-accent inline-flex items-center gap-1.5 bg-black text-white rounded-full px-4 py-2 text-[12px] sm:text-[13px] font-medium min-h-[36px]"
          >
            <Send className="w-3.5 h-3.5" />
            Send
          </button>
        </div>
      </PortalCard>

      <div className="space-y-3 sm:space-y-4">
        {updates.map((u) => (
          <PortalCard key={u.id} className="p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={
                  u.author === "You"
                    ? "w-6 h-6 rounded-full bg-[#18181B] shrink-0"
                    : "w-6 h-6 rounded-full bg-gradient-to-br from-grad-amber to-grad-blue shrink-0"
                }
              />
              <p className="text-[12px] sm:text-[13px] font-semibold text-black">{u.author}</p>
              <span className="text-[11px] text-ink-500">· {u.date}</span>
            </div>
            <p className="text-[13px] sm:text-[14px] text-ink-700 leading-relaxed">
              {u.message}
            </p>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Calendar, FileText, Play, Video } from "lucide-react";
import { PortalCard, TabHeader, Avatar, Badge } from "../components";

const upcoming = {
  title: "Bi-weekly sync — Build & Automate review",
  date: "Jun 23, 2026",
  time: "10:00 AM PST",
  attendees: ["Sarah Chen", "Marcus Yu", "Jane Cooper"],
};

const past = [
  {
    id: 1,
    title: "Kickoff & discovery review",
    date: "May 5, 2026",
    notes: "Aligned on scope, timeline, and success metrics. Recording and notes attached.",
    hasRecording: true,
  },
  {
    id: 2,
    title: "Process mapping walkthrough",
    date: "May 19, 2026",
    notes: "Walked through current-state workflows and identified automation candidates.",
    hasRecording: true,
  },
  {
    id: 3,
    title: "Build kickoff",
    date: "Jun 9, 2026",
    notes: "Reviewed system architecture and integration plan ahead of build phase.",
    hasRecording: false,
  },
];

export default function MeetingsTab() {
  return (
    <div>
      <TabHeader title="Meetings" subtitle="Scheduled calls, notes, and recordings." />

      {/* Upcoming + scheduler */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <PortalCard className="lg:col-span-2 p-5 sm:p-7">
          <Badge tint="bg-grad-blue/15" dot="bg-grad-blue">
            Upcoming
          </Badge>
          <p className="font-serif text-[18px] sm:text-[20px] text-black mt-3 mb-1">
            {upcoming.title}
          </p>
          <p className="text-[13px] text-ink-500 mb-4">
            {upcoming.date} · {upcoming.time}
          </p>
          <div className="flex items-center gap-2 mb-5">
            {upcoming.attendees.map((a) => (
              <Avatar key={a} name={a} size={28} />
            ))}
            <span className="text-[12px] text-ink-500 ml-1">
              {upcoming.attendees.length} attendees
            </span>
          </div>
          <button className="cta-lift focus-accent inline-flex items-center gap-1.5 bg-black text-white rounded-full px-4 py-2.5 text-[13px] font-medium min-h-[40px]">
            <Video className="w-3.5 h-3.5" />
            Join call
          </button>
        </PortalCard>

        <PortalCard className="p-5 sm:p-7 flex flex-col">
          <p className="text-[13px] font-semibold text-black mb-1.5">Need time on the calendar?</p>
          <p className="text-[12px] text-ink-500 mb-4 flex-1">
            Book a slot directly with your account lead — no back-and-forth emails.
          </p>
          <button className="focus-accent inline-flex items-center justify-center gap-1.5 border border-[#D4D4D1] text-black rounded-full px-4 py-2.5 text-[13px] font-medium hover:bg-[#F2F1ED] transition-colors min-h-[40px]">
            <Calendar className="w-3.5 h-3.5" />
            Schedule a call
          </button>
        </PortalCard>
      </div>

      {/* Past meetings */}
      <p className="text-[13px] font-semibold text-black mb-3">Past meetings</p>
      <PortalCard className="divide-y divide-[#E4E4E1] overflow-hidden">
        {past.map((m) => (
          <div key={m.id} className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-[13px] sm:text-[14px] font-medium text-black">{m.title}</p>
              </div>
              <p className="text-[11px] text-ink-500 mb-1.5">{m.date}</p>
              <p className="text-[12px] sm:text-[13px] text-ink-700 leading-snug max-w-[460px]">
                {m.notes}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {m.hasRecording && (
                <button className="focus-accent inline-flex items-center gap-1.5 text-[12px] font-medium text-accent-ink hover:underline">
                  <Play className="w-3.5 h-3.5" />
                  Recording
                </button>
              )}
              <button className="focus-accent inline-flex items-center gap-1.5 text-[12px] font-medium text-accent-ink hover:underline">
                <FileText className="w-3.5 h-3.5" />
                Notes
              </button>
            </div>
          </div>
        ))}
      </PortalCard>
    </div>
  );
}

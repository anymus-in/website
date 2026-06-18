"use client";

import { useState } from "react";
import { Check, History, MessageSquareWarning } from "lucide-react";
import { PortalCard, TabHeader, Badge } from "../components";

type Status = "Complete" | "In Review" | "In Progress" | "Upcoming";

type Deliverable = {
  id: string;
  name: string;
  status: Status;
  version: string;
  approval?: "approved" | "pending" | "changes";
};

const initial: Deliverable[] = [
  { id: "d1", name: "Process mapping workshop", status: "Complete", version: "v1.0", approval: "approved" },
  { id: "d2", name: "Discovery & requirements doc", status: "Complete", version: "v2.1", approval: "approved" },
  { id: "d3", name: "CRM data migration", status: "In Progress", version: "v1.0" },
  {
    id: "d4",
    name: "Automation workflow map (Phase 1)",
    status: "In Review",
    version: "v3.0",
    approval: "pending",
  },
  { id: "d5", name: "Team training sessions", status: "Upcoming", version: "—" },
  { id: "d6", name: "Go-live support", status: "Upcoming", version: "—" },
  { id: "d7", name: "Phase 2 scoping", status: "Upcoming", version: "—" },
];

const statusOrder: Status[] = ["Complete", "In Review", "In Progress", "Upcoming"];
const statusDot: Record<Status, string> = {
  Complete: "bg-grad-green",
  "In Review": "bg-grad-amber",
  "In Progress": "bg-grad-blue",
  Upcoming: "bg-[#D4D4D1]",
};
const statusTint: Record<Status, string> = {
  Complete: "bg-grad-green/20",
  "In Review": "bg-grad-amber/25",
  "In Progress": "bg-grad-blue/15",
  Upcoming: "bg-[#F2F1ED]",
};

export default function DeliverablesTab() {
  const [items, setItems] = useState(initial);
  const complete = items.filter((i) => i.status === "Complete").length;

  function approve(id: string) {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, approval: "approved", status: "Complete" } : i,
      ),
    );
  }

  function requestChanges(id: string) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, approval: "changes" } : i)),
    );
  }

  return (
    <div>
      <TabHeader
        title="Deliverables"
        subtitle={`${complete} of ${items.length} deliverables complete.`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-6">
        {statusOrder.map((status) => {
          const group = items.filter((i) => i.status === status);
          if (group.length === 0) return null;
          return (
            <div key={status}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${statusDot[status]}`} />
                <p className="text-[12px] sm:text-[13px] font-semibold text-black">{status}</p>
                <span className="text-[11px] text-ink-500">{group.length}</span>
              </div>
              <div className="space-y-2.5">
                {group.map((item) => (
                  <PortalCard key={item.id} className="p-3.5 sm:p-4">
                    <p className="text-[13px] text-black leading-snug mb-2">{item.name}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] text-ink-500">
                        <History className="w-3 h-3" />
                        {item.version}
                      </span>
                      {item.approval === "approved" && (
                        <Badge tint={statusTint.Complete}>
                          <Check className="w-3 h-3" />
                          Approved
                        </Badge>
                      )}
                      {item.approval === "changes" && (
                        <Badge tint="bg-[#E53935]/15">Changes requested</Badge>
                      )}
                    </div>
                    {item.approval === "pending" && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#E4E4E1]">
                        <button
                          onClick={() => approve(item.id)}
                          className="focus-accent flex-1 inline-flex items-center justify-center gap-1 bg-black text-white rounded-full px-3 py-1.5 text-[11px] font-medium"
                        >
                          <Check className="w-3 h-3" />
                          Approve
                        </button>
                        <button
                          onClick={() => requestChanges(item.id)}
                          className="focus-accent flex-1 inline-flex items-center justify-center gap-1 border border-[#D4D4D1] text-ink-700 rounded-full px-3 py-1.5 text-[11px] font-medium hover:bg-[#F2F1ED]"
                        >
                          <MessageSquareWarning className="w-3 h-3" />
                          Request changes
                        </button>
                      </div>
                    )}
                  </PortalCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

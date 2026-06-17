import { cn } from "@/lib/utils";
import { TabHeader } from "../components";

const milestones = [
  { date: "May 5, 2026", label: "Kickoff & Discovery", state: "done" },
  { date: "May 19, 2026", label: "Process Mapping Complete", state: "done" },
  { date: "Jun 9, 2026", label: "System Build Begins", state: "done" },
  { date: "Jun 23, 2026", label: "Automation Live", state: "active" },
  { date: "Jul 7, 2026", label: "Team Training", state: "upcoming" },
  { date: "Jul 14, 2026", label: "Go-Live", state: "upcoming" },
];

const doneCount = milestones.filter((m) => m.state === "done").length;

export default function TimelineTab() {
  return (
    <div>
      <TabHeader
        title="Timeline"
        subtitle={`${doneCount} of ${milestones.length} milestones complete.`}
      />
      <div>
        {milestones.map((m, i) => (
          <div key={m.label} className="flex gap-4 sm:gap-5">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "w-3 h-3 rounded-full shrink-0 mt-1.5",
                  m.state === "done"
                    ? "bg-grad-green"
                    : m.state === "active"
                      ? "bg-grad-blue"
                      : "border-2 border-[#D4D4D1] bg-white",
                )}
              />
              {i < milestones.length - 1 && (
                <span className="w-px flex-1 bg-[#E4E4E1] my-1" />
              )}
            </div>
            <div className="pb-6 sm:pb-7">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-[11px] sm:text-[12px] text-ink-500">{m.date}</p>
                {m.state === "active" && (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-grad-blue/15 text-ink-700">
                    In progress
                  </span>
                )}
              </div>
              <p className="text-[13px] sm:text-[14px] font-medium text-black">{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

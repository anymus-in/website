import { PortalCard, TabHeader } from "../components";

const columns = [
  {
    status: "Complete",
    dot: "bg-grad-green",
    items: ["Process mapping workshop", "Discovery & requirements doc"],
  },
  {
    status: "In Progress",
    dot: "bg-grad-blue",
    items: ["CRM data migration", "Automation workflows (Phase 1)"],
  },
  {
    status: "Upcoming",
    dot: "bg-[#D4D4D1]",
    items: ["Team training sessions", "Go-live support", "Phase 2 scoping"],
  },
];

export default function DeliverablesTab() {
  const total = columns.reduce((sum, c) => sum + c.items.length, 0);
  const complete = columns[0].items.length;

  return (
    <div>
      <TabHeader
        title="Deliverables"
        subtitle={`${complete} of ${total} deliverables complete.`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        {columns.map((col) => (
          <div key={col.status}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${col.dot}`} />
              <p className="text-[12px] sm:text-[13px] font-semibold text-black">{col.status}</p>
              <span className="text-[11px] text-ink-500">{col.items.length}</span>
            </div>
            <div className="space-y-2.5">
              {col.items.map((item) => (
                <PortalCard key={item} className="p-3.5 sm:p-4">
                  <p className="text-[13px] text-black leading-snug">{item}</p>
                </PortalCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

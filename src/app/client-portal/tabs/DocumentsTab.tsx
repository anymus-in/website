"use client";

import { useState } from "react";
import { FileText, Download, Search } from "lucide-react";
import { PortalCard, TabHeader, FilterPill } from "../components";

const categories = ["All", "Contracts", "Reports", "Guides"] as const;

const documents = [
  { name: "Master Services Agreement.pdf", date: "May 2, 2026", size: "480 KB", category: "Contracts" },
  { name: "Statement of Work: Phase 1.pdf", date: "May 5, 2026", size: "310 KB", category: "Contracts" },
  { name: "Discovery Summary.pdf", date: "Jun 2, 2026", size: "1.2 MB", category: "Reports" },
  { name: "System Architecture.pdf", date: "Jun 9, 2026", size: "3.4 MB", category: "Reports" },
  { name: "Training Guide.pdf", date: "Jun 16, 2026", size: "2.1 MB", category: "Guides" },
  { name: "Automation Workflow Map.pdf", date: "Jun 18, 2026", size: "1.8 MB", category: "Guides" },
];

export default function DocumentsTab() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = documents.filter((d) => {
    const matchesCategory = category === "All" || d.category === category;
    const matchesQuery = d.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <TabHeader title="Documents" subtitle="Files shared with you throughout the engagement." />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-5">
        <div className="relative flex-1 sm:max-w-[280px]">
          <Search className="w-3.5 h-3.5 text-ink-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents..."
            className="focus-accent w-full bg-white border border-[#D4D4D1] rounded-full pl-9 pr-4 py-2 text-[13px] text-black placeholder:text-ink-400 outline-none min-h-[40px]"
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {categories.map((c) => (
            <FilterPill key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </FilterPill>
          ))}
        </div>
      </div>

      <PortalCard className="divide-y divide-[#E4E4E1] overflow-hidden">
        {filtered.length === 0 ? (
          <p className="text-[13px] text-ink-500 px-5 sm:px-6 py-8 text-center">
            No documents match your search.
          </p>
        ) : (
          filtered.map((d) => (
            <div key={d.name} className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-9 h-9 rounded-lg bg-[#F2F1ED] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-ink-700" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] sm:text-[14px] font-medium text-black truncate">
                    {d.name}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-ink-500">
                    {d.category} · {d.date} · {d.size}
                  </p>
                </div>
              </div>
              <button className="focus-accent shrink-0 inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-accent-ink hover:underline">
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </div>
          ))
        )}
      </PortalCard>
    </div>
  );
}

"use client";

import { useState } from "react";
import { PortalCard, TabHeader, Badge, FilterPill } from "../components";

const invoices = [
  { id: "INV-1029", date: "Apr 1, 2026", amount: 4500, status: "Paid" },
  { id: "INV-1042", date: "May 1, 2026", amount: 4500, status: "Paid" },
  { id: "INV-1058", date: "Jun 1, 2026", amount: 4500, status: "Paid" },
  { id: "INV-1071", date: "Jul 1, 2026", amount: 4500, status: "Pending" },
];

const filters = ["All", "Paid", "Pending"] as const;

function formatCurrency(n: number) {
  return `$${n.toLocaleString()}`;
}

export default function InvoicesTab() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = invoices.filter((inv) => filter === "All" || inv.status === filter);
  const totalBilled = invoices.reduce((sum, i) => sum + i.amount, 0);
  const totalPaid = invoices
    .filter((i) => i.status === "Paid")
    .reduce((sum, i) => sum + i.amount, 0);
  const outstanding = totalBilled - totalPaid;

  return (
    <div>
      <TabHeader title="Invoices" subtitle="Billing history for this engagement." />

      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
        <PortalCard className="p-4 sm:p-5">
          <p className="text-[11px] sm:text-[12px] text-ink-500 mb-1.5">Total billed</p>
          <p className="font-serif text-[18px] sm:text-[22px] text-black">
            {formatCurrency(totalBilled)}
          </p>
        </PortalCard>
        <PortalCard className="p-4 sm:p-5">
          <p className="text-[11px] sm:text-[12px] text-ink-500 mb-1.5">Total paid</p>
          <p className="font-serif text-[18px] sm:text-[22px] text-black">
            {formatCurrency(totalPaid)}
          </p>
        </PortalCard>
        <PortalCard className="p-4 sm:p-5">
          <p className="text-[11px] sm:text-[12px] text-ink-500 mb-1.5">Outstanding</p>
          <p className="font-serif text-[18px] sm:text-[22px] text-black">
            {formatCurrency(outstanding)}
          </p>
        </PortalCard>
      </div>

      <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
        {filters.map((f) => (
          <FilterPill key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f}
          </FilterPill>
        ))}
      </div>

      <PortalCard className="overflow-hidden overflow-x-auto">
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b border-[#E4E4E1]">
              <th className="px-5 sm:px-6 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide">
                Invoice
              </th>
              <th className="px-3 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide">
                Date
              </th>
              <th className="px-3 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide">
                Amount
              </th>
              <th className="px-5 sm:px-6 py-3 text-[11px] sm:text-[12px] font-semibold text-ink-500 uppercase tracking-wide text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv) => (
              <tr key={inv.id} className="border-b border-[#E4E4E1] last:border-0">
                <td className="px-5 sm:px-6 py-4 text-[13px] sm:text-[14px] font-medium text-black">
                  {inv.id}
                </td>
                <td className="px-3 py-4 text-[13px] sm:text-[14px] text-ink-700">{inv.date}</td>
                <td className="px-3 py-4 text-[13px] sm:text-[14px] text-ink-700">
                  {formatCurrency(inv.amount)}
                </td>
                <td className="px-5 sm:px-6 py-4 text-right">
                  <Badge tint={inv.status === "Paid" ? "bg-grad-green/20" : "bg-grad-amber/25"}>
                    {inv.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PortalCard>
    </div>
  );
}

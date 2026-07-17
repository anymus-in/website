"use client";

import { PopIn, StampIn } from "@/components/sections/SpreadVisuals";

const SECTIONS = [
  { item: "Deliverables", note: "itemised, testable" },
  { item: "Milestones", note: "what unlocks payment" },
  { item: "Timeline", note: "dated, per milestone" },
  { item: "Payment schedule", note: "modular, on delivery" },
  { item: "Support period", note: "duration in writing" },
  { item: "Ownership", note: "yours, on handover" },
  { item: "Handover", note: "code, access, docs" },
];

/**
 * The proposal document, mocked as an artefact — every engagement term
 * visible as a signed line item, with the no-hidden-charges stamp. Used on
 * /how-we-work in the "Clarity, in writing" section.
 */
export default function ProposalDoc() {
  return (
    <figure className="reg-marks plate p-3 sm:p-5">
      <span aria-hidden className="reg reg-tl" />
      <span aria-hidden className="reg reg-tr" />
      <span aria-hidden className="reg reg-bl" />
      <span aria-hidden className="reg reg-br" />
      <div className="relative bg-white border rule overflow-hidden">
        {/* Document header */}
        <div className="border-b rule px-5 sm:px-7 pt-5 sm:pt-6 pb-4">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-inkwarm">
              Proposal &amp; scope of work
            </span>
            <span className="font-mono text-[8.5px] text-inkwarm-faint shrink-0">
              1 of 1 documents
            </span>
          </div>
          <p className="font-serif text-[15px] sm:text-[17px] text-inkwarm mt-2">
            Prepared for <span className="italic">your business</span> — within
            2–3 days of discovery
          </p>
        </div>

        {/* Defined line items */}
        <div className="px-5 sm:px-7 py-4 sm:py-5">
          {SECTIONS.map((s, i) => (
            <PopIn
              key={s.item}
              delay={0.15 + i * 0.09}
              className="flex items-baseline gap-3 border-b border-dashed border-hairline py-2.5 last:border-b-0"
            >
              <span className="font-mono text-[9px] text-mark shrink-0">
                {`§ ${String(i + 1).padStart(2, "0")}`}
              </span>
              <span className="font-serif text-[13.5px] sm:text-[15px] text-inkwarm">
                {s.item}
              </span>
              <span aria-hidden className="flex-1 border-b border-dotted border-hairline translate-y-[-3px]" />
              <span className="font-mono text-[8.5px] sm:text-[9px] text-inkwarm-faint shrink-0">
                {s.note}
              </span>
              <span className="font-mono text-[9px] text-live shrink-0">✓</span>
            </PopIn>
          ))}
        </div>

        {/* Signature row + stamp */}
        <div className="border-t rule px-5 sm:px-7 py-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-serif italic text-[15px] text-inkwarm/70 leading-none mb-1.5">
              Anymus
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-inkwarm-faint">
              Agreed before work begins
            </p>
          </div>
          <StampIn
            delay={0.9}
            rotate={-3}
            className="border-2 border-mark/70 rounded-[2px] px-3 py-1.5 bg-sheet-lift/80"
          >
            <span className="font-mono text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.14em] text-mark whitespace-nowrap">
              No hidden charges — ever
            </span>
          </StampIn>
        </div>
      </div>
    </figure>
  );
}

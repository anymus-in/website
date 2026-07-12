"use client";

import { useReducedMotion } from "framer-motion";
import { WindowChrome, PopIn } from "@/components/sections/SpreadVisuals";
import type { FlowStep } from "@/lib/solutions";

/**
 * Parameterized "run log" scene — the figure plate for solution and industry
 * pages. Same instrument-window language as the service SpreadVisuals, but
 * driven by per-page data so every page's figure shows its own flow.
 */
export default function SystemFlowVisual({
  label,
  steps,
  tally,
}: {
  /** WindowChrome caption, e.g. "Run log" or "A day on the system". */
  label: string;
  steps: FlowStep[];
  /** Bottom tally line: [left, right] — the right side renders in green. */
  tally: [string, string];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col bg-white">
      <WindowChrome label={label} />
      <div className="relative flex-1 p-4 sm:p-6 flex flex-col">
        <div className="flex items-baseline justify-between mb-4">
          <span className="font-mono text-[10px] text-inkwarm uppercase tracking-[0.14em]">
            System — live
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-live live-dot" aria-hidden />
            <span className="anno !text-[8px] !text-live">Running</span>
          </span>
        </div>

        {/* Run log */}
        <div className="relative">
          <div aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
          <div className="flex flex-col gap-2">
            {steps.map((s, i) => (
              <PopIn key={s.label} delay={0.2 + i * 0.22} className="relative pl-6">
                <span
                  aria-hidden
                  className={`absolute left-0 top-[8px] w-[11px] h-[11px] rounded-full border ${
                    s.state === "done"
                      ? "bg-live/80 border-live"
                      : s.state === "run"
                        ? "bg-mark border-mark"
                        : "bg-sheet border-hairline-strong"
                  } ${s.state === "run" && !reduce ? "live-dot" : ""}`}
                />
                <div
                  className={`flex items-baseline justify-between gap-2 border rounded-[2px] px-2.5 py-2 ${
                    s.state === "run"
                      ? "border-mark bg-sheet-lift"
                      : "rule bg-sheet-lift/50"
                  }`}
                >
                  <span className="font-mono text-[9px] sm:text-[10px] text-inkwarm-soft truncate">
                    {s.label}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[8.5px] text-inkwarm-faint shrink-0">
                    {s.meta}
                  </span>
                </div>
              </PopIn>
            ))}
          </div>
        </div>

        {/* Tally */}
        <div className="border-t rule mt-4 pt-2.5 flex items-baseline justify-between gap-3">
          <span className="font-mono text-[8.5px] sm:text-[9px] text-inkwarm-faint truncate">
            {tally[0]}
          </span>
          <span className="font-mono text-[8.5px] sm:text-[9px] text-live shrink-0">
            {tally[1]}
          </span>
        </div>
      </div>
    </div>
  );
}

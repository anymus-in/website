"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { WindowChrome, PopIn } from "@/components/sections/SpreadVisuals";
import { Timeline, TimelineDot } from "@/components/motion/Timeline";
import CountUp from "@/components/motion/CountUp";
import type { FlowStep } from "@/lib/solutions";

/** Renders a tally string, counting up the number inside it (if any). */
function TallyText({ text, className }: { text: string; className: string }) {
  const m = text.match(/^(.*?)(\d+)([^\d]*)$/);
  if (!m) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
      {m[1]}
      <CountUp to={parseInt(m[2], 10)} />
      {m[3]}
    </span>
  );
}

/**
 * Parameterized "run log" scene — the figure plate for solution and industry
 * pages. Same instrument-window language as the service SpreadVisuals, but
 * driven by per-page data so every page's figure shows its own flow.
 * The ↻ control remounts the log so the sequence runs again.
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
  const [run, setRun] = useState(0);

  return (
    <div className="flex flex-col bg-white">
      <WindowChrome label={label} />
      <div className="relative flex-1 p-4 sm:p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] text-inkwarm uppercase tracking-[0.14em]">
            System — live
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-live live-dot" aria-hidden />
              <span className="anno !text-[8px] !text-live">Running</span>
            </span>
            {!reduce && (
              <button
                type="button"
                onClick={() => setRun((r) => r + 1)}
                aria-label="Replay the run log"
                className="font-mono text-[12px] text-inkwarm-faint hover:text-mark transition-colors p-3 -my-3 -mr-2 focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-0"
              >
                ↻
              </button>
            )}
          </span>
        </div>

        {/* Run log — keyed so ↻ replays the entrance sequence */}
        <div key={run}>
          <Timeline>
            <div className="flex flex-col gap-2">
              {steps.map((s, i) => (
                <PopIn key={s.label} delay={0.2 + i * 0.22} className="relative pl-6">
                  <TimelineDot state={s.state} />
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
          </Timeline>

          {/* Tally */}
          <div className="border-t rule mt-4 pt-2.5 flex items-baseline justify-between gap-3">
            <TallyText
              text={tally[0]}
              className="font-mono text-[8.5px] sm:text-[9px] text-inkwarm-faint truncate"
            />
            <TallyText
              text={tally[1]}
              className="font-mono text-[8.5px] sm:text-[9px] text-live shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

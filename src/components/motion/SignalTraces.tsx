"use client";

import { useReducedMotion } from "framer-motion";

const PATHS = [
  "M -20 240 C 180 240, 240 80, 470 80 S 760 300, 1000 300 S 1180 140, 1240 140",
  "M -20 90 C 220 90, 320 330, 610 330 S 900 60, 1240 60",
  "M -20 350 C 300 350, 420 180, 720 180 S 1000 380, 1240 380",
];

/**
 * Ambient automation layer — faint circuit traces with signal pulses
 * travelling along them. Decorative only; pulses pause for reduced motion.
 */
export default function SignalTraces({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const stroke = dark ? "rgba(244,241,232,0.13)" : "rgba(28,24,18,0.14)";
  const node = dark ? "rgba(244,241,232,0.25)" : "rgba(28,24,18,0.28)";

  return (
    <svg
      aria-hidden
      viewBox="0 0 1220 440"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className ?? ""}`}
    >
      {PATHS.map((d, i) => (
        <g key={i}>
          <path
            d={d}
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            strokeDasharray="3 7"
          />
          {/* Junction nodes along the trace */}
          <circle r="2.5" fill="none" stroke={node} strokeWidth="1">
            <animateMotion
              dur="0.01s"
              fill="freeze"
              keyPoints={`${0.3 + i * 0.18};${0.3 + i * 0.18}`}
              keyTimes="0;1"
              path={d}
            />
          </circle>
          {/* The signal */}
          {!reduce && (
            <circle r="3" fill="var(--color-mark)">
              <animateMotion
                dur={`${7 + i * 2.5}s`}
                begin={`${i * 1.8}s`}
                repeatCount="indefinite"
                path={d}
              />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
}

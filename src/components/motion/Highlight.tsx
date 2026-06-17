"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Hand-sketched felt-tip underline beneath a key word/phrase — two thin
 * tapered pen strokes, as if drawn twice in one quick motion: a slightly
 * thicker stroke closer to the text, and a very thin stroke further
 * below it. Each stroke tapers thin-thick-thin with jittery straight
 * edges, not a smooth highlighter band. Animates in once scrolled into
 * view; respects reduced-motion.
 */
export default function Highlight({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  const reduce = useReducedMotion();
  const gradientId = useId();

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 200 24"
        preserveAspectRatio="none"
        className="absolute -inset-x-[3%] bottom-[-0.06em] h-[0.42em] pointer-events-none"
        style={{ transformOrigin: "0% 50%" }}
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
      >
        <defs>
          <linearGradient id={`${gradientId}-a`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0.45" />
            <stop offset="6%" stopColor={color} stopOpacity="0.75" />
            <stop offset="50%" stopColor={color} stopOpacity="0.9" />
            <stop offset="94%" stopColor={color} stopOpacity="0.75" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`${gradientId}-b`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="6%" stopColor={color} stopOpacity="0.55" />
            <stop offset="50%" stopColor={color} stopOpacity="0.68" />
            <stop offset="94%" stopColor={color} stopOpacity="0.55" />
            <stop offset="100%" stopColor={color} stopOpacity="0.28" />
          </linearGradient>
        </defs>
        {/* Stroke 1 — thicker, closer to the text */}
        <path
          d="M2,7.05 L16,6.35 L32,6.15 L50,5.4 L68,4.9 L86,3.9 L100,3.75 L114,4.2 L132,4.95 L150,5.8 L168,6.35 L184,6.8 L198,7.15
             L198,8.05 L184,8.4 L168,8.95 L150,9.6 L132,10.35 L114,10.8 L100,11.15 L86,10.7 L68,10.1 L50,9.2 L32,8.75 L16,8.15 L2,8.05 Z"
          fill={`url(#${gradientId}-a)`}
        />
        {/* Stroke 2 — thinner, further below */}
        <path
          d="M2,17.0 L16,16.5 L32,16.15 L50,15.55 L68,15.15 L86,14.5 L100,14.4 L114,14.75 L132,15.35 L150,15.9 L168,16.4 L184,16.8 L198,17.05
             L198,17.75 L184,18.0 L168,18.4 L150,18.9 L132,19.35 L114,19.75 L100,20.0 L86,19.7 L68,19.35 L50,18.75 L32,18.35 L16,17.9 L2,17.8 Z"
          fill={`url(#${gradientId}-b)`}
        />
      </motion.svg>
    </span>
  );
}

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const lineVariants: Variants = {
  hidden: { y: "112%" },
  show: (delay: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

/**
 * Editorial masked headline reveal — each line rises out of an
 * overflow-hidden clip with a heavy-ease stagger. Pass one child per line.
 *
 * The in-view trigger lives on the (untranslated) container: the clipped
 * lines themselves are invisible to IntersectionObserver while hidden.
 */
export default function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  as = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  /** Applied to each line wrapper (use for per-line indents). */
  lineClassName?: string | ((index: number) => string | undefined);
  delay?: number;
  as?: "h1" | "h2" | "p" | "div";
}) {
  const reduce = useReducedMotion();
  const lineClass = (i: number) =>
    typeof lineClassName === "function" ? lineClassName(i) : lineClassName;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className}>
        {lines.map((l, i) => (
          <span key={i} className={`block ${lineClass(i) ?? ""}`}>
            {l}
          </span>
        ))}
      </Tag>
    );
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {lines.map((l, i) => (
        <span key={i} className={`block overflow-hidden ${lineClass(i) ?? ""}`}>
          <motion.span
            className="block will-change-transform"
            variants={lineVariants}
            custom={delay + i * 0.09}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

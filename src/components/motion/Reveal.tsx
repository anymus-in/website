"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** translateY distance in px before reveal */
  y?: number;
  /** seconds to delay the animation */
  delay?: number;
  /** how much of the element must be visible to fire (0-1) */
  amount?: number;
  as?: "div" | "section" | "span" | "li";
}

/**
 * Scroll-triggered fade + rise. Fires once when scrolled into view.
 * Falls back to a plain, fully-visible element when the user prefers
 * reduced motion (content is never permanently hidden).
 */
export default function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — direct <RevealItem> children animate in sequence.
 * Use for lists (feature bullets, bento cards, FAQ rows).
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const item: Variants = {
    hidden: { opacity: 0, y, filter: "blur(5px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

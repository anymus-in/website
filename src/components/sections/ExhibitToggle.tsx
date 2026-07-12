"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The before/after spread on solution pages. On lg+ both exhibits sit side
 * by side (untouched). Below lg they become a two-tab flip — Exhibit A
 * (manual) first, so revealing the system is the reader's own action.
 */
export default function ExhibitToggle({
  a,
  b,
}: {
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  const [tab, setTab] = useState<"a" | "b">("a");
  const reduce = useReducedMotion();

  const tabs = [
    { id: "a" as const, label: "Exhibit A — manual" },
    { id: "b" as const, label: "Exhibit B — the system" },
  ];

  return (
    <>
      {/* Desktop — the classic side-by-side spread */}
      <div className="hidden lg:grid grid-cols-2 gap-6">
        <div>{a}</div>
        <div>{b}</div>
      </div>

      {/* Mobile/tablet — tabbed flip */}
      <div className="lg:hidden">
        <div
          role="tablist"
          aria-label="Before and after"
          className="grid grid-cols-2 border rule rounded-[2px] overflow-hidden mb-4 bg-sheet-lift"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "min-h-11 px-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-mark focus-visible:-outline-offset-2",
                tab === t.id
                  ? "bg-mark text-sheet"
                  : "text-inkwarm-soft hover:text-inkwarm",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === "a" ? a : b}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const CHAPTERS = [
  { id: "top", num: "00", label: "Index" },
  { id: "index", num: "01", label: "Services" },
  { id: "principles", num: "02", label: "Principles" },
  { id: "process", num: "03", label: "Build" },
  { id: "start", num: "04", label: "Start" },
];

/**
 * The document's spine — a fixed left rail (xl+) marking which chapter
 * of the page you're reading, with a red thread that fills as you scroll.
 */
export default function ChapterRail() {
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = CHAPTERS.findIndex((c) => c.id === e.target.id);
            if (i !== -1) setActive(i);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const dark = active >= 4;

  return (
    <nav
      aria-label="Page chapters"
      className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4"
    >
      <div className="relative h-[72px] w-px bg-hairline overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-full bg-mark origin-top"
          style={{ scaleY: progress, height: "100%" }}
        />
      </div>
      {CHAPTERS.map((c, i) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          title={c.label}
          aria-label={`Chapter ${c.num} — ${c.label}`}
          aria-current={active === i ? "true" : undefined}
          className={`font-mono text-[9px] tracking-[0.14em] transition-all duration-300 ${
            active === i
              ? "text-mark scale-110"
              : dark
                ? "text-sheet/40 hover:text-sheet/70"
                : "text-inkwarm-faint hover:text-inkwarm"
          }`}
        >
          {c.num}
        </a>
      ))}
    </nav>
  );
}

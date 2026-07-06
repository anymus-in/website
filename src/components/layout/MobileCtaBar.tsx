"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Mobile-only sticky CTA — slides in once the hero's own CTA has scrolled
 * away, and stands down while the closing CTA section is on screen.
 */
export default function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("top");
    const closing = document.getElementById("start");
    if (!hero) return;

    const heroObs = new IntersectionObserver(
      ([e]) => setPastHero(!e.isIntersecting),
      { rootMargin: "-25% 0px 0px 0px" },
    );
    heroObs.observe(hero);

    let endObs: IntersectionObserver | undefined;
    if (closing) {
      endObs = new IntersectionObserver(([e]) => setNearEnd(e.isIntersecting));
      endObs.observe(closing);
    }
    return () => {
      heroObs.disconnect();
      endObs?.disconnect();
    };
  }, []);

  const show = pastHero && !nearEnd;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 72, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 72, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t rule bg-sheet/95 backdrop-blur-sm px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))]"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="anno !text-[11px] shrink min-w-0 truncate">
              <span className="text-mark">✳</span> Free 30-min call
            </span>
            <a
              href="/schedule-call"
              className="btn-stamp px-5 py-3 text-[14px] font-medium tracking-[-0.01em] shrink-0"
            >
              Start a project
              <span aria-hidden className="font-mono text-[12px]">→</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

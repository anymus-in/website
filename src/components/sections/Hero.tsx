"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/* A hand-drawn red pencil stroke that draws itself under a word */
function PencilStroke({ delay = 0.9 }: { delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className="absolute left-[-3%] bottom-[-0.06em] w-[106%] h-[0.13em] pointer-events-none"
    >
      <motion.path
        d="M2 6.5 C 22 3.5, 44 8, 63 5.5 S 90 4, 98 6"
        fill="none"
        stroke="var(--color-mark)"
        strokeWidth="2.6"
        strokeLinecap="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.55, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

/* ── Hero — calm centered stack over the real product ── */

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative lg:max-h-screen overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-[calc(104px+env(safe-area-inset-top))] sm:pt-[calc(132px+env(safe-area-inset-top))] flex flex-col items-center text-center">
        <motion.h1
          {...rise(0.1)}
          className="font-serif font-light text-[clamp(38px,7.5vw,92px)] leading-[1.05] tracking-[-0.03em] text-inkwarm max-w-[16ch]"
        >
          We build the system your business{" "}
          <span className="relative inline-block">
            <span className="italic">runs</span>
            <PencilStroke />
          </span>{" "}
          on.
        </motion.h1>

        <motion.p
          {...rise(0.25)}
          className="mt-6 sm:mt-7 text-[15px] sm:text-[17px] text-inkwarm-soft leading-relaxed max-w-[560px]"
        >
          One connected system — websites, automation, internal tools — built
          around what you already use.
        </motion.p>

        <motion.div
          {...rise(0.4)}
          className="mt-8 sm:mt-9 flex flex-col items-center gap-4"
        >
          <a
            href="/schedule-call"
            className="btn-stamp px-7 py-4 text-[15px] font-medium tracking-[-0.01em]"
          >
            Book a discovery call
            <span aria-hidden className="font-mono text-[12px]">→</span>
          </a>
          <p className="anno !text-[11px] sm:!text-[10px]">
            <span className="text-mark">✳</span> Free 30-min call · no lock-in
            · 24h reply
          </p>
        </motion.div>
      </div>

      {/* The real product — cropped by the fold on tall viewports */}
      <motion.div
        {...rise(0.55)}
        className="relative max-w-[1140px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16"
      >
        <div className="rounded-[8px] border rule shadow-[var(--shadow-card)] overflow-hidden bg-white">
          <Image
            src="/images/mockup.png"
            alt="The Anymus workspace — enquiries, customers, automations, and pipeline in one dashboard"
            width={3600}
            height={2078}
            priority
            sizes="(min-width: 1140px) 1076px, 92vw"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

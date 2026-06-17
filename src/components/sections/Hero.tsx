"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/* Spline is heavy (3D runtime) — load client-only with a gradient fallback */
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

function SplineFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(50% 70% at 22% 60%, rgba(245,194,107,0.55), transparent 70%), radial-gradient(45% 70% at 70% 50%, rgba(59,130,246,0.45), transparent 70%)",
        filter: "blur(10px)",
      }}
    />
  );
}

/* anymus equalizer glyph (matches navbar logo) */
function EqualizerGlyph({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 26 22"
      fill="none"
      className={className}
    >
      <rect
        x="0"
        y="6"
        width="4"
        height="10"
        rx="2"
        fill="currentColor"
        opacity="0.9"
      />
      <rect x="6" y="2" width="4" height="18" rx="2" fill="currentColor" />
      <rect x="12" y="0" width="4" height="22" rx="2" fill="currentColor" />
      <rect
        x="18"
        y="4"
        width="4"
        height="14"
        rx="2"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="24"
        y="8"
        width="2"
        height="8"
        rx="1"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const line = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Text content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 max-w-5xl mx-auto"
      >
        <motion.h1
          variants={line}
          className="font-serif font-light text-[clamp(32px,6.4vw,78px)] leading-[1.04] tracking-[-1px] text-black mb-4 sm:mb-6"
        >
          A dedicated guide for
          <br />
          every buyer
        </motion.h1>
        <motion.p variants={line} className="text-[15px] sm:text-[16px] md:text-[17px] text-[#3F3F46] mb-6 sm:mb-8 max-w-xl">
          AI agents running tailored demos &amp; onboarding 24/7
        </motion.p>
        <motion.a
          variants={line}
          href="#demo"
          className="cta-lift inline-flex items-center gap-2 bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
        >
          <EqualizerGlyph />
          See AI demo
        </motion.a>
      </motion.div>

      {/* Spline flowing ribbon — the centerpiece */}
      <div className="relative w-full -mt-2 sm:-mt-4" style={{ minHeight: "300px", height: "clamp(300px, 50vw, 560px)" }}>
        <div className="absolute inset-0" style={{ opacity: 1 }}>
          <Spline scene="https://prod.spline.design/F-nKRrS5AnCe0xod/scene.splinecode" />
        </div>
        {/* Cover the "Built with Spline" watermark */}
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-white z-10" />
      </div>

      {/* Floating "Ask me anything" launcher */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[min(420px,90vw)]"
      >
        <div className="flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-xl border border-[#E4E4E1] rounded-full pl-4 sm:pl-5 pr-2 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="focus-accent rounded-full flex-1 min-w-0 bg-transparent text-xs sm:text-sm text-black placeholder:text-[#A1A1AA] outline-none"
          />
          <button
            aria-label="Send"
            className="cta-lift shrink-0 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-[#F2F1ED] hover:bg-[#E4E4E1] flex items-center justify-center min-h-[44px] min-w-[44px]"
          >
            <ArrowUp className="w-4 h-4 text-[#3F3F46]" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

export default function CtaBand() {
  return (
    <section className="relative bg-white overflow-hidden dot-grid py-20 sm:py-28 md:py-[140px]">
      {/* Aurora glows */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {/* Primary center blob */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[400px] sm:w-[520px] md:w-[640px] h-[224px] sm:h-[290px] md:h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(245,194,107,0.32), transparent 70%), radial-gradient(closest-side, rgba(59,130,246,0.22), transparent 70%)",
            filter: "blur(55px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary offset blob */}
        <motion.div
          className="absolute left-[30%] top-[40%] w-[240px] sm:w-[320px] h-[160px] sm:h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(63,191,127,0.18), transparent 70%)",
            filter: "blur(45px)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Centered text + CTA */}
      <Reveal className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em] text-black mb-6 sm:mb-8 max-w-[420px]">
          Give a{" "}
          white glove{" "}
          experience to every prospect
        </h2>
        <a
          href="#"
          className="cta-lift inline-flex items-center bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
        >
          Let&apos;s talk
        </a>
        <p className="text-[13px] text-[#A1A1AA] mt-3">
          No credit card required · Setup in minutes
        </p>
      </Reveal>
    </section>
  );
}

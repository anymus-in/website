"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

export default function CtaBand() {
  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop: 140, paddingBottom: 140 }}>
      {/* Soft aurora glow */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 w-[640px] h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(245,194,107,0.30), transparent 70%), radial-gradient(closest-side, rgba(59,130,246,0.20), transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Centered text + CTA */}
      <Reveal className="relative z-10 flex flex-col items-center text-center px-8">
        <h2 className="font-serif text-[36px] leading-[1.12] tracking-[-0.02em] text-black mb-8 max-w-[420px]">
          Give a white glove experience to every prospect
        </h2>
        <a
          href="#"
          className="cta-lift inline-flex items-center bg-black text-white rounded-full px-7 py-3.5 text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)]"
        >
          Let&apos;s talk
        </a>
      </Reveal>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

/** A photographic breather between chapters — one image, one line. */
export default function Interlude() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[64vh] sm:h-[78vh] overflow-hidden">
      {/* Photo, drifting slower than the page */}
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-[-10%_0]"
      >
        <Image
          src="/images/counter.jpg"
          alt="A small business front desk — a customer being served on a connected point-of-sale system"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Warm ink wash so the photo sits in the palette */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-inkwarm/75 via-inkwarm/15 to-inkwarm/25"
      />

      {/* Caption block */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-10 sm:pb-14">
          <Reveal>
            <p className="anno !text-sheet/70 mb-4">The businesses we build for</p>
            <p className="font-serif font-light text-[clamp(24px,4vw,44px)] leading-[1.12] tracking-[-0.015em] text-sheet max-w-[720px]">
              Shops, factories, clinics, agencies —{" "}
              <span className="italic">
                companies that outgrew their spreadsheets.
              </span>
            </p>
          </Reveal>
        </div>
        <div className="border-t border-sheet/25">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-3 flex items-baseline justify-between">
            <span className="anno !text-sheet/50">Fig. 05 — A system, in use</span>
            <span className="anno !text-sheet/50 hidden sm:block">
              Every day, without being asked
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

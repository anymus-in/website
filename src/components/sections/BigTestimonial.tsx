"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const testimonials = [
  {
    quote:
      "Our demo agent helps leads quickly validate whether Parcel Tracker is the right fit for them, so when they appear in our CRM, our sales team has the context required to bring them over the line.",
    name: "Arthur Zargaryan",
    role: "CEO at Parcel Tracker",
  },
  {
    quote:
      "Our sales reps are less occupied with bad fit leads, creating extra capacity for outbound, and anymus's agent has been super useful for coverage outside of regular business hours.",
    name: "Alasdair Reynolds",
    role: "Head of Growth at Parim",
  },
];

export default function BigTestimonial() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="bg-gradient-to-b from-[#FAFAF8] to-white">
      <Reveal className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-10 md:pb-14">
        <p className="eyebrow mb-6 sm:mb-8">What our customers say about us</p>

        {/* Blockquote with decorative open-quote */}
        <div className="relative">
          <span
            className="absolute -top-4 -left-2 font-serif text-[120px] leading-none text-[#F2F1ED] select-none pointer-events-none"
            aria-hidden
          >
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative font-serif text-[24px] sm:text-[32px] md:text-[40px] leading-[1.12] tracking-tight text-black mb-8 sm:mb-10 max-w-5xl"
            >
              {t.quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E8E8E8] overflow-hidden shrink-0 flex items-center justify-center ring-2 ring-[#F5C26B]/40 ring-offset-2">
              <svg viewBox="0 0 36 36" fill="#A1A1AA" className="w-full h-full">
                <circle cx="18" cy="13" r="7" />
                <ellipse cx="18" cy="30" rx="13" ry="8" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-black">{t.name}</p>
              <p className="text-[13px] text-[#52525B]">{t.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-[#E4E4E1] flex items-center justify-center hover:bg-[#F2F1ED] transition-colors min-h-[44px] min-w-[44px]"
            >
              <ChevronLeft className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-[#E4E4E1] flex items-center justify-center hover:bg-[#F2F1ED] transition-colors min-h-[44px] min-w-[44px]"
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </Reveal>
      <div className="border-t border-[#E4E4E1]" />
    </section>
  );
}

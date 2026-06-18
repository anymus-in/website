"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#EFEEED]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Reveal>
          <h2 className="eyebrow mb-6 sm:mb-8">Frequently Asked Questions</h2>
        </Reveal>

        <RevealGroup stagger={0.04}>
          {faqs.map((faq, i) => (
            <RevealItem key={i} className="border-t border-[#E4E4E1]">
              <button
                className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <h3 className="font-serif font-normal text-[16px] sm:text-[18px] md:text-[20px] text-black group-hover:opacity-70 transition-opacity pr-4 sm:pr-8 flex-1">
                  {faq.question}
                </h3>
                <span
                  className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors min-h-[44px] min-w-[44px]",
                    open === i
                      ? "bg-[#F0A23C]/12 border-[#F0A23C]/50"
                      : "bg-[#F2F1ED] border-[#D4D4D1]",
                  )}
                >
                  {open === i ? (
                    <Minus className="w-4 h-4 text-accent-ink" />
                  ) : (
                    <Plus className="w-4 h-4 text-black" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed max-w-2xl pb-4 sm:pb-5 border-l-2 border-[#F0A23C] pl-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </RevealItem>
          ))}
          <div className="border-t border-[#E4E4E1]" />
        </RevealGroup>
      </div>
    </section>
  );
}

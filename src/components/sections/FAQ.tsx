"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does an implementation take?",
    answer:
      "Most engagements run 4-12 weeks depending on scope — we'll give you a clear timeline after the discovery call, not a generic estimate.",
  },
  {
    question: "Which ERP and CRM platforms do you work with?",
    answer:
      "We work with the major ERP and CRM platforms used by growing businesses — the right fit depends on your existing setup. Book a call and we'll scope it with you directly.",
  },
  {
    question: "Do you build custom systems or use existing platforms?",
    answer:
      "Both — we configure proven platforms where they fit your business, and build custom where they don't.",
  },
  {
    question: "What does the automation actually connect?",
    answer:
      "Whatever's currently manual between your tools — data entry, approvals, handoffs, status updates — replaced with workflows that run on their own, triggered by activity in your systems.",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes — training is part of every engagement, not an afterthought. Your team learns the system hands-on before launch.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay involved for support and iteration. Systems evolve as your business does, and we're around for that.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Project-based and scoped after discovery — no surprise hourly billing or vague monthly retainers.",
  },
  {
    question: "Do I need to replace my existing tools?",
    answer:
      "Not necessarily. We often integrate what's already working before replacing anything.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#EFEEED]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Reveal>
          <p className="eyebrow mb-6 sm:mb-8">Frequently Asked Questions</p>
        </Reveal>

        <RevealGroup stagger={0.06}>
          {faqs.map((faq, i) => (
            <RevealItem key={i} className="border-t border-[#E4E4E1]">
              <button
                className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-serif text-[16px] sm:text-[18px] md:text-[20px] text-black group-hover:opacity-70 transition-opacity pr-4 sm:pr-8 flex-1">
                  {faq.question}
                </span>
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

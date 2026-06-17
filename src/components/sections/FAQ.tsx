"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does it take to set up?",
    answer:
      "Your first version is ready in minutes. You link your website and knowledge base, anymus generates the agent, and you can go live in 1-3 days after refining your messaging.",
  },
  {
    question: "How do my agents stay up to date?",
    answer:
      "anymus continuously scrapes your website and syncs with connected integrations like Intercom to keep your agents' knowledge current automatically.",
  },
  {
    question: "How are the sessions personalised?",
    answer:
      "Agents retain memory within a session and adapt responses based on what each visitor has shared — their role, use case, and questions — to give every prospect a tailored experience.",
  },
  {
    question: "What languages does anymus support?",
    answer:
      "anymus supports 50+ languages out of the box. Agents automatically detect and respond in the visitor's language.",
  },
  {
    question: "What kind of analytics are available?",
    answer:
      "You get full visibility into visitor sessions — questions asked, qualification signals, drop-off points, and lead quality data — all surfaced in the anymus dashboard.",
  },
  {
    question: "Is the agent able to show my actual product interface?",
    answer:
      "Yes. The demo agent can navigate inside your live product UI and walk prospects through real workflows in real time.",
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
                    <Minus className="w-4 h-4 text-[#C97A1C]" />
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

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ChatPlayer, { type ChatMessage } from "@/components/motion/ChatPlayer";
import Reveal from "@/components/motion/Reveal";

const demoChat: ChatMessage[] = [
  { from: "agent", text: "Want a 2-minute walkthrough of how anymus works?" },
  { from: "user", text: "Yes — show me the demo agent." },
  {
    from: "agent",
    text: "On it. I'll navigate your live product and narrate as we go.",
  },
];

const orbs = [
  {
    cls: "top-10 left-12 w-12 h-12",
    bg: "radial-gradient(circle at 40% 35%, #F8E8D0, #F0C890 60%, #D8C8E8)",
    o: 0.85,
    dur: 7,
  },
  {
    cls: "top-16 right-20 w-9 h-9",
    bg: "radial-gradient(circle at 40% 35%, #EAE4F4, #DDD0F0)",
    o: 0.80,
    dur: 9,
  },
  {
    cls: "bottom-16 right-28 w-14 h-14",
    bg: "radial-gradient(circle at 40% 35%, #F8E8D0, #F0C890)",
    o: 0.75,
    dur: 8,
  },
  {
    cls: "bottom-12 left-20 w-8 h-8",
    bg: "radial-gradient(circle at 40% 35%, #DDD0F0, #C8B8E0)",
    o: 0.70,
    dur: 6,
  },
];

export default function DemoBand() {
  return (
    <section id="demo" className="bg-white py-4 sm:py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1232px] mx-auto">
        <Reveal>
          <div
            className="relative rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-14 py-8 sm:py-10 md:py-12 border border-black/[0.06]"
            style={{
              background: "var(--gradient-hero-bg), #F2F1ED",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Floating orbs — hidden on mobile */}
            <div className="hidden md:block">
              {orbs.map((orb, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${orb.cls} rounded-full pointer-events-none`}
                  style={{ background: orb.bg, opacity: orb.o }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Left: copy + CTA */}
            <div className="relative z-10 max-w-[400px]">
              <p className="eyebrow mb-2 sm:mb-3">AI Demo</p>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[34px] tracking-[-0.02em] text-black leading-[1.1] mb-2 sm:mb-3">
                See anymus in action
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#52525B] mb-5 sm:mb-7 leading-relaxed">
                Let our agent walk you through the product — live, personalised,
                and answering as you go.
              </p>
              <a
                href="#"
                className="cta-lift inline-flex items-center gap-2 bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
              >
                <Sparkles className="w-4 h-4" />
                Start demo
              </a>
            </div>

            {/* Right: live chat preview with browser chrome */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 justify-self-center lg:justify-self-end w-[min(360px,90vw)]"
            >
              <div
                className="glass rounded-[16px] sm:rounded-[20px] overflow-hidden"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                {/* Browser chrome header */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F2F1ED]/80 border-b border-black/[0.05]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3FBF7F]" />
                    <span className="text-[10px] text-[#71717A] font-medium tracking-wide">Demo agent</span>
                  </span>
                </div>
                <div className="p-3 sm:p-4 h-[260px] overflow-hidden flex flex-col justify-end">
                  <ChatPlayer messages={demoChat} />
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

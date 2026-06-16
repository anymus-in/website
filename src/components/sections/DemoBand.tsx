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
    cls: "top-10 left-12 w-9 h-9",
    bg: "radial-gradient(circle at 40% 35%, #F8E8D0, #F0C890 60%, #D8C8E8)",
    o: 0.7,
    dur: 7,
  },
  {
    cls: "top-16 right-20 w-7 h-7",
    bg: "radial-gradient(circle at 40% 35%, #EAE4F4, #DDD0F0)",
    o: 0.65,
    dur: 9,
  },
  {
    cls: "bottom-16 right-28 w-11 h-11",
    bg: "radial-gradient(circle at 40% 35%, #F8E8D0, #F0C890)",
    o: 0.6,
    dur: 8,
  },
  {
    cls: "bottom-12 left-20 w-6 h-6",
    bg: "radial-gradient(circle at 40% 35%, #DDD0F0, #C8B8E0)",
    o: 0.55,
    dur: 6,
  },
];

export default function DemoBand() {
  return (
    <section id="demo" className="bg-white py-6 px-8">
      <div className="max-w-[1232px] mx-auto">
        <Reveal>
          <div
            className="relative rounded-[28px] overflow-hidden grid lg:grid-cols-2 items-center gap-8 px-8 py-12 lg:px-14 border border-black/[0.06]"
            style={{
              background: "#F2F1ED",
              minHeight: 440,
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Floating orbs */}
            {orbs.map((orb, i) => (
              <motion.div
                key={i}
                className={`absolute ${orb.cls} rounded-full pointer-events-none`}
                style={{ background: orb.bg, opacity: orb.o }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: orb.dur,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Left: copy + CTA */}
            <div className="relative z-10 max-w-[400px]">
              <p className="eyebrow mb-3">AI Demo</p>
              <h2 className="font-serif text-[34px] tracking-[-0.02em] text-black leading-[1.1] mb-3">
                See anymus in action
              </h2>
              <p className="text-[15px] text-[#52525B] mb-7 leading-relaxed">
                Let our agent walk you through the product — live, personalised,
                and answering as you go.
              </p>
              <a
                href="#"
                className="cta-lift inline-flex items-center gap-2 bg-black text-white rounded-full px-7 py-3.5 text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)]"
              >
                <Sparkles className="w-4 h-4" />
                Start demo
              </a>
            </div>

            {/* Right: live chat preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 justify-self-center lg:justify-self-end w-[min(360px,92%)]"
            >
              <div
                className="rounded-[20px] bg-white/75 backdrop-blur-xl border border-black/[0.05] p-4"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex items-center gap-2 mb-3 px-1">
                  <span className="w-2 h-2 rounded-full bg-[#3FBF7F]" />
                  <span className="eyebrow !tracking-[0.1em] text-[#71717A]">
                    Demo agent
                  </span>
                </div>
                <ChatPlayer messages={demoChat} />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

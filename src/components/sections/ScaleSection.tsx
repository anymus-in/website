"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/* Equalizer-bar face overlaid on gradient orb */
function OrbFace({ gradient, delay }: { gradient: string; delay: number }) {
  return (
    <motion.div
      className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full flex items-center justify-center shrink-0"
      style={{ background: gradient }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 48 48" fill="none" className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12">
        <rect
          x="8"
          y="20"
          width="5"
          height="10"
          rx="2.5"
          fill="black"
          opacity="0.75"
        />
        <rect
          x="15"
          y="16"
          width="5"
          height="14"
          rx="2.5"
          fill="black"
          opacity="0.75"
        />
        <rect
          x="22"
          y="12"
          width="5"
          height="18"
          rx="2.5"
          fill="black"
          opacity="0.75"
        />
        <rect
          x="29"
          y="16"
          width="5"
          height="14"
          rx="2.5"
          fill="black"
          opacity="0.75"
        />
        <rect
          x="36"
          y="20"
          width="5"
          height="10"
          rx="2.5"
          fill="black"
          opacity="0.75"
        />
      </svg>
    </motion.div>
  );
}

const orbGradients = [
  "radial-gradient(circle at 38% 32%, #F4C5C5, #D09090 44%, #B870B0)",
  "radial-gradient(circle at 38% 32%, #B0C8F8, #6090E8 44%, #4060D0)",
  "radial-gradient(circle at 38% 32%, #A8F0C0, #50C870 44%, #30A850)",
];

type Status = "idle" | "loading" | "done";

function CreateAgentCard() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleGenerate() {
    if (!url.trim() || status === "loading") return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1900);
  }

  return (
    <div
      className="relative gradient-border-top bg-[#F2F1ED] rounded-[20px] sm:rounded-[24px] border border-black/[0.06] flex flex-col items-center text-center px-6 sm:px-10 py-8 sm:py-12 h-full overflow-hidden"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h3 className="font-serif text-[22px] sm:text-[26px] md:text-[28px] tracking-[-0.02em] text-black mb-2">
        Create your own agent
      </h3>
      <p className="text-[13px] sm:text-[14px] text-[#52525B] mb-6 sm:mb-8">
        Generate a sample demo agent from your website
      </p>

      {/* Orbs — hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        {orbGradients.map((g, i) => (
          <OrbFace key={i} gradient={g} delay={i * 0.5} />
        ))}
      </div>

      <p className="text-[12px] sm:text-[12px] text-[#52525B] mb-4 sm:mb-5">
        No account needed. No cost. Create your agent in minutes.
      </p>

      <div className="flex flex-col sm:flex-row w-full max-w-[280px] sm:max-w-[380px] gap-2">
        <input
          type="text"
          placeholder="Enter your company website"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (status === "done") setStatus("idle");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          className="focus-accent flex-1 min-w-0 bg-white border border-[#D4D4D1] rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-black placeholder:text-[#A1A1AA] outline-none min-h-[44px]"
        />
        <button
          onClick={handleGenerate}
          disabled={status === "loading"}
          className="cta-lift focus-accent shrink-0 bg-black text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium hover:bg-zinc-800 whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-80 min-h-[44px]"
        >
          {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === "done" && <Check className="w-4 h-4" />}
          {status === "loading"
            ? "Generating…"
            : status === "done"
              ? "Agent ready"
              : "Generate your agent"}
        </button>
      </div>

      <AnimatePresence>
        {status === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden w-full max-w-[280px] sm:max-w-[380px]"
          >
            <div
              className="mt-4 sm:mt-5 bg-white rounded-2xl border border-black/[0.06] px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 text-left"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="w-8 sm:w-9 h-8 sm:h-9 rounded-full shrink-0"
                style={{ background: orbGradients[2] }}
              />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-black">
                  Your agent is live
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#52525B] truncate">
                  Trained on {url.replace(/^https?:\/\//, "")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const bentoItems = [
  { title: "Live 24/7", body: "Always available to interact with visitors." },
  { title: "Multilingual", body: "Supports 50+ languages." },
  {
    title: "Personalised for each prospect",
    body: "Adapts every session to the buyer.",
  },
];

export default function ScaleSection() {
  return (
    <section id="features" className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        {/* Heading block — left aligned, compact */}
        <Reveal>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[500px]">
            Scale personalised sales without growing your team
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[460px]">
            Give a dedicated guide to every buyer – anymus agents are always
            available. If human touch is needed, you&apos;ll know.
          </p>
        </Reveal>

        {/* 2-col: big left card, bento stack right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 sm:gap-5 items-stretch">
          <Reveal className="flex">
            <div className="w-full">
              <CreateAgentCard />
            </div>
          </Reveal>
          <RevealGroup className="flex flex-col gap-4" stagger={0.1}>
            {bentoItems.map((item) => (
              <RevealItem key={item.title} className="flex-1">
                <div className="card-hover h-full px-6 sm:px-8 py-5 sm:py-7 rounded-[20px] border border-black/[0.06] bg-gradient-to-br from-[#F2F1ED] to-white ring-1 ring-black/[0.04]" style={{ boxShadow: "var(--shadow-card)" }}>
                  <h4 className="font-serif text-[20px] sm:text-[22px] tracking-[-0.01em] text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#52525B] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

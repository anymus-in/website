"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/lib/services";

/**
 * The Index — the discovery centerpiece. Services rendered as numbered
 * ledger rows; hovering/focusing a row unfolds its spec (outcomes + a
 * "sounds familiar" symptom) inline. Every row header is a real link.
 */
export default function ServiceIndex() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="index" className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-28">
      <Reveal>
        <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-4">
          <span className="anno">Sec. 01 — The index</span>
          <span className="anno hidden sm:block">Three disciplines / one system</span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="font-serif font-light text-[clamp(30px,5.5vw,56px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[640px] mt-8 mb-12 sm:mb-16">
          Everything a business runs on,
          <br className="hidden sm:block" /> built as{" "}
          <span className="italic">one</span> thing.
        </h2>
      </Reveal>

      <div>
        {services.map((s, i) => {
          const isActive = active === i;
          const symptom = s.signs[0];
          return (
            <div
              key={s.slug}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="border-t rule last:border-b group"
            >
              <Link
                href={`/services/${s.slug}`}
                className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[72px_1fr_auto] items-baseline gap-x-4 sm:gap-x-8 py-6 sm:py-8 focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-[-2px]"
              >
                <span
                  className={`font-mono text-[12px] sm:text-[13px] transition-colors duration-300 ${
                    isActive ? "text-mark" : "text-inkwarm-faint"
                  }`}
                >
                  {`0${i + 1}`}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-serif font-light text-[clamp(26px,5vw,52px)] leading-[1.05] tracking-[-0.02em] transition-all duration-300 ${
                      isActive ? "text-inkwarm sm:translate-x-2" : "text-inkwarm/60"
                    }`}
                  >
                    {s.name}
                  </span>
                  <span
                    className={`block text-[13px] sm:text-[14px] mt-1.5 transition-colors duration-300 ${
                      isActive ? "text-inkwarm-soft" : "text-inkwarm-faint"
                    }`}
                  >
                    {s.intro}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-[18px] sm:text-[22px] self-center transition-all duration-300 ${
                    isActive
                      ? "text-mark translate-x-0 opacity-100"
                      : "text-inkwarm-faint -translate-x-2 opacity-40"
                  }`}
                >
                  →
                </span>
              </Link>

              {/* Unfolded spec */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={
                      reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }
                    }
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] gap-x-8 pb-8 sm:pb-10">
                      <span className="hidden md:block" />
                      <div className="border-l-2 border-mark pl-5 sm:pl-7 md:mr-16">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mb-6">
                          {s.outcomes.map((o, j) => (
                            <div key={o.title}>
                              <span className="anno anno-mark block mb-2">{`${
                                i + 1
                              }.${j + 1}`}</span>
                              <p className="text-[13.5px] font-medium text-inkwarm leading-snug mb-1">
                                {o.title}
                              </p>
                              <p className="text-[12.5px] text-inkwarm-soft leading-relaxed">
                                {o.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t rule pt-4">
                          <p className="font-mono text-[11px] sm:text-[11.5px] text-inkwarm-faint leading-relaxed">
                            <span className="text-mark">Sounds familiar?</span>{" "}
                            “{symptom}”
                          </p>
                          <Link
                            href={`/services/${s.slug}`}
                            className="u-draw text-[13px] font-medium text-inkwarm shrink-0"
                          >
                            Read the full spec →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";
import SignalTraces from "@/components/motion/SignalTraces";
import { CONTACT_EMAIL } from "@/lib/site";

/** The culmination — a full-viewport dark spread with one giant action. */
export default function ClosingCta() {
  return (
    <section
      id="start"
      className="bg-inkwarm text-sheet relative overflow-hidden"
    >
      {/* Blueprint ground + signal traces */}
      <div aria-hidden className="absolute inset-0 graph-bg-dark" />
      <SignalTraces dark className="absolute inset-0 w-full h-full opacity-70" />

      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 min-h-[94vh] flex flex-col justify-between py-14 sm:py-16">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-sheet/25 pb-3">
            <span className="anno !text-sheet/50">Sec. 04 — Start</span>
            <span className="anno anno-mark">Reply &lt; 24h · no obligation</span>
          </div>
        </Reveal>

        <div className="py-16 sm:py-20">
          <Reveal>
            <p className="anno !text-sheet/45 mb-8">The short version</p>
          </Reveal>
          <LineReveal
            as="h2"
            className="font-serif font-light text-[clamp(40px,8.5vw,124px)] leading-[1.0] tracking-[-0.03em]"
            lineClassName={(i) => (i === 1 ? "sm:pl-[7vw]" : i === 2 ? "sm:pl-[2vw]" : undefined)}
            lines={[
              <span key="1">Well-run companies</span>,
              <span key="2">
                aren&rsquo;t lucky. They&rsquo;re{" "}
                <span className="italic text-mark">built</span>.
              </span>,
            ]}
          />

          {/* The one action — an oversized drawn link */}
          <Reveal delay={0.3}>
            <div className="mt-14 sm:mt-20">
              <a
                href="/schedule-call"
                className="group inline-flex items-baseline gap-5 py-2 -my-2 focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-8"
              >
                <span className="u-draw font-serif font-light text-[clamp(26px,4.6vw,58px)] leading-none tracking-[-0.02em] text-sheet">
                  Book a 30-minute discovery call
                </span>
                <span
                  aria-hidden
                  className="font-serif font-light text-[clamp(26px,4.6vw,58px)] leading-none text-mark transition-transform duration-300 group-hover:translate-x-3 group-active:translate-x-3"
                >
                  →
                </span>
              </a>
              <p className="mt-6 text-[13.5px] sm:text-[14.5px] text-sheet/55 leading-relaxed max-w-[440px]">
                We&rsquo;ll map how work moves through your business today.
                Worst case, you leave with the map.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-3 border-t border-sheet/25 pt-4">
            <span className="anno !text-sheet/40">anymus — end of document</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="u-draw inline-flex items-center min-h-11 -my-3 sm:min-h-0 sm:my-0 font-mono text-[11px] uppercase tracking-[0.14em] text-sheet/60 hover:text-sheet active:text-sheet transition-colors"
            >
              Prefer writing? {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Rotated stamp — a quiet signature */}
      <div
        aria-hidden
        className="hidden lg:flex absolute right-16 top-24 rotate-[8deg] border-2 border-mark/70 rounded-[2px] px-4 py-2.5 select-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mark/80 leading-relaxed text-center">
          No lock-in ✳ est. 2025
          <br />
          anymus / systems
        </span>
      </div>
    </section>
  );
}

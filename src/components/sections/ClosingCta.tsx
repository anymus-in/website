"use client";

import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";
import { CONTACT_EMAIL } from "@/lib/site";

/** The final spread — a full-viewport invitation set in display sizes. */
export default function ClosingCta() {
  return (
    <section
      id="start"
      className="bg-inkwarm text-sheet relative overflow-hidden"
    >
      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 min-h-[92vh] flex flex-col justify-between py-14 sm:py-16">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-sheet/25 pb-3">
            <span className="anno !text-sheet/50">Sec. 04 — Start</span>
            <span className="anno anno-mark">Reply &lt; 24h · no obligation</span>
          </div>
        </Reveal>

        <div className="py-14">
          <LineReveal
            as="h2"
            className="font-serif font-light text-[clamp(44px,9.5vw,136px)] leading-[0.98] tracking-[-0.03em]"
            lineClassName={(i) => (i === 1 ? "sm:pl-[10vw]" : undefined)}
            lines={[
              <span key="1">Put your operation</span>,
              <span key="2">
                on <span className="italic text-mark">rails</span>.
              </span>,
            ]}
          />

          <Reveal delay={0.25}>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-5 text-[14.5px] sm:text-[15.5px] text-sheet/60 leading-relaxed max-w-[440px]">
                A 30-minute discovery call. We&rsquo;ll map how work moves
                through your business today — and show you what it could look
                like running on one connected system.
              </p>
              <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center md:justify-end gap-6 sm:gap-10">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="u-draw font-mono text-[12px] uppercase tracking-[0.14em] text-sheet/60 hover:text-sheet transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href="/schedule-call"
                  className="btn-stamp btn-stamp-paper px-8 sm:px-10 py-4 sm:py-5 text-[15px] sm:text-[16px] font-medium tracking-[-0.01em]"
                >
                  Book the call
                  <span aria-hidden className="font-mono text-[12px]">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex items-baseline justify-between border-t border-sheet/25 pt-3">
            <span className="anno !text-sheet/40">End of document</span>
            <span className="anno !text-sheet/40 hidden sm:block">
              Continued below — colophon
            </span>
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

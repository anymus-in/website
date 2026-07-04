import Reveal from "@/components/motion/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export default function ClosingCta() {
  return (
    <section className="bg-inkwarm text-sheet relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28 md:py-36">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-sheet/25 pb-3 mb-12 sm:mb-16">
            <span className="anno !text-sheet/50">Sec. 04 — Start</span>
            <span className="anno anno-mark">Reply &lt; 24h</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif font-light text-[clamp(38px,8vw,92px)] leading-[1.03] tracking-[-0.025em] mb-8 sm:mb-10 max-w-[900px]">
            Put your operation
            <br />
            on <span className="italic text-mark">rails</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="text-[14.5px] sm:text-[16px] text-sheet/65 leading-relaxed max-w-[460px]">
              A 30-minute discovery call. We&rsquo;ll map how work moves through
              your business today — and show you what it could look like
              running on one connected system.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 shrink-0">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="u-draw font-mono text-[12px] uppercase tracking-[0.14em] text-sheet/60 hover:text-sheet transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href="/schedule-call"
                className="btn-stamp btn-stamp-paper px-7 sm:px-9 py-4 text-[15px] font-medium tracking-[-0.01em]"
              >
                Book the call
                <span aria-hidden className="font-mono text-[12px]">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Rotated stamp — a quiet signature in the corner */}
      <div
        aria-hidden
        className="hidden lg:flex absolute right-14 top-16 rotate-[8deg] border-2 border-mark/70 rounded-[2px] px-4 py-2.5 select-none"
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

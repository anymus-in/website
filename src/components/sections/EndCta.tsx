import Reveal from "@/components/motion/Reveal";
import SignalTraces from "@/components/motion/SignalTraces";

/**
 * Shared dark closing band for detail pages (services, solutions,
 * industries, blog posts) — blueprint ground, ambient signal traces, one
 * stamped action. Replaces the near-identical closers each layout carried.
 */
export default function EndCta({
  stamp,
  heading,
  ctaLabel = "Book a discovery call",
  ctaHref = "/schedule-call",
  note = "Free 30-min call · no lock-in · reply < 24h",
}: {
  /** Small red annotation above the heading, e.g. "File S.01 — end of playbook". */
  stamp: string;
  /** Serif statement; pass ReactNode to italicize the key word. */
  heading: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
}) {
  return (
    <section id="start" className="relative bg-inkwarm overflow-hidden">
      <div aria-hidden className="absolute inset-0 graph-bg-dark" />
      <SignalTraces dark className="absolute inset-0 w-full h-full opacity-60" />
      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="anno anno-mark mb-6">{stamp}</p>
          <h2 className="font-serif font-light text-[clamp(30px,5.5vw,64px)] leading-[1.05] tracking-[-0.025em] text-sheet max-w-[760px]">
            {heading}
          </h2>
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={ctaHref}
              className="btn-stamp btn-stamp-paper px-7 sm:px-9 py-4 text-[15px] font-medium tracking-[-0.01em]"
            >
              {ctaLabel}
              <span aria-hidden className="font-mono text-[12px]">→</span>
            </a>
            <span className="anno !text-sheet/45">{note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

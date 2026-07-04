import Reveal from "@/components/motion/Reveal";

export default function CtaBand() {
  return (
    <section className="relative bg-inkwarm graph-bg-dark py-20 sm:py-28 md:py-32 overflow-hidden">
      <Reveal className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8">
        <p className="anno anno-mark mb-6">Start</p>
        <h2 className="font-serif font-light text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] text-sheet mb-8 sm:mb-10 max-w-[560px]">
          Ready to stop running your business on{" "}
          <span className="italic">spreadsheets</span>?
        </h2>
        <a
          href="/schedule-call"
          className="btn-stamp btn-stamp-paper px-7 sm:px-9 py-4 text-[15px] font-medium tracking-[-0.01em]"
        >
          Book a discovery call
          <span aria-hidden className="font-mono text-[12px]">→</span>
        </a>
        <p className="anno !text-sheet/45 mt-6">
          Free 30-minute call · no obligation · reply &lt; 24h
        </p>
      </Reveal>
    </section>
  );
}

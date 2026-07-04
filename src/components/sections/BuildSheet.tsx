import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const PHASES = [
  {
    week: "Wk 00",
    title: "Discovery",
    body: "A free call. We map how work actually moves through your business today — the handoffs, the workarounds, the things nobody wrote down.",
  },
  {
    week: "Wk 01",
    title: "Blueprint",
    body: "A clear scope, timeline, and price for exactly what gets built. You know what you're getting before anything gets built.",
  },
  {
    week: "Wk 02–05",
    title: "Build",
    body: "We design, build, and wire the system into the tools you already use. You see working software early, not a big reveal at the end.",
  },
  {
    week: "Wk 06 →",
    title: "Handover",
    body: "Your team trained hands-on, everything running against real work, and support on hand through the first weeks of going live.",
  },
];

const CONDITIONS = [
  "Free discovery call",
  "Built on your existing tools",
  "Clear scope & timeline",
  "No long-term lock-in",
];

export default function BuildSheet() {
  return (
    <section id="process" className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-28">
      <Reveal>
        <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-4">
          <span className="anno">Sec. 02 — The build sheet</span>
          <span className="anno hidden sm:block">Weeks, not months</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-20 mt-8">
        <Reveal delay={0.05}>
          <h2 className="font-serif font-light text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-0.02em] text-inkwarm max-w-[420px] lg:sticky lg:top-28">
            From first call to a <span className="italic">running</span> system.
          </h2>
        </Reveal>

        <RevealGroup stagger={0.09}>
          {PHASES.map((p, i) => (
            <RevealItem key={p.title} className="group border-t rule">
              <div className="grid grid-cols-[86px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 sm:gap-x-8 py-6 sm:py-7">
                <div>
                  <span className="anno block group-hover:text-mark transition-colors duration-300">
                    {p.week}
                  </span>
                  <span className="font-mono text-[11px] text-inkwarm-faint/60 block mt-1">
                    {`0${i + 1}/04`}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-[22px] sm:text-[26px] leading-none text-inkwarm mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-inkwarm-soft leading-relaxed max-w-[480px]">
                    {p.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
          <RevealItem className="border-t rule">
            <span className="sr-only">End of process</span>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Conditions of engagement */}
      <Reveal delay={0.1}>
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 border rule divide-x divide-y md:divide-y-0 divide-[rgba(28,24,18,0.16)]">
          {CONDITIONS.map((c, i) => (
            <div
              key={c}
              className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-3 bg-sheet-lift/50 hover:bg-sheet-lift transition-colors duration-300"
            >
              <span className="anno anno-mark">{`✳ ${i + 1}`}</span>
              <span className="text-[13px] sm:text-[14px] font-medium text-inkwarm leading-snug">
                {c}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

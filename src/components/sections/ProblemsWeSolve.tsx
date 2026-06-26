import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const pillarTag = {
  "Digital Presence": "text-grad-blue bg-grad-blue/10",
  Automation:         "text-[#1F8A56] bg-grad-green/10",
  "Internal Systems": "text-accent-ink bg-grad-amber/15",
} as const;

type Pillar = keyof typeof pillarTag;

const problems: { pain: string; solved: Pillar }[] = [
  { pain: "Your leads fall through the cracks",          solved: "Automation" },
  { pain: "Your team wastes hours on manual work",        solved: "Automation" },
  { pain: "No clear visibility into performance",         solved: "Internal Systems" },
  { pain: "Your website is outdated or missing",          solved: "Digital Presence" },
  { pain: "Everything runs on mismatched spreadsheets",   solved: "Internal Systems" },
];

export default function ProblemsWeSolve() {
  return (
    <section className="bg-paper border-t border-line">
      <div className="max-w-308 mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-18 md:py-24">

        <Reveal>
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[54px] leading-[1.05] tracking-[-0.03em] text-black">
            Sound familiar?
          </h2>
        </Reveal>

        {/* Card grid */}
        <RevealGroup
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
          stagger={0.06}
        >
          {problems.map((p, i) => (
            <RevealItem
              key={i}
              className={`relative overflow-hidden bg-white rounded-2xl border border-line p-7 sm:p-8 flex flex-col justify-between gap-10 ${
                i === 4 ? "sm:col-span-2" : ""
              }`}
            >
              {/* Ghost number */}
              <span
                aria-hidden
                className="absolute bottom-4 right-6 font-mono text-[72px] font-bold leading-none select-none pointer-events-none text-black/[0.045]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Pillar tag */}
              <span
                className={`self-start rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide ${pillarTag[p.solved]}`}
              >
                {p.solved}
              </span>

              {/* Problem text */}
              <p
                className={`font-serif text-[20px] sm:text-[22px] text-black leading-snug tracking-[-0.01em] ${
                  i === 4 ? "max-w-[560px]" : ""
                }`}
              >
                {p.pain}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Closing statement */}
        <Reveal className="mt-3">
          <div className="rounded-2xl border border-line bg-ink-900 px-7 py-8 sm:px-10 sm:py-10 md:px-12">
            <p className="font-serif text-[19px] sm:text-[23px] md:text-[27px] leading-[1.4] text-white tracking-[-0.01em] max-w-[680px]">
              We fix all of this —{" "}
              <span className="text-accent">
                websites, automation, and internal systems
              </span>
              {" "}built to work as one.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

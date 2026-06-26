import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** Pillar tag colors mirror the FeatureBlocks tints (blue / green / amber). */
const pillarTag = {
  "Digital Presence": "text-grad-blue bg-grad-blue/10",
  Automation: "text-[#1F8A56] bg-grad-green/10",
  "Internal Systems": "text-accent-ink bg-grad-amber/15",
} as const;

type Pillar = keyof typeof pillarTag;

const problems: { pain: string; solved: Pillar }[] = [
  {
    pain: "Leads slip through the cracks between WhatsApp, inboxes, and someone's memory",
    solved: "Automation",
  },
  {
    pain: "Your team burns hours every week on manual follow-ups and data entry",
    solved: "Automation",
  },
  {
    pain: "You can't get a clear, current picture of how the business is performing",
    solved: "Internal Systems",
  },
  {
    pain: "Your website is outdated, hard to find, or doesn't exist at all",
    solved: "Digital Presence",
  },
  {
    pain: "The whole operation runs on a dozen spreadsheets that don't agree",
    solved: "Internal Systems",
  },
];

export default function ProblemsWeSolve() {
  return (
    <section className="bg-paper border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3 sm:mb-4">The problem</p>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[480px]">
            Sound familiar?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[480px] leading-relaxed">
            Most growing businesses don&apos;t have a marketing problem or a
            sales problem. They have a systems problem — and it tends to show
            up in the same handful of ways.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-12" stagger={0.08}>
          {problems.map((p, i) => (
            <RevealItem
              key={i}
              className="flex items-start sm:items-center justify-between gap-4 border-t border-[#E4E4E1] py-5 sm:py-6"
            >
              <p className="text-[16px] sm:text-[19px] md:text-[20px] font-medium text-black leading-snug max-w-[640px]">
                {p.pain}
              </p>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide ${pillarTag[p.solved]}`}
              >
                {p.solved}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="border-t border-[#E4E4E1] pt-6 sm:pt-8">
          <p className="text-[15px] sm:text-[17px] text-[#3F3F46] max-w-[600px] leading-relaxed">
            We fix these with{" "}
            <span className="font-medium text-black">
              websites, automation, and internal systems
            </span>{" "}
            — built to work together, not bolted on after the fact.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const PRINCIPLES = [
  {
    statement: "Software should fit the business — never the other way around.",
    gloss:
      "We start from how your team actually works, then configure or build to match. No forcing your process into someone else's box.",
  },
  {
    statement: "If a person has to remember it, the system is broken.",
    gloss:
      "Follow-ups, handoffs, reminders — anything that depends on memory becomes a trigger, a rule, and a record.",
  },
  {
    statement: "One source of truth beats ten almost-right spreadsheets.",
    gloss:
      "Every number on the dashboard traces back to one record. When the numbers agree, decisions get easier.",
  },
  {
    statement: "Launch in weeks. Improve forever.",
    gloss:
      "A running system you can react to beats a perfect one that ships next year. We launch early and tune against real activity.",
  },
];

export default function Principles() {
  return (
    <section className="border-y rule bg-sheet-deep/40">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-28">
        <Reveal>
          <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-12 sm:mb-16">
            <span className="anno">Sec. 03 — Working principles</span>
            <span className="anno hidden sm:block">How we build</span>
          </div>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24"
          stagger={0.1}
        >
          {PRINCIPLES.map((p, i) => (
            <RevealItem
              key={p.statement}
              className="group border-t rule py-8 sm:py-10"
            >
              <span className="anno block mb-4 group-hover:text-mark transition-colors duration-300">
                {`Principle 0${i + 1}`}
              </span>
              <p className="font-serif font-light text-[clamp(22px,3vw,30px)] leading-[1.18] tracking-[-0.01em] text-inkwarm mb-3.5 max-w-[440px]">
                {p.statement}
              </p>
              <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed max-w-[420px]">
                {p.gloss}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

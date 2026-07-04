import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const PRINCIPLES = [
  {
    lines: ["Software should fit the business —", "never the other way around."],
    italic: "fit",
    gloss:
      "We start from how your team actually works, then configure or build to match. No forcing your process into someone else's box.",
  },
  {
    lines: ["If a person has to remember it,", "the system is broken."],
    italic: "remember",
    gloss:
      "Follow-ups, handoffs, reminders — anything that depends on memory becomes a trigger, a rule, and a record.",
  },
  {
    lines: ["One source of truth beats ten", "almost-right spreadsheets."],
    italic: "truth",
    gloss:
      "Every number on the dashboard traces back to one record. When the numbers agree, decisions get easier.",
  },
  {
    lines: ["Launch in weeks.", "Improve forever."],
    italic: "weeks",
    gloss:
      "A running system you can react to beats a perfect one that ships next year. We launch early and tune against real activity.",
  },
];

function emphasize(line: string, word: string) {
  const idx = line.indexOf(word);
  if (idx === -1) return line;
  return (
    <>
      {line.slice(0, idx)}
      <span className="italic text-mark">{word}</span>
      {line.slice(idx + word.length)}
    </>
  );
}

/** Dark interlude — the manifesto, set like a spread of pull quotes. */
export default function Principles() {
  return (
    <section id="principles" className="bg-inkwarm text-sheet relative overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden
        className="text-hollow-sheet pointer-events-none select-none absolute -right-[0.08em] top-[-0.14em] font-serif font-light leading-none text-[clamp(180px,26vw,400px)] tracking-[-0.04em]"
      >
        §
      </span>

      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28 md:py-36">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-sheet/25 pb-3 mb-16 sm:mb-24">
            <span className="anno !text-sheet/50">Sec. 02 — Working principles</span>
            <span className="anno anno-mark hidden sm:block">Held, not aspirational</span>
          </div>
        </Reveal>

        <div className="space-y-16 sm:space-y-24">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.gloss}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              <div
                className={`lg:col-span-8 ${
                  i % 2 === 1 ? "lg:col-start-3" : ""
                }`}
              >
                <p className="anno !text-sheet/40 mb-5">{`Principle 0${i + 1} / 04`}</p>
                <LineReveal
                  as="p"
                  className="font-serif font-light text-[clamp(26px,4.6vw,54px)] leading-[1.08] tracking-[-0.02em] text-sheet"
                  lines={p.lines.map((line, j) => (
                    <span key={j}>{emphasize(line, p.italic)}</span>
                  ))}
                />
              </div>
              <Reveal
                delay={0.25}
                className={`lg:col-span-3 ${
                  i % 2 === 1 ? "lg:col-start-11 lg:col-span-2" : "lg:col-start-10"
                }`}
              >
                <p className="border-l border-sheet/25 pl-4 text-[12.5px] text-sheet/55 leading-relaxed">
                  {p.gloss}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

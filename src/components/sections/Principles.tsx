import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const PRINCIPLES = [
  {
    lines: ["Software should fit the business —", "never the other way around."],
    italic: "fit",
    tag: "On tools",
  },
  {
    lines: ["If a person has to remember it,", "the system is broken."],
    italic: "remember",
    tag: "On memory",
  },
  {
    lines: ["One source of truth beats ten", "almost-right spreadsheets."],
    italic: "truth",
    tag: "On data",
  },
  {
    lines: ["Launch in weeks.", "Improve forever."],
    italic: "weeks",
    tag: "On speed",
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

/** Dark centerpiece — the manifesto set as an architectural table:
    hollow numeral / statement, one rule per row. */
export default function Principles() {
  return (
    <section id="principles" className="bg-inkwarm text-sheet relative overflow-hidden graph-bg-dark">
      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28 md:py-36">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-sheet/25 pb-3">
            <span className="anno !text-sheet/50">Sec. 02 — Working principles</span>
            <span className="anno anno-mark hidden sm:block">Held, not aspirational</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="pt-14 sm:pt-20 pb-12 sm:pb-16 max-w-[560px]">
            <p className="font-serif font-light text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-[-0.015em] text-sheet/85">
              Four rules Anymus won&rsquo;t bend —{" "}
              <span className="italic">even when it would be easier to.</span>
            </p>
          </div>
        </Reveal>

        <div>
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.tag}
              className="group border-t border-sheet/20 last:border-b grid grid-cols-[64px_1fr] sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] gap-x-5 sm:gap-x-8 py-10 sm:py-14 items-start"
            >
              {/* Index */}
              <div className="pt-2 sm:pt-3">
                <span className="anno anno-mark block mb-2 group-hover:!text-mark transition-colors duration-300">
                  {`0${i + 1}`}
                </span>
                <span className="anno !text-sheet/40 block">{p.tag}</span>
              </div>

              {/* Statement */}
              <div className="pt-1 sm:pt-2">
                <LineReveal
                  as="p"
                  className="font-serif font-light text-[clamp(24px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-sheet"
                  lines={p.lines.map((line, j) => (
                    <span key={j}>{emphasize(line, p.italic)}</span>
                  ))}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

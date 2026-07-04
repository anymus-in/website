import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const PRINCIPLES = [
  {
    lines: ["Software should fit the business —", "never the other way around."],
    italic: "fit",
    gloss:
      "We start from how your team actually works, then configure or build to match. No forcing your process into someone else's box.",
    tag: "On tools",
  },
  {
    lines: ["If a person has to remember it,", "the system is broken."],
    italic: "remember",
    gloss:
      "Follow-ups, handoffs, reminders — anything that depends on memory becomes a trigger, a rule, and a record.",
    tag: "On memory",
  },
  {
    lines: ["One source of truth beats ten", "almost-right spreadsheets."],
    italic: "truth",
    gloss:
      "Every number on the dashboard traces back to one record. When the numbers agree, decisions get easier.",
    tag: "On data",
  },
  {
    lines: ["Launch in weeks.", "Improve forever."],
    italic: "weeks",
    gloss:
      "A running system you can react to beats a perfect one that ships next year. We launch early and tune against real activity.",
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
    hollow numeral / statement / margin gloss, each row its own plate. */
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
              Four rules we won&rsquo;t bend —{" "}
              <span className="italic">even when it would be easier to.</span>
            </p>
          </div>
        </Reveal>

        <div>
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.gloss}
              className="group border-t border-sheet/20 last:border-b grid grid-cols-[64px_1fr] sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_minmax(0,7fr)_minmax(0,3fr)] gap-x-5 sm:gap-x-8 py-10 sm:py-14 items-start"
            >
              {/* Hollow numeral */}
              <div className="relative">
                <span
                  aria-hidden
                  className="text-hollow-sheet font-serif font-light leading-[0.8] text-[clamp(56px,8vw,120px)] tracking-[-0.04em] block group-hover:[-webkit-text-stroke-color:rgba(200,57,27,0.75)] transition-all duration-500"
                >
                  {i + 1}
                </span>
                <span className="anno !text-sheet/40 block mt-3">{p.tag}</span>
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
                {/* Gloss below statement on smaller screens */}
                <p className="lg:hidden mt-5 text-[12.5px] text-sheet/55 leading-relaxed max-w-[420px] border-l border-sheet/25 pl-4">
                  {p.gloss}
                </p>
              </div>

              {/* Margin gloss (desktop) */}
              <Reveal delay={0.2} className="hidden lg:block pt-3">
                <div className="border-l border-sheet/25 pl-5">
                  <span className="anno !text-sheet/40 block mb-2.5">{`Note ${i + 1}.1`}</span>
                  <p className="text-[12.5px] text-sheet/55 leading-relaxed">
                    {p.gloss}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="dim-line w-16 opacity-40 invert" aria-hidden />
            <span className="anno !text-sheet/40">
              Disagree with one? Good — let&rsquo;s argue about it on a call.
            </span>
            <span className="dim-line w-16 opacity-40 invert" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

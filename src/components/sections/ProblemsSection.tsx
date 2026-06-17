import { FileSpreadsheet, Unlink, EyeOff } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const problems = [
  {
    num: "01",
    icon: FileSpreadsheet,
    tint: "bg-grad-amber/15 text-accent-ink",
    title: "Spreadsheet Chaos",
    description:
      "Critical data scattered across dozens of spreadsheets nobody fully trusts.",
  },
  {
    num: "02",
    icon: Unlink,
    tint: "bg-grad-blue/12 text-grad-blue",
    title: "Disconnected Systems",
    description:
      "Your CRM, accounting, and inventory tools don't talk to each other.",
  },
  {
    num: "03",
    icon: EyeOff,
    tint: "bg-grad-green/15 text-[#1F8A56]",
    title: "Lack of Visibility",
    description:
      "Leadership can't see what's actually happening until it's too late.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <Reveal className="mb-10 sm:mb-14 md:mb-16">
          <p className="eyebrow mb-3 sm:mb-4">Problems We Solve</p>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[560px]">
            The problems growing businesses don&apos;t talk about enough
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[460px] leading-relaxed">
            If any of this feels familiar, you&apos;re not alone — and
            it&apos;s fixable.
          </p>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
          stagger={0.1}
        >
          {problems.map((p) => (
            <RevealItem key={p.title}>
              <div
                className="card-hover h-full p-7 sm:p-8 rounded-[24px] bg-white border border-black/[0.06]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center ${p.tint}`}
                  >
                    <p.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="font-serif text-[15px] text-ink-400">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-serif text-[20px] sm:text-[22px] tracking-[-0.01em] text-black mb-2">
                  {p.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#52525B] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

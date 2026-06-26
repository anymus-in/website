import Link from "next/link";
import {
  Cpu,
  Wrench,
  Workflow,
  Target,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const reasons: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Cpu,
    title: "A technical-first team",
    body: "We build the systems ourselves — not advise from the sidelines and outsource the hard part.",
  },
  {
    icon: Wrench,
    title: "Built around your business",
    body: "Everything is configured to how you actually work, not forced into a locked, off-the-shelf template.",
  },
  {
    icon: Workflow,
    title: "One connected stack",
    body: "Your site, automations, and internal tools talk to each other — nothing stitched together after the fact.",
  },
  {
    icon: Target,
    title: "Focused on outcomes",
    body: "We measure success in hours saved and leads won, not features shipped or hours billed.",
  },
  {
    icon: LifeBuoy,
    title: "Here for the long run",
    body: "We support and evolve what we build — we don't disappear the moment you go live.",
  },
];

export default function WhyChooseAnymus() {
  return (
    <section className="bg-paper border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 sm:gap-12 lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 self-start">
          <p className="eyebrow mb-3 sm:mb-4">Why anymus</p>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[420px]">
            Why businesses choose anymus
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[420px] leading-relaxed mb-6 sm:mb-8">
            We&apos;re a small, technical team that treats your systems like our
            own product — built to last, and built to actually get used.
          </p>
          <Link
            href="/schedule-call"
            className="cta-lift inline-flex items-center bg-black text-white rounded-full px-6 py-3 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
          >
            Book a free consultation
          </Link>
        </Reveal>

        <RevealGroup className="flex flex-col" stagger={0.09}>
          {reasons.map((r) => (
            <RevealItem
              key={r.title}
              className="flex items-start gap-4 sm:gap-5 border-t border-[#E4E4E1] py-5 sm:py-6 first:border-t-0 first:pt-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E4E4E1] flex items-center justify-center shrink-0">
                <r.icon className="w-[18px] h-[18px] text-accent-ink" />
              </div>
              <div>
                <p className="text-[16px] sm:text-[18px] font-semibold text-black mb-1">
                  {r.title}
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#52525B] leading-relaxed max-w-[480px]">
                  {r.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

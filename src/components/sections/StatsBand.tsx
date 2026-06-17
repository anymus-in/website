import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";

export default function StatsBand() {
  return (
    <section className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Reveal
          className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 bg-paper rounded-[20px] sm:rounded-[24px] border border-black/[0.06] px-6 sm:px-10 py-8 sm:py-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.10)]"
        >
          {/* Stats left — side by side numbers */}
          <div className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 md:gap-12 shrink-0">
            {/* Subtle amber glow behind stats */}
            <div className="absolute -inset-4 rounded-2xl bg-[#F5C26B]/10 blur-2xl pointer-events-none" />
            <div className="flex items-baseline gap-2 sm:gap-3">
              <CountUp
                to={60}
                suffix="%"
                className="font-serif text-[40px] sm:text-[50px] md:text-[60px] leading-[0.95] tracking-[-0.02em] text-[#18181B]"
              />
              <p className="text-[12px] sm:text-[13px] text-[#52525B] leading-snug max-w-[110px]">
                reduction in bad fit
                <br />
                sales calls
              </p>
            </div>
            <div className="flex items-baseline gap-2 sm:gap-3">
              <CountUp
                to={20}
                suffix="%"
                className="font-serif text-[40px] sm:text-[50px] md:text-[60px] leading-[0.95] tracking-[-0.02em] text-[#18181B]"
              />
              <p className="text-[12px] sm:text-[13px] text-[#52525B] leading-snug max-w-[120px]">
                month-on-month
                <br />
                increase in total SQLs
              </p>
            </div>
          </div>

          {/* Hairline divider */}
          <div className="hidden lg:block self-stretch w-px bg-[#E4E4E1]" />

          {/* Quote right */}
          <div className="flex-1 lg:max-w-[480px]">
            <p className="text-[14px] sm:text-[15px] text-[#3F3F46] leading-relaxed mb-4 sm:mb-5">
              &ldquo;Our sales reps are less occupied with bad fit leads,
              creating extra capacity for outbound, and anymus&apos;s agent has
              been super useful for coverage outside of regular business
              hours.&rdquo;
            </p>
            <div className="flex items-center gap-3 justify-end">
              <div className="w-8 h-8 rounded-full bg-[#E8E8E8] overflow-hidden shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="#A1A1AA"
                  className="w-full h-full"
                >
                  <circle cx="16" cy="12" r="6" />
                  <ellipse cx="16" cy="27" rx="11" ry="7" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-[12px] sm:text-[13px] font-semibold text-black">
                  Alasdair Reynolds
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#71717A]">
                  Head of Growth at Parim
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

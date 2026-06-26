const steps = [
  {
    num: "1.",
    label: "Discovery",
    body: "We map your current tools, workflows, and pain points, then document how work actually happens — not how it's supposed to.",
  },
  {
    num: "2.",
    label: "Build & Automate",
    body: "We build your website, automation, or internal system around that reality, and connect your tools so handoffs run themselves.",
  },
  {
    num: "3.",
    label: "Launch",
    body: "Your team learns the system hands-on, then you go live with something they actually use.",
  },
];

export default function GetStarted() {
  return (
    <section id="process" className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
        <p className="eyebrow mb-3 sm:mb-4">Implementation Process</p>
        <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[460px]">
          How we get you there
        </h2>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[460px] leading-relaxed mb-8 sm:mb-12 md:mb-16">
          A clear process, not a black box — here&apos;s exactly what an
          engagement looks like.
        </p>

        <div>
          {/* Steps */}
          <div>
            {steps.map((s, i) => (
              <div key={i} className="border-t border-[#E4E4E1] py-6 sm:py-8">
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <p className="font-serif text-[22px] sm:text-[26px] text-accent-ink shrink-0">
                    {s.num}
                  </p>
                  <p className="text-[17px] sm:text-[19px] font-semibold text-black">
                    {s.label}
                  </p>
                </div>
                <p className="text-[15px] sm:text-[17px] text-[#52525B] leading-relaxed mt-2 ml-[32px] sm:ml-[38px] max-w-[640px]">
                  {s.body}
                </p>
              </div>
            ))}
            <div className="mt-8 sm:mt-10">
              <a
                href="/schedule-call"
                className="cta-lift inline-flex items-center bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
              >
                Book Free Consultation
              </a>
              <p className="text-[11px] sm:text-[12px] text-ink-500 mt-2 sm:mt-3">
                Free 30-minute discovery call
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

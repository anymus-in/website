import Reveal from "@/components/motion/Reveal";

export default function CtaBand() {
  return (
    <section className="relative bg-[#0F0F10] py-20 sm:py-28 md:py-[140px]">
      <Reveal className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em] text-white mb-6 sm:mb-8 max-w-[480px]">
          Ready to stop running your business on spreadsheets?
        </h2>
        <a
          href="/schedule-call"
          className="cta-lift inline-flex items-center bg-white text-black rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
        >
          Book a Free Consultation
        </a>
        <p className="text-[13px] text-[#A1A1AA] mt-3">
          Free 30-minute discovery call · No obligation
        </p>
      </Reveal>
    </section>
  );
}

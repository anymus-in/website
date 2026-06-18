import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services, accentClasses, type Service } from "@/lib/services";

export default function ServiceLayout({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  const accent = accentClasses[service.accent];
  const Icon = service.icon;

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32">
        {/* Hero */}
        <section className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-10 pb-14 sm:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
            <ol className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-ink-500">
              <li>
                <Link href="/" className="hover:text-accent-ink transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-accent-ink transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-black" aria-current="page">
                {service.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <Reveal className="flex flex-col items-start">
              <span
                className={`w-fit border ${accent.chip} rounded-full px-3 py-1 text-[11px] font-semibold mb-5 sm:mb-6 tracking-wide uppercase`}
              >
                {service.eyebrow}
              </span>
              <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-black mb-5">
                {service.intro}
              </h1>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#52525B] leading-relaxed mb-8 max-w-[540px]">
                {service.body}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/schedule-call"
                  className="cta-lift inline-flex items-center gap-2 bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-medium text-ink-700 hover:text-black transition-colors px-3 py-3 min-h-[44px]"
                >
                  All services
                </Link>
              </div>
            </Reveal>

            {/* Gradient visual panel */}
            <Reveal>
              <div
                className="relative aspect-[4/3] rounded-[24px] border border-black/[0.06] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent.gradient}`}
                />
                <div className="absolute inset-0 dot-grid opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl ${accent.iconWrap} flex items-center justify-center backdrop-blur-sm`}
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <Icon className="w-11 h-11 sm:w-12 sm:h-12" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-[#FAFAF8] border-y border-[#E4E4E1]">
          <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">What you get</p>
              <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] leading-[1.15] tracking-tight text-black mb-8 sm:mb-12 max-w-[520px]">
                Outcomes, not just software
              </h2>
            </Reveal>
            <RevealGroup
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
              stagger={0.08}
            >
              {service.outcomes.map((o) => (
                <RevealItem
                  key={o.title}
                  className="bg-white border border-black/[0.06] rounded-2xl p-5 sm:p-6 h-full"
                >
                  <span
                    className={`w-9 h-9 rounded-xl ${accent.iconWrap} flex items-center justify-center mb-4`}
                  >
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-black mb-1.5 leading-snug">
                    {o.title}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-[#52525B] leading-relaxed">
                    {o.description}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Cross-links to other services */}
        <section className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4">One connected system</p>
            <h2 className="font-serif text-[24px] sm:text-[30px] tracking-tight text-black mb-8 sm:mb-10 max-w-[480px]">
              Explore the rest of the stack
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {others.map((s) => {
              const oa = accentClasses[s.accent];
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="cta-lift group bg-white border border-black/[0.06] rounded-2xl p-5 sm:p-6 flex flex-col"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <span
                    className={`w-10 h-10 rounded-xl ${oa.iconWrap} flex items-center justify-center mb-4`}
                  >
                    <OIcon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[15px] font-semibold text-black mb-1.5">
                    {s.name}
                  </span>
                  <span className="text-[13px] text-[#52525B] leading-relaxed flex-1 mb-4">
                    {s.intro}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-ink group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}

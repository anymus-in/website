import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import ServiceFaq from "@/components/sections/ServiceFaq";
import { ServiceVisual } from "@/components/sections/service-visuals";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services, accentTile, type Service } from "@/lib/services";

export default function ServiceLayout({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  const Icon = service.icon;
  const a = accentTile[service.accent];

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32">
        {/* Hero */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-10 pb-14 sm:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-12">
            <ol className="flex items-center gap-2 text-[12px] sm:text-[13px] text-ink-500">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-ink-400">/</li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden className="text-ink-400">/</li>
              <li className="text-black" aria-current="page">
                {service.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
            <Reveal className="flex flex-col items-start">
              <span className={`w-12 h-12 rounded-xl ${a.tile} ${a.text} flex items-center justify-center mb-6`}>
                <Icon className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <p className="eyebrow mb-4">{service.eyebrow}</p>
              <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.06] tracking-[-0.02em] text-black mb-5 max-w-[620px]">
                {service.intro}
              </h1>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-ink-600 leading-relaxed mb-8 max-w-[560px]">
                {service.body}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="/schedule-call"
                  className="cta-lift inline-flex items-center gap-2 bg-black text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)] min-h-[44px]"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center text-[14px] sm:text-[15px] font-medium text-ink-600 hover:text-black transition-colors"
                >
                  All services
                </Link>
              </div>
            </Reveal>

            {/* Live product mockup */}
            <Reveal className="w-full">
              <ServiceVisual visualKey={service.visualKey} accent={service.accent} priority />
            </Reveal>
          </div>
        </section>

        {/* Who this is for */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pb-14 sm:pb-20">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
              <Reveal className="flex flex-col items-start">
                <p className="eyebrow mb-3 sm:mb-4">Is this you?</p>
                <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] leading-[1.15] tracking-tight text-black mb-5 max-w-[360px]">
                  Signs it&apos;s time for {service.eyebrow.toLowerCase()}
                </h2>
                <p className="text-[14px] sm:text-[15px] text-ink-600 leading-relaxed max-w-[340px] mb-6">
                  If more than one of these sounds familiar, it&apos;s worth a
                  conversation.
                </p>
                <a
                  href="/schedule-call"
                  className="focus-accent inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-accent-ink hover:gap-2.5 transition-all"
                >
                  Talk it through
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Reveal>
              <RevealGroup stagger={0.06}>
                {service.signs.map((sign) => (
                  <RevealItem key={sign} className="border-t border-line py-4 sm:py-5">
                    <p
                      className={`text-[14px] sm:text-[15px] text-ink-700 leading-relaxed border-l-2 ${a.bar.replace("bg-", "border-")} pl-3 sm:pl-4`}
                    >
                      {sign}
                    </p>
                  </RevealItem>
                ))}
                <div className="border-t border-line" />
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* Outcomes detail */}
        <section className="bg-[#FAFAF8] border-y border-line">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
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
              {service.outcomes.map((o, i) => (
                <RevealItem
                  key={o.title}
                  className="bg-white border border-line rounded-2xl p-6 sm:p-7 h-full"
                >
                  <span className={`font-mono text-[12px] ${a.text} block mb-5`}>
                    0{i + 1}
                  </span>
                  <p className="text-[15px] font-semibold text-black mb-2 leading-snug">
                    {o.title}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-ink-600 leading-relaxed">
                    {o.description}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Process */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4">How it works</p>
            <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] leading-[1.15] tracking-tight text-black mb-8 sm:mb-12 max-w-[520px]">
              What an engagement looks like
            </h2>
          </Reveal>
          <div>
            {service.process.map((step, i) => (
              <div key={step.title} className="border-t border-line py-6 sm:py-8">
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <p className={`font-serif text-[22px] sm:text-[26px] ${a.text} shrink-0`}>
                    {i + 1}.
                  </p>
                  <p className="text-[17px] sm:text-[19px] font-semibold text-black">
                    {step.title}
                  </p>
                </div>
                <p className="text-[15px] sm:text-[16px] text-ink-600 leading-relaxed mt-2 ml-[32px] sm:ml-[38px] max-w-[640px]">
                  {step.description}
                </p>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </section>

        {/* Service-specific FAQ */}
        <section className="bg-[#EFEEED]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">Questions</p>
              <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] leading-[1.15] tracking-tight text-black mb-8 sm:mb-10 max-w-[520px]">
                Frequently asked about {service.eyebrow.toLowerCase()}
              </h2>
            </Reveal>
            <ServiceFaq faqs={service.faqs} />
          </div>
        </section>

        {/* Cross-links to other services */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4">One connected system</p>
            <h2 className="font-serif text-[24px] sm:text-[30px] tracking-tight text-black mb-8 sm:mb-10 max-w-[480px]">
              Explore the rest of the stack
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {others.map((s) => {
              const OIcon = s.icon;
              const oa = accentTile[s.accent];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white p-6 sm:p-7 flex flex-col hover:bg-[#FAFAF8] transition-colors"
                >
                  <span className={`w-10 h-10 rounded-xl ${oa.tile} ${oa.text} flex items-center justify-center mb-5`}>
                    <OIcon className="w-5 h-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-[15px] font-semibold text-black mb-1.5">
                    {s.name}
                  </span>
                  <span className="text-[13px] text-ink-600 leading-relaxed flex-1 mb-4">
                    {s.intro}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[13px] font-medium text-black">
                    Learn more
                    <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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

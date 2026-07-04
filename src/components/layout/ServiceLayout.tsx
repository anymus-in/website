import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import ServiceFaq from "@/components/sections/ServiceFaq";
import SpreadVisual from "@/components/sections/SpreadVisuals";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services, type Service } from "@/lib/services";

export default function ServiceLayout({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  const Icon = service.icon;

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
              <span className={"w-12 h-12 rounded-[2px] border rule bg-sheet-lift text-inkwarm flex items-center justify-center mb-6"}>
                <Icon className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <p className="eyebrow mb-4">{service.eyebrow}</p>
              <h1 className="font-serif font-light text-[clamp(34px,5.5vw,56px)] leading-[1.04] tracking-[-0.025em] text-inkwarm mb-5 max-w-[620px]">
                {service.intro}
              </h1>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-ink-600 leading-relaxed mb-8 max-w-[560px]">
                {service.body}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="/schedule-call"
                  className="btn-stamp px-6 sm:px-7 py-3.5 text-[14px] sm:text-[15px] font-medium tracking-[-0.01em]"
                >
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/services"
                  className="u-draw inline-flex items-center text-[14px] font-medium text-inkwarm"
                >
                  All services
                </Link>
              </div>
            </Reveal>

            {/* Live product mockup */}
            <Reveal className="w-full">
              <figure className="reg-marks plate relative aspect-[4/3] overflow-hidden">
                <span aria-hidden className="reg reg-tl" />
                <span aria-hidden className="reg reg-tr" />
                <span aria-hidden className="reg reg-bl" />
                <span aria-hidden className="reg reg-br" />
                <SpreadVisual visualKey={service.visualKey} />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Who this is for */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pb-14 sm:pb-20">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
              <Reveal className="flex flex-col items-start">
                <p className="eyebrow mb-3 sm:mb-4">Is this you?</p>
                <h2 className="font-serif font-light text-[26px] sm:text-[32px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-inkwarm mb-5 max-w-[360px]">
                  Signs it&apos;s time for {service.eyebrow.toLowerCase()}
                </h2>
                <p className="text-[14px] sm:text-[15px] text-ink-600 leading-relaxed max-w-[340px] mb-6">
                  If more than one of these sounds familiar, it&apos;s worth a
                  conversation.
                </p>
                <a
                  href="/schedule-call"
                  className="u-draw inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-mark hover:gap-2.5 transition-all"
                >
                  Talk it through
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Reveal>
              <RevealGroup stagger={0.06}>
                {service.signs.map((sign) => (
                  <RevealItem key={sign} className="border-t border-line py-4 sm:py-5">
                    <p
                      className={"text-[14px] sm:text-[15px] text-inkwarm-soft leading-relaxed border-l-2 border-mark pl-3 sm:pl-4"}
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
        <section className="bg-sheet-deep/40 border-y rule">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">What you get</p>
              <h2 className="font-serif font-light text-[26px] sm:text-[32px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-inkwarm mb-8 sm:mb-12 max-w-[520px]">
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
                  className="bg-sheet-lift border rule rounded-[2px] p-6 sm:p-7 h-full"
                >
                  <span className={`font-mono text-[12px] text-mark block mb-5`}>
                    0{i + 1}
                  </span>
                  <p className="text-[15px] font-semibold text-inkwarm mb-2 leading-snug">
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
            <h2 className="font-serif font-light text-[26px] sm:text-[32px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-inkwarm mb-8 sm:mb-12 max-w-[520px]">
              What an engagement looks like
            </h2>
          </Reveal>
          <div>
            {service.process.map((step, i) => (
              <div key={step.title} className="border-t border-line py-6 sm:py-8">
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <p className={"font-serif text-[22px] sm:text-[26px] text-mark shrink-0"}>
                    {i + 1}.
                  </p>
                  <p className="text-[17px] sm:text-[19px] font-semibold text-inkwarm">
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
        <section className="bg-sheet-deep/40 border-y rule">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">Questions</p>
              <h2 className="font-serif font-light text-[26px] sm:text-[32px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-inkwarm mb-8 sm:mb-10 max-w-[520px]">
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
            <h2 className="font-serif font-light text-[26px] sm:text-[32px] tracking-[-0.02em] text-inkwarm mb-8 sm:mb-10 max-w-[480px]">
              Explore the rest of the stack
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 border rule divide-y sm:divide-y-0 sm:divide-x divide-[rgba(28,24,18,0.16)] rounded-[2px] overflow-hidden">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-sheet-lift/60 p-6 sm:p-7 flex flex-col hover:bg-sheet-lift transition-colors"
                >
                  <span className={"w-10 h-10 rounded-[2px] border rule bg-sheet text-inkwarm flex items-center justify-center mb-5"}>
                    <OIcon className="w-5 h-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-[15px] font-semibold text-inkwarm mb-1.5">
                    {s.name}
                  </span>
                  <span className="text-[13px] text-ink-600 leading-relaxed flex-1 mb-4">
                    {s.intro}
                  </span>
                  <span className="u-draw inline-flex items-center gap-1 text-[13px] font-medium text-inkwarm">
                    Read the spec
                    <ArrowUpRight className="w-4 h-4 text-mark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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

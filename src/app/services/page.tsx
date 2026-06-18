import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Highlight from "@/components/motion/Highlight";
import JsonLd from "@/components/seo/JsonLd";
import { services, accentClasses } from "@/lib/services";
import { breadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services — ERP, CRM, Automation & Websites",
  description:
    "anymus builds the whole stack — ERP and CRM implementation, business automation, and websites — as one connected system for growing businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — anymus",
    description:
      "ERP and CRM implementation, business automation, and website design — one connected system.",
    url: "/services",
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32">
        {/* Hero */}
        <section className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <Reveal className="flex flex-col items-start">
            <p className="eyebrow mb-4 sm:mb-5">Services</p>
            <h1 className="font-serif text-[34px] sm:text-[46px] md:text-[56px] leading-[1.04] tracking-[-0.02em] text-black mb-5 max-w-[760px]">
              Four services.{" "}
              <Highlight color="var(--color-grad-blue)">One</Highlight> connected
              system.
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#52525B] leading-relaxed max-w-[600px]">
              Most agencies pick one piece. We build the whole stack — systems,
              workflows, automation, and the website in front of it — so nothing
              is stitched together after the fact.
            </p>
          </Reveal>
        </section>

        {/* Service cards */}
        <section className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
          <RevealGroup
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            stagger={0.07}
          >
            {services.map((s, i) => {
              const accent = accentClasses[s.accent];
              const Icon = s.icon;
              return (
                <RevealItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="cta-lift group relative block h-full bg-white border border-black/[0.06] rounded-[20px] sm:rounded-[24px] overflow-hidden"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${accent.gradient} opacity-70 pointer-events-none`}
                    />
                    <div className="relative p-6 sm:p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        <span
                          className={`w-12 h-12 rounded-2xl ${accent.iconWrap} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </span>
                        <span className="font-serif text-[15px] text-ink-400">
                          0{i + 1}
                        </span>
                      </div>
                      <h2 className="font-serif text-[21px] sm:text-[25px] tracking-tight text-black mb-2 group-hover:text-accent-ink transition-colors">
                        {s.name}
                      </h2>
                      <p className="text-[14px] sm:text-[15px] text-[#52525B] leading-relaxed flex-1 mb-5">
                        {s.intro}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-accent-ink group-hover:gap-2.5 transition-all">
                        Learn more about {s.name}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}

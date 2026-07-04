import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/lib/services";
import { breadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services | Websites, Automation & Internal Systems",
  description:
    "anymus builds the whole stack: websites, automation, and internal systems, as one connected system for growing businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | anymus",
    description:
      "Digital presence, automation, and internal systems. One connected stack.",
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
      <main className="pt-[92px] sm:pt-[116px]">
        {/* Hero */}
        <section className="max-w-[1100px] mx-auto px-5 sm:px-8 pb-10 sm:pb-14">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-10 sm:mb-14">
              <span className="anno">Anymus — Services</span>
              <span className="anno anno-mark hidden sm:block">The index</span>
            </div>
          </Reveal>
          <Reveal className="flex flex-col items-start">
            <h1 className="font-serif font-light text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-[-0.025em] text-inkwarm mb-6 max-w-[680px]">
              Three services.
              <br />
              One <span className="italic text-mark">connected</span> system.
            </h1>
            <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed max-w-[560px]">
              Most agencies hand you one piece and leave you to wire it
              together. We build the whole stack: the site out front, the
              automations behind it, and the tools you run on, so nothing is
              stitched together after the fact.
            </p>
          </Reveal>
        </section>

        {/* Service cards */}
        <section className="max-w-[1100px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
          <RevealGroup
            className="grid grid-cols-1 md:grid-cols-3 border rule divide-y md:divide-y-0 md:divide-x divide-[rgba(28,24,18,0.16)] rounded-[2px] overflow-hidden"
            stagger={0.06}
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealItem key={s.slug} className="bg-sheet-lift/60">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative block h-full p-7 sm:p-9 hover:bg-sheet-lift transition-colors"
                  >
                    <span className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-mark transition-all duration-500" />
                    <div className="flex items-start justify-between mb-8 sm:mb-10">
                      <span className="w-11 h-11 rounded-[2px] border rule bg-sheet flex items-center justify-center text-inkwarm">
                        <Icon className="w-5 h-5" strokeWidth={1.6} />
                      </span>
                      <span className="anno group-hover:text-mark transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-serif font-light text-[24px] sm:text-[28px] tracking-[-0.01em] text-inkwarm mb-2">
                      {s.name}
                    </h2>
                    <p className="text-[13.5px] sm:text-[14px] text-inkwarm-soft leading-relaxed mb-6 max-w-[360px]">
                      {s.intro}
                    </p>
                    <span className="u-draw inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-inkwarm">
                      Read the spec
                      <ArrowUpRight className="w-4 h-4 text-mark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </span>
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

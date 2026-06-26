import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { services, accentTile } from "@/lib/services";
import { breadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services — Websites, Automation & Internal Systems",
  description:
    "anymus builds the whole stack — websites, automation, and internal systems — as one connected system for growing businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — anymus",
    description:
      "Digital presence, automation, and internal systems — one connected stack.",
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
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14">
          <Reveal className="flex flex-col items-start">
            <p className="eyebrow mb-4 sm:mb-5">Services</p>
            <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-black mb-5 max-w-[680px]">
              Three services. One connected system.
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-ink-600 leading-relaxed max-w-[600px]">
              Most agencies hand you one piece and leave you to wire it
              together. We build the whole stack — the site out front, the
              automations behind it, and the tools you run on — so nothing is
              stitched together after the fact.
            </p>
          </Reveal>
        </section>

        {/* Service cards */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
          <RevealGroup
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line rounded-[20px] sm:rounded-[24px] overflow-hidden border border-line"
            stagger={0.06}
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              const a = accentTile[s.accent];
              return (
                <RevealItem key={s.slug} className="bg-white">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative block h-full p-7 sm:p-9 hover:bg-[#FAFAF8] transition-colors"
                  >
                    <span
                      className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full ${a.bar} transition-all duration-500`}
                    />
                    <div className="flex items-start justify-between mb-8 sm:mb-10">
                      <span
                        className={`w-11 h-11 rounded-xl ${a.tile} ${a.text} flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.7} />
                      </span>
                      <span className="font-mono text-[12px] text-ink-400">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-serif text-[21px] sm:text-[24px] tracking-tight text-black mb-2">
                      {s.name}
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-ink-600 leading-relaxed mb-6 max-w-[360px]">
                      {s.intro}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-black">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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

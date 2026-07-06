import type { Metadata } from "next";
import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
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
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header id="top" className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3">
              <span className="anno">Anymus — Services</span>
              <span className="anno anno-mark">Table of contents</span>
            </div>
          </Reveal>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm">
                Three chapters.
                <br />
                One <span className="italic text-mark">connected</span> system.
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  Most agencies hand you one piece and leave you to wire it
                  together. We build the whole stack — the site out front, the
                  automations behind it, and the tools you run on — so nothing
                  is stitched together after the fact.
                </p>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── The chain — how the chapters connect ────────── */}
        <div className="graph-bg bg-sheet-deep/60 border-y rule overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-start sm:justify-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
            {services.map((s, i) => (
              <span key={s.slug} className="flex items-center gap-3 sm:gap-6 shrink-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-inkwarm-soft whitespace-nowrap">
                  <span className="text-mark">{`0${i + 1}`}</span> {s.name}
                </span>
                {i < services.length - 1 && (
                  <span aria-hidden className="font-mono text-[13px] text-mark">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ── Contents ledger ─────────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <RevealGroup stagger={0.09}>
            {services.map((s, i) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-5 border-t rule py-9 sm:py-12 transition-colors active:bg-sheet-deep/60 hover:bg-sheet-lift/40"
                >
                  {/* Chapter stamp */}
                  <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2">
                    <span className="anno anno-mark">{`Doc. 0${i + 1}`}</span>
                    <span className="anno hidden sm:block">{s.serviceType}</span>
                  </div>

                  {/* Name + intro */}
                  <div className="lg:col-span-6 min-w-0">
                    <h2 className="font-serif font-light text-[clamp(30px,5vw,56px)] leading-[1.02] tracking-[-0.025em] text-inkwarm">
                      <span className="u-draw">{s.name}</span>
                      <span
                        aria-hidden
                        className="text-mark inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2"
                      >
                        →
                      </span>
                    </h2>
                    <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-inkwarm-soft leading-relaxed max-w-[480px]">
                      {s.body.split(". ")[0]}.
                    </p>
                  </div>

                  {/* Deliverables index */}
                  <div className="lg:col-span-4 lg:border-l lg:rule lg:pl-6">
                    <p className="anno mb-3">In this chapter</p>
                    <ul className="space-y-2">
                      {s.outcomes.map((o, j) => (
                        <li
                          key={o.title}
                          className="flex items-baseline gap-3 text-[13px] sm:text-[13.5px] text-inkwarm leading-snug"
                        >
                          <span className="font-mono text-[11px] text-inkwarm-faint shrink-0">
                            {`0${i + 1}.${j + 1}`}
                          </span>
                          {o.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </RevealItem>
            ))}
            <div className="border-t rule" />
          </RevealGroup>

          {/* Footnote */}
          <p className="anno mt-6">
            <span className="text-mark">✳</span> Each chapter stands alone —
            together they run the business.
          </p>
        </section>
      </main>
      <MobileCtaBar />
      <CtaBand />
      <Footer />
    </>
  );
}

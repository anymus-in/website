import type { Metadata } from "next";
import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";
import Highlight from "@/components/motion/Highlight";
import JsonLd from "@/components/seo/JsonLd";
import { industries } from "@/lib/industries";
import { breadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Industries | Systems for the Sectors We Know",
  description:
    "How Anymus applies websites, automation, and internal systems to specific industries — clinics, real estate, retail, professional services, education, and manufacturing.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | Anymus",
    description:
      "The same wall, a different shape in every sector — and the systems that get through it.",
    url: "/industries",
  },
};

export default function IndustriesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header id="top" className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3">
              <span className="anno">Anymus — Industries</span>
              <span className="anno anno-mark">Sector surveys</span>
            </div>
            <div aria-hidden className="ruler-ticks h-[8px] opacity-60" />
          </Reveal>

          {/* ── Title block ──────────────────────────────── */}
          <div className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <LineReveal
                as="h1"
                className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm"
                lines={[
                  "Same wall.",
                  <span key="l2">
                    Different{" "}
                    <Highlight color="#C8391B">
                      <span className="italic text-mark">shape</span>
                    </Highlight>
                    .
                  </span>,
                ]}
              />
              <Reveal className="lg:col-span-4 mt-8 lg:mt-0" delay={0.25}>
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  Every sector hits the growth wall in its own way — missed
                  calls in a clinic, cold leads in real estate, register-bound
                  orders in a factory. These surveys map how, and what we
                  deploy.
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        {/* ── Sector ledger ───────────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-14 sm:pb-20">
          <RevealGroup stagger={0.08}>
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <RevealItem key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 border-t rule py-8 sm:py-10 transition-colors active:bg-sheet-deep/60 hover:bg-sheet-lift/40 focus-visible:outline-2 focus-visible:outline-mark focus-visible:-outline-offset-2"
                  >
                    {/* Sector stamp */}
                    <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2">
                      <span className="anno anno-mark">{`Sector I.${String(i + 1).padStart(2, "0")}`}</span>
                      <Icon
                        aria-hidden
                        className="w-4 h-4 lg:mt-3 text-inkwarm-faint group-hover:text-mark transition-colors self-center lg:self-auto"
                      />
                    </div>

                    {/* Name + intro */}
                    <div className="lg:col-span-6 min-w-0">
                      <h2 className="font-serif font-light text-[clamp(24px,4vw,42px)] leading-[1.06] tracking-[-0.02em] text-inkwarm">
                        <span className="u-draw">{ind.name}</span>
                        <span
                          aria-hidden
                          className="text-mark inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2"
                        >
                          →
                        </span>
                      </h2>
                      <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-inkwarm-soft leading-relaxed max-w-[520px]">
                        {ind.intro}
                      </p>
                    </div>

                    {/* First symptom */}
                    <div className="lg:col-span-4 lg:border-l lg:rule lg:pl-6">
                      <p className="anno mb-2">Recognisable by</p>
                      <p className="font-mono text-[12px] text-inkwarm-soft leading-relaxed">
                        ☐ {ind.signs[0]}
                      </p>
                    </div>
                  </Link>
                </RevealItem>
              );
            })}
            <div className="border-t rule" />
          </RevealGroup>

          <p className="anno mt-6">
            <span className="text-mark">✳</span> Don&rsquo;t see your sector?
            The wall is universal — <Link href="/schedule-call" className="u-draw text-mark">talk to us</Link> anyway.
          </p>
        </section>
      </main>
      <MobileCtaBar />
      <CtaBand />
      <Footer />
    </>
  );
}

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
import { solutions, solutionsForService } from "@/lib/solutions";
import { breadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Solutions | Playbooks for the Work That Runs on Memory",
  description:
    "Nine playbooks for the problems growing businesses hit — WhatsApp lead capture, CRM setup, booking and billing automation, client portals, dashboards, and more.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | anymus",
    description:
      "Playbooks for the work that still runs on memory — lead capture, follow-ups, billing, portals, dashboards.",
    url: "/solutions",
  },
};

export default function SolutionsHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header id="top" className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3">
              <span className="anno">Anymus — Solutions</span>
              <span className="anno anno-mark">Playbook index</span>
            </div>
          </Reveal>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm">
                Playbooks for work that
                <br />
                still runs on <span className="italic text-mark">memory</span>.
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  Each playbook takes one specific leak — a lead that can be
                  forgotten, an invoice made by hand, a report compiled every
                  Friday — and hands it to a system that doesn&rsquo;t forget.
                </p>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Index strip ─────────────────────────────────── */}
        <div className="graph-bg bg-sheet-deep/60 border-y rule overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-start sm:justify-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-inkwarm-soft whitespace-nowrap">
              <span className="text-mark">{String(solutions.length).padStart(2, "0")}</span>{" "}
              playbooks
            </span>
            <span aria-hidden className="font-mono text-[13px] text-mark">·</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-inkwarm-soft whitespace-nowrap">
              filed under <span className="text-mark">03</span> services
            </span>
            <span aria-hidden className="font-mono text-[13px] text-mark">·</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-inkwarm-soft whitespace-nowrap">
              one connected system
            </span>
          </div>
        </div>

        {/* ── Ledger, grouped by parent service ───────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          {services.map((service, gi) => {
            const group = solutionsForService(service.slug);
            if (group.length === 0) return null;
            return (
              <div key={service.slug} className={gi > 0 ? "mt-16 sm:mt-24" : undefined}>
                <Reveal>
                  <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-2">
                    <span className="eyebrow !mb-0">
                      {`Filed under Doc. 0${gi + 1} — `}
                      <Link
                        href={`/services/${service.slug}`}
                        className="u-draw hover:text-mark transition-colors"
                      >
                        {service.name}
                      </Link>
                    </span>
                    <span className="anno hidden sm:block">{`${group.length} playbook${group.length > 1 ? "s" : ""}`}</span>
                  </div>
                </Reveal>
                <RevealGroup stagger={0.08}>
                  {group.map((s) => {
                    const n = solutions.findIndex((x) => x.slug === s.slug) + 1;
                    const file = `S.${String(n).padStart(2, "0")}`;
                    const Icon = s.icon;
                    return (
                      <RevealItem key={s.slug}>
                        <Link
                          href={`/solutions/${s.slug}`}
                          className="group grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 border-t rule py-7 sm:py-9 transition-colors active:bg-sheet-deep/60 hover:bg-sheet-lift/40"
                        >
                          {/* File stamp */}
                          <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2">
                            <span className="anno anno-mark">{`File ${file}`}</span>
                            <Icon
                              aria-hidden
                              className="hidden lg:block w-4 h-4 mt-3 text-inkwarm-faint group-hover:text-mark transition-colors"
                            />
                          </div>

                          {/* Name + intro */}
                          <div className="lg:col-span-6 min-w-0">
                            <h2 className="font-serif font-light text-[clamp(24px,4vw,40px)] leading-[1.05] tracking-[-0.02em] text-inkwarm">
                              <span className="u-draw">{s.name}</span>
                              <span
                                aria-hidden
                                className="text-mark inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2"
                              >
                                →
                              </span>
                            </h2>
                            <p className="mt-2.5 text-[14px] sm:text-[15px] text-inkwarm-soft leading-relaxed max-w-[480px]">
                              {s.intro}
                            </p>
                          </div>

                          {/* First symptom, as a marginal pull */}
                          <div className="lg:col-span-4 lg:border-l lg:rule lg:pl-6">
                            <p className="anno mb-2">You&rsquo;ll recognise it as</p>
                            <p className="font-mono text-[12px] text-inkwarm-soft leading-relaxed">
                              ☐ {s.signs[0]}
                            </p>
                          </div>
                        </Link>
                      </RevealItem>
                    );
                  })}
                  <div className="border-t rule" />
                </RevealGroup>
              </div>
            );
          })}

          {/* Footnote */}
          <p className="anno mt-8">
            <span className="text-mark">✳</span> If someone has to remember it,
            the system is broken. Each playbook removes one thing from memory.
          </p>
        </section>
      </main>
      <MobileCtaBar />
      <CtaBand />
      <Footer />
    </>
  );
}

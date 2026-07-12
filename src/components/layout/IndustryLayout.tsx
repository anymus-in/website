import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import ServiceFaq from "@/components/sections/ServiceFaq";
import SystemFlowVisual from "@/components/sections/SystemFlowVisual";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getService } from "@/lib/services";
import { getSolution } from "@/lib/solutions";
import { industries, type Industry } from "@/lib/industries";

/**
 * Industry detail page — a "sector survey" in the same technical-document
 * voice as the service chapters and solution playbooks: how one vertical
 * hits the wall, and which services/playbooks apply.
 */
export default function IndustryLayout({ industry }: { industry: Industry }) {
  const index = industries.findIndex((i) => i.slug === industry.slug);
  const sector = `I.${String(index + 1).padStart(2, "0")}`;
  const prev = industries[(index + industries.length - 1) % industries.length];
  const next = industries[(index + 1) % industries.length];
  const recServices = industry.relatedServiceSlugs
    .map((s) => getService(s))
    .filter((s) => s !== undefined);
  const playbooks = industry.relatedSolutionSlugs
    .map((s) => getSolution(s))
    .filter((s) => s !== undefined);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header id="top" className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <div className="flex items-baseline justify-between border-b rule-strong pb-3 gap-4">
            <nav aria-label="Breadcrumb" className="min-w-0">
              <ol className="anno flex items-center gap-2 whitespace-nowrap overflow-hidden">
                <li className="hidden sm:block">
                  <Link
                    href="/"
                    className="inline-flex items-center min-h-11 -my-4 sm:min-h-0 sm:my-0 hover:text-mark transition-colors"
                  >
                    Anymus
                  </Link>
                </li>
                <li aria-hidden className="hidden sm:block">/</li>
                <li>
                  <Link
                    href="/industries"
                    className="inline-flex items-center min-h-11 -my-4 sm:min-h-0 sm:my-0 hover:text-mark transition-colors"
                  >
                    Industries
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="truncate" aria-current="page">
                  {industry.shortName}
                </li>
              </ol>
            </nav>
            <span className="anno anno-mark shrink-0">{`Sector ${sector}`}</span>
          </div>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <p className="eyebrow mb-5 sm:mb-7">{`Sector ${sector} — ${industry.eyebrow}`}</p>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(34px,6.5vw,84px)] leading-[1.04] tracking-[-0.03em] text-inkwarm">
                {industry.intro}
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0 flex flex-col items-start gap-6">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  {industry.body}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:pl-5">
                  <a
                    href="/schedule-call"
                    className="btn-stamp px-6 py-3.5 text-[14px] font-medium tracking-[-0.01em]"
                  >
                    Book a discovery call
                    <span aria-hidden className="font-mono text-[12px]">→</span>
                  </a>
                  <Link
                    href="/industries"
                    className="u-draw inline-flex items-center min-h-11 text-[13px] font-medium text-inkwarm"
                  >
                    All industries
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Spec strip ──────────────────────────────────── */}
        <div className="bg-mark border-y border-mark-deep overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              {`Sector ${sector} · ${industry.shortName}`}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/70 whitespace-nowrap hidden sm:block">
              Built around how you already work
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              ✳ No lock-in
            </span>
          </div>
        </div>

        {/* ── Fig. — a day on the system ──────────────────── */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 top-[38%] graph-bg bg-sheet-deep/70 border-t rule"
          />
          <div className="relative max-w-[820px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
            <Reveal>
              <figure className="reg-marks plate p-3 sm:p-5">
                <span aria-hidden className="reg reg-tl" />
                <span aria-hidden className="reg reg-tr" />
                <span aria-hidden className="reg reg-bl" />
                <span aria-hidden className="reg reg-br" />
                <div className="relative overflow-hidden border rule">
                  <SystemFlowVisual
                    label="A day on the system"
                    steps={industry.flow}
                    tally={industry.flowTally}
                  />
                </div>
              </figure>
            </Reveal>
            <p className="anno text-center pt-5 pb-10 sm:pb-12">
              {`Fig. ${sector} — a working day in ${industry.shortName.toLowerCase()}`}
            </p>
          </div>
        </div>

        {/* ── Sec. 1 — Diagnostic ─────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">{`Sec. ${sector}.1 — Diagnostic`}</span>
            <span className="anno hidden sm:block">Sound familiar?</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[400px]">
                Where {industry.shortName.toLowerCase()} businesses{" "}
                <span className="italic text-mark">leak</span>.
              </h2>
              <div className="relative mt-8 max-w-[360px]">
                <span
                  aria-hidden
                  className="absolute -top-[5px] left-8 w-2.5 h-2.5 rounded-full bg-mark shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                />
                <div className="border rule bg-sheet-lift rounded-[2px] px-5 py-4 rotate-[-0.6deg]">
                  <p className="font-mono text-[11.5px] text-inkwarm-soft leading-relaxed">
                    <span className="text-mark">Field note:</span> these come
                    from real engagements in this sector — not a template.
                  </p>
                </div>
              </div>
            </Reveal>
            <RevealGroup className="lg:col-span-7" stagger={0.07}>
              {industry.signs.map((sign, i) => (
                <RevealItem
                  key={sign}
                  className="group border-t rule py-5 sm:py-6 grid grid-cols-[minmax(44px,auto)_1fr] gap-x-4 sm:gap-x-6 items-baseline"
                >
                  <span className="font-mono text-[11px] text-inkwarm-faint">
                    {`☐ ${sector}.1.${i + 1}`}
                  </span>
                  <p className="font-serif text-[17px] sm:text-[20px] leading-snug text-inkwarm">
                    {sign}
                  </p>
                </RevealItem>
              ))}
              <div className="border-t rule" />
            </RevealGroup>
          </div>
        </section>

        {/* ── Sec. 2 — Prescription ───────────────────────── */}
        <section className="graph-bg bg-sheet-deep/60 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">{`Sec. ${sector}.2 — Prescription`}</span>
              <span className="anno hidden sm:block">What we&rsquo;d deploy</span>
            </div>
            <Reveal>
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm mb-10 sm:mb-14 max-w-[620px]">
                The chapters and playbooks that{" "}
                <span className="italic text-mark">apply</span>.
              </h2>
            </Reveal>

            {/* Services */}
            <p className="anno mb-4">Chapters</p>
            <RevealGroup
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-14"
              stagger={0.08}
            >
              {recServices.map((s) => (
                <RevealItem key={s.slug} className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block border rule bg-sheet-lift h-full px-6 pt-6 pb-5 rounded-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_rgba(200,57,27,0.9)] hover:border-mark"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="anno anno-mark">Service</span>
                      <span
                        aria-hidden
                        className="font-mono text-[12px] text-mark transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                    <p className="font-serif text-[20px] sm:text-[22px] leading-tight text-inkwarm mb-2">
                      {s.name}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed">
                      {s.intro}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Playbooks */}
            <p className="anno mb-4">Playbooks</p>
            <RevealGroup
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
              stagger={0.08}
            >
              {playbooks.map((p) => (
                <RevealItem key={p.slug} className="h-full">
                  <Link
                    href={`/solutions/${p.slug}`}
                    className="group block border rule bg-sheet-lift h-full px-6 pt-6 pb-5 rounded-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_rgba(200,57,27,0.9)] hover:border-mark"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="anno anno-mark">Playbook</span>
                      <span
                        aria-hidden
                        className="font-mono text-[12px] text-mark transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                    <p className="font-serif text-[18px] sm:text-[20px] leading-tight text-inkwarm mb-2">
                      {p.name}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed">
                      {p.intro}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Sec. 3 — Questions ──────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">{`Sec. ${sector}.3 — Questions`}</span>
            <span className="anno hidden sm:block">Asked in this sector</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[340px]">
                Fair questions, straight answers.
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <ServiceFaq faqs={industry.faqs} />
            </div>
          </div>
        </section>

        {/* ── Other sectors ───────────────────────────────── */}
        <nav
          aria-label="Other industries"
          className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24"
        >
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-2">
            <span className="eyebrow !mb-0">Other sectors</span>
            <span className="anno hidden sm:block">Same wall, different shape</span>
          </div>
          {[prev, next]
            .filter((s, i, arr) => s.slug !== industry.slug && arr.indexOf(s) === i)
            .map((s) => {
              const sSector = `I.${String(
                industries.findIndex((x) => x.slug === s.slug) + 1,
              ).padStart(2, "0")}`;
              return (
                <Link
                  key={s.slug}
                  href={`/industries/${s.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-b rule py-6 sm:py-8 transition-colors active:bg-sheet-deep/60"
                >
                  <span className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                    <span className="anno anno-mark shrink-0">{`Sector ${sSector}`}</span>
                    <span className="min-w-0">
                      <span className="u-draw font-serif font-light text-[clamp(24px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-inkwarm block">
                        {s.name}
                      </span>
                      <span className="block mt-1.5 text-[13px] sm:text-[14px] text-inkwarm-soft truncate">
                        {s.intro}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="font-serif font-light text-[clamp(22px,3vw,34px)] leading-none text-mark shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              );
            })}
        </nav>

        {/* ── Closing ─────────────────────────────────────── */}
        <section id="start" className="relative bg-inkwarm graph-bg-dark overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
            <Reveal>
              <p className="anno anno-mark mb-6">{`Sector ${sector} — end of survey`}</p>
              <h2 className="font-serif font-light text-[clamp(30px,5.5vw,64px)] leading-[1.05] tracking-[-0.025em] text-sheet max-w-[760px]">
                Ready to build the system your{" "}
                <span className="italic text-mark">
                  {industry.shortName.toLowerCase()}
                </span>{" "}
                business runs on?
              </h2>
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="/schedule-call"
                  className="btn-stamp btn-stamp-paper px-7 sm:px-9 py-4 text-[15px] font-medium tracking-[-0.01em]"
                >
                  Book a discovery call
                  <span aria-hidden className="font-mono text-[12px]">→</span>
                </a>
                <span className="anno !text-sheet/45">
                  Free 30-min call · no lock-in · reply &lt; 24h
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <MobileCtaBar />
      <Footer />
    </>
  );
}

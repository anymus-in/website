import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import ServiceFaq from "@/components/sections/ServiceFaq";
import SpreadVisual from "@/components/sections/SpreadVisuals";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services, type Service } from "@/lib/services";
import { solutions, solutionsForService } from "@/lib/solutions";

/**
 * Service detail page, set as a numbered chapter of the same technical
 * document as the homepage — Doc. 01/02/03. Same voice throughout: mono
 * annotations, serif statements, plates with registration marks, graph-paper
 * bands, and the red mark.
 */
export default function ServiceLayout({ service }: { service: Service }) {
  const index = services.findIndex((s) => s.slug === service.slug);
  const doc = `0${index + 1}`;
  const prev = services[(index + services.length - 1) % services.length];
  const next = services[(index + 1) % services.length];
  const playbooks = solutionsForService(service.slug);

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
                    href="/services"
                    className="inline-flex items-center min-h-11 -my-4 sm:min-h-0 sm:my-0 hover:text-mark transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="truncate" aria-current="page">
                  {service.name}
                </li>
              </ol>
            </nav>
            <span className="anno anno-mark shrink-0">{`Doc. ${doc}`}</span>
          </div>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <p className="eyebrow mb-5 sm:mb-7">{`Sec. ${doc} — ${service.serviceType}`}</p>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm">
                {service.intro}
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0 flex flex-col items-start gap-6">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  {service.body}
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
                    href="/services"
                    className="u-draw inline-flex items-center min-h-11 text-[13px] font-medium text-inkwarm"
                  >
                    All services
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Fig. — the plate on a blueprint band ────────── */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 top-[34%] graph-bg bg-sheet-deep/70 border-t rule"
          />
          <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8">
            <Reveal>
              <figure className="reg-marks plate p-4 sm:p-6 md:p-8">
                <span aria-hidden className="reg reg-tl" />
                <span aria-hidden className="reg reg-tr" />
                <span aria-hidden className="reg reg-bl" />
                <span aria-hidden className="reg reg-br" />
                <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                  <SpreadVisual visualKey={service.visualKey} />
                </div>
              </figure>
            </Reveal>
            <p className="anno text-center pt-5 pb-10 sm:pb-14">
              {`Fig. ${doc} — ${service.eyebrow} in operation`}
            </p>
          </div>
        </div>

        {/* ── Spec strip — the red band ───────────────────── */}
        <div className="bg-mark border-y border-mark-deep overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              {`Doc. ${doc} · ${service.name}`}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/70 whitespace-nowrap hidden sm:block">
              Weeks, not months
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              ✳ No lock-in
            </span>
          </div>
        </div>

        {/* ── Sec. N.1 — Diagnostic ───────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">{`Sec. ${doc}.1 — Diagnostic`}</span>
            <span className="anno hidden sm:block">Is this you?</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[400px]">
                Signs it&rsquo;s time for{" "}
                <span className="italic text-mark">
                  {service.eyebrow.toLowerCase()}
                </span>
                .
              </h2>
              {/* Pinned margin note */}
              <div className="relative mt-8 max-w-[360px]">
                <span
                  aria-hidden
                  className="absolute -top-[5px] left-8 w-2.5 h-2.5 rounded-full bg-mark shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                />
                <div className="border rule bg-sheet-lift rounded-[2px] px-5 py-4 rotate-[-0.6deg]">
                  <p className="font-mono text-[11.5px] text-inkwarm-soft leading-relaxed">
                    <span className="text-mark">Field note:</span> if two or more
                    of these sound familiar, it&rsquo;s worth a conversation.
                  </p>
                </div>
              </div>
              <a
                href="/schedule-call"
                className="u-draw inline-flex items-center min-h-11 gap-1.5 mt-6 text-[14px] font-medium text-mark"
              >
                Talk it through
                <span aria-hidden className="font-mono text-[12px]">→</span>
              </a>
            </Reveal>
            <RevealGroup className="lg:col-span-7" stagger={0.07}>
              {service.signs.map((sign, i) => (
                <RevealItem
                  key={sign}
                  className="group border-t rule py-5 sm:py-6 grid grid-cols-[minmax(44px,auto)_1fr] gap-x-4 sm:gap-x-6 items-baseline"
                >
                  <span className="font-mono text-[11px] text-inkwarm-faint">
                    {`☐ ${doc}.1.${i + 1}`}
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

        {/* ── Sec. N.2 — Deliverables (stamped tickets) ───── */}
        <section className="graph-bg bg-sheet-deep/60 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">{`Sec. ${doc}.2 — Deliverables`}</span>
              <span className="anno hidden sm:block">What you get</span>
            </div>
            <Reveal>
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm mb-10 sm:mb-14 max-w-[560px]">
                Outcomes, not just <span className="italic">software</span>.
              </h2>
            </Reveal>
            <RevealGroup
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
              stagger={0.09}
            >
              {service.outcomes.map((o, i) => (
                <RevealItem key={o.title} className="h-full">
                  <div className="group relative border rule bg-sheet-lift h-full px-6 pt-6 pb-5 rounded-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_rgba(200,57,27,0.9)] hover:border-mark">
                    <div className="flex items-baseline justify-between mb-5">
                      <span className="anno anno-mark">{`✳ Item ${i + 1}`}</span>
                      <span className="anno !text-[11px] sm:!text-[9px]">{`0${i + 1}/0${service.outcomes.length}`}</span>
                    </div>
                    <p className="font-serif text-[20px] sm:text-[22px] leading-tight text-inkwarm mb-3">
                      {o.title}
                    </p>
                    <p className="text-[13.5px] sm:text-[14px] text-inkwarm-soft leading-relaxed">
                      {o.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ── Sec. N.3 — Procedure (the spine) ────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">{`Sec. ${doc}.3 — Procedure`}</span>
            <span className="anno hidden sm:block">How it works</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[360px]">
                What an engagement looks like.
              </h2>
              <p className="mt-6 text-[14px] text-inkwarm-soft leading-relaxed max-w-[340px]">
                You&rsquo;ll know what &ldquo;done&rdquo; means before we start —
                and see it running before we leave.
              </p>
            </Reveal>
            <div className="lg:col-span-8 relative">
              <div aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
              <div className="space-y-10 sm:space-y-12">
                {service.process.map((step, i) => (
                  <Reveal key={step.title} className="relative pl-10" amount={0.3}>
                    <span
                      aria-hidden
                      className="absolute left-0 top-[4px] w-[11px] h-[11px] rounded-full border-2 border-mark bg-sheet"
                    />
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-mark block mb-1.5">
                      {`Step ${i + 1} · 0${i + 1}/0${service.process.length}`}
                    </span>
                    <h3 className="font-serif font-light text-[26px] sm:text-[30px] leading-none text-inkwarm mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-inkwarm-soft leading-relaxed max-w-[560px]">
                      {step.description}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Sec. N.4 — Questions ────────────────────────── */}
        <section className="bg-sheet-deep/40 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">{`Sec. ${doc}.4 — Questions`}</span>
              <span className="anno hidden sm:block">Asked before signing</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <Reveal className="lg:col-span-4">
                <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[340px]">
                  Fair questions, straight answers.
                </h2>
              </Reveal>
              <div className="lg:col-span-8">
                <ServiceFaq faqs={service.faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Sec. N.5 — Playbooks filed under this chapter ─ */}
        {playbooks.length > 0 && (
          <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">{`Sec. ${doc}.5 — Playbooks`}</span>
              <span className="anno hidden sm:block">Filed under this chapter</span>
            </div>
            <Reveal>
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm mb-10 sm:mb-14 max-w-[620px]">
                Specific problems this chapter{" "}
                <span className="italic text-mark">solves</span>.
              </h2>
            </Reveal>
            <RevealGroup
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
              stagger={0.08}
            >
              {playbooks.map((p) => {
                const pFile = `S.${String(
                  solutions.findIndex((x) => x.slug === p.slug) + 1,
                ).padStart(2, "0")}`;
                return (
                  <RevealItem key={p.slug} className="h-full">
                    <Link
                      href={`/solutions/${p.slug}`}
                      className="group block border rule bg-sheet-lift h-full px-6 pt-6 pb-5 rounded-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_rgba(200,57,27,0.9)] hover:border-mark"
                    >
                      <div className="flex items-baseline justify-between mb-5">
                        <span className="anno anno-mark">{`File ${pFile}`}</span>
                        <span
                          aria-hidden
                          className="font-mono text-[12px] text-mark transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                      <p className="font-serif text-[19px] sm:text-[21px] leading-tight text-inkwarm mb-2.5">
                        {p.name}
                      </p>
                      <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed">
                        {p.intro}
                      </p>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </section>
        )}

        {/* ── Continue reading — chapter navigation ───────── */}
        <nav
          aria-label="Other services"
          className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24"
        >
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-2">
            <span className="eyebrow !mb-0">Continue reading</span>
            <span className="anno hidden sm:block">One connected system</span>
          </div>
          {[prev, next]
            .filter((s, i, arr) => arr.indexOf(s) === i)
            .map((s) => {
              const sDoc = `0${services.findIndex((x) => x.slug === s.slug) + 1}`;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-b rule py-6 sm:py-8 transition-colors active:bg-sheet-deep/60"
                >
                  <span className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                    <span className="anno anno-mark shrink-0">{`Doc. ${sDoc}`}</span>
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

        {/* ── Closing — the one action ────────────────────── */}
        <section id="start" className="relative bg-inkwarm graph-bg-dark overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
            <Reveal>
              <p className="anno anno-mark mb-6">{`Doc. ${doc} — end of chapter`}</p>
              <h2 className="font-serif font-light text-[clamp(30px,5.5vw,64px)] leading-[1.05] tracking-[-0.025em] text-sheet max-w-[720px]">
                Ready to put {service.eyebrow.toLowerCase()} to{" "}
                <span className="italic text-mark">work</span>?
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

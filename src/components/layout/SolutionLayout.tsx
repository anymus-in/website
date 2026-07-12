import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import ServiceFaq from "@/components/sections/ServiceFaq";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getService } from "@/lib/services";
import { solutions, type Solution } from "@/lib/solutions";
import { getIndustry } from "@/lib/industries";

/**
 * Solution detail page — a "playbook file" in the same technical-document
 * voice as the service chapters (Doc. 01/02/03). Lighter than ServiceLayout:
 * the centrepiece is the before/after spread instead of an animated plate.
 */
export default function SolutionLayout({ solution }: { solution: Solution }) {
  const index = solutions.findIndex((s) => s.slug === solution.slug);
  const file = `S.${String(index + 1).padStart(2, "0")}`;
  const parent = getService(solution.relatedServiceSlug);
  const prev = solutions[(index + solutions.length - 1) % solutions.length];
  const next = solutions[(index + 1) % solutions.length];
  const sectors = solution.relatedIndustrySlugs
    .map((s) => getIndustry(s))
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
                    href="/solutions"
                    className="inline-flex items-center min-h-11 -my-4 sm:min-h-0 sm:my-0 hover:text-mark transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="truncate" aria-current="page">
                  {solution.name}
                </li>
              </ol>
            </nav>
            <span className="anno anno-mark shrink-0">{`File ${file}`}</span>
          </div>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-16">
            <p className="eyebrow mb-5 sm:mb-7">
              {`Playbook ${file}`}
              <span className="hidden sm:inline">{` — ${solution.serviceType}`}</span>
            </p>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(36px,6.5vw,84px)] leading-[1.04] tracking-[-0.03em] text-inkwarm">
                {solution.intro}
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0 flex flex-col items-start gap-6">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  {solution.metaDescription}
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
                    href="/solutions"
                    className="u-draw inline-flex items-center min-h-11 text-[13px] font-medium text-inkwarm"
                  >
                    All solutions
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Spec strip — parent service ─────────────────── */}
        {parent && (
          <div className="bg-mark border-y border-mark-deep overflow-hidden">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
                {`File ${file} · ${solution.name}`}
              </span>
              <Link
                href={`/services/${parent.slug}`}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap hover:text-sheet transition-colors"
              >
                {`Delivered under ${parent.name} ↗`}
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/70 whitespace-nowrap hidden sm:block">
                ✳ Weeks, not months
              </span>
            </div>
          </div>
        )}

        {/* ── Sec. 1 — Before / After spread ──────────────── */}
        <section className="graph-bg bg-sheet-deep/60 border-b rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">{`Sec. ${file}.1 — The problem, then the system`}</span>
              <span className="anno hidden sm:block">Before / After</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              <Reveal>
                <div className="h-full border rule bg-sheet-lift rounded-[2px] px-6 sm:px-8 pt-6 pb-7">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="anno">Exhibit A — today</span>
                    <span className="font-mono text-[11px] text-inkwarm-faint">manual</span>
                  </div>
                  <h2 className="font-serif font-light text-[24px] sm:text-[28px] leading-tight text-inkwarm mb-4">
                    The manual loop.
                  </h2>
                  <p className="text-[14.5px] sm:text-[15px] text-inkwarm-soft leading-relaxed">
                    {solution.problem}
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="relative h-full reg-marks border border-mark bg-sheet rounded-[2px] px-6 sm:px-8 pt-6 pb-7 shadow-[6px_6px_0_0_rgba(200,57,27,0.9)]">
                  <span aria-hidden className="reg reg-tl" />
                  <span aria-hidden className="reg reg-tr" />
                  <span aria-hidden className="reg reg-bl" />
                  <span aria-hidden className="reg reg-br" />
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="anno anno-mark">Exhibit B — on the system</span>
                    <span className="font-mono text-[11px] text-mark">automatic</span>
                  </div>
                  <h2 className="font-serif font-light text-[24px] sm:text-[28px] leading-tight text-inkwarm mb-4">
                    The system handles it.
                  </h2>
                  <p className="text-[14.5px] sm:text-[15px] text-inkwarm-soft leading-relaxed">
                    {solution.outcome}
                  </p>
                </div>
              </Reveal>
            </div>
            <p className="anno mt-6">
              <span className="text-mark">✳</span> If someone has to remember it,
              the system is broken.
            </p>
          </div>
        </section>

        {/* ── Sec. 2 — Diagnostic ─────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">{`Sec. ${file}.2 — Diagnostic`}</span>
            <span className="anno hidden sm:block">Is this you?</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[400px]">
                Signs this playbook <span className="italic text-mark">applies</span>.
              </h2>
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
              {solution.signs.map((sign, i) => (
                <RevealItem
                  key={sign}
                  className="group border-t rule py-5 sm:py-6 grid grid-cols-[minmax(44px,auto)_1fr] gap-x-4 sm:gap-x-6 items-baseline"
                >
                  <span className="font-mono text-[11px] text-inkwarm-faint">
                    {`☐ ${file}.2.${i + 1}`}
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

        {/* ── Sec. 3 — Procedure ──────────────────────────── */}
        <section className="graph-bg bg-sheet-deep/60 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">{`Sec. ${file}.3 — Procedure`}</span>
              <span className="anno hidden sm:block">How it gets built</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <Reveal className="lg:col-span-4">
                <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[360px]">
                  From manual to <span className="italic">running</span>.
                </h2>
                <p className="mt-6 text-[14px] text-inkwarm-soft leading-relaxed max-w-[340px]">
                  We map how the work happens today before automating any of it —
                  fit first, software second.
                </p>
              </Reveal>
              <div className="lg:col-span-8 relative">
                <div aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
                <div className="space-y-10 sm:space-y-12">
                  {solution.howItWorks.map((step, i) => (
                    <Reveal key={step.title} className="relative pl-10" amount={0.3}>
                      <span
                        aria-hidden
                        className="absolute left-0 top-[4px] w-[11px] h-[11px] rounded-full border-2 border-mark bg-sheet"
                      />
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-mark block mb-1.5">
                        {`Step ${i + 1} · 0${i + 1}/0${solution.howItWorks.length}`}
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
          </div>
        </section>

        {/* ── Sec. 4 — Questions ──────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">{`Sec. ${file}.4 — Questions`}</span>
            <span className="anno hidden sm:block">Asked before signing</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[340px]">
                Fair questions, straight answers.
              </h2>
              {parent && (
                <p className="mt-6 text-[14px] text-inkwarm-soft leading-relaxed max-w-[340px]">
                  This playbook is delivered as part of{" "}
                  <Link
                    href={`/services/${parent.slug}`}
                    className="u-draw text-inkwarm font-medium"
                  >
                    {parent.name}
                  </Link>
                  {" — "}the full chapter covers scope, process, and outcomes.
                </p>
              )}
              {sectors.length > 0 && (
                <div className="mt-6 max-w-[340px]">
                  <p className="anno mb-3">Common in</p>
                  <div className="flex flex-wrap gap-2">
                    {sectors.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/industries/${s.slug}`}
                        className="font-mono text-[11px] uppercase tracking-[0.12em] text-inkwarm-soft border rule rounded-[2px] px-2.5 py-1.5 hover:border-mark hover:text-mark transition-colors"
                      >
                        {s.shortName}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
            <div className="lg:col-span-8">
              <ServiceFaq faqs={solution.faqs} />
            </div>
          </div>
        </section>

        {/* ── Other playbooks ─────────────────────────────── */}
        <nav
          aria-label="Other solutions"
          className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24"
        >
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-2">
            <span className="eyebrow !mb-0">More playbooks</span>
            <span className="anno hidden sm:block">One connected system</span>
          </div>
          {[prev, next]
            .filter((s, i, arr) => s.slug !== solution.slug && arr.indexOf(s) === i)
            .map((s) => {
              const sFile = `S.${String(
                solutions.findIndex((x) => x.slug === s.slug) + 1,
              ).padStart(2, "0")}`;
              return (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-b rule py-6 sm:py-8 transition-colors active:bg-sheet-deep/60"
                >
                  <span className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                    <span className="anno anno-mark shrink-0">{`File ${sFile}`}</span>
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
              <p className="anno anno-mark mb-6">{`File ${file} — end of playbook`}</p>
              <h2 className="font-serif font-light text-[clamp(30px,5.5vw,64px)] leading-[1.05] tracking-[-0.025em] text-sheet max-w-[720px]">
                Ready to take this off{" "}
                <span className="italic text-mark">memory</span>?
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

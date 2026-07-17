import type { Metadata } from "next";
import Link from "next/link";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import ServiceFaq from "@/components/sections/ServiceFaq";
import ProposalDoc from "@/components/sections/ProposalDoc";
import { StampIn } from "@/components/sections/SpreadVisuals";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Highlight from "@/components/motion/Highlight";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbList } from "@/lib/structured-data";
import type { ServiceFaqItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "How We Work | Discovery First, Payment Tied to Delivery",
  description:
    "How an Anymus engagement runs — a complimentary discovery session, a written proposal in 2–3 business days, and modular payments released only against delivered milestones. No hidden charges. Ever.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work | Anymus",
    description:
      "Discovery first. Proposal in writing. Payment tied to delivery. No hidden charges.",
    url: "/how-we-work",
  },
};

const STEPS = [
  {
    stamp: "Complimentary",
    title: "Discovery",
    points: [
      "Understand how the business actually runs",
      "Map existing workflows and tools",
      "Identify where time and leads are being lost",
      "Align on goals and expectations",
    ],
    note: "Sometimes the right solution is smaller than expected. Sometimes it's bigger. We recommend only what creates value.",
  },
  {
    stamp: "Within 2–3 business days",
    title: "Personalized proposal",
    points: [
      "Recommended solution and scope",
      "Deliverables and timeline",
      "Technology stack",
      "Quotation with modular payment schedule",
    ],
    note: "Only after understanding the business do we recommend a solution — and only then do we talk price.",
  },
  {
    stamp: "On approval",
    title: "Onboarding",
    points: [
      "Kickoff and shared channels",
      "Timeline confirmed",
      "Milestones planned",
      "Development begins",
    ],
    note: "Development starts only once scope, milestones, and payments are agreed — in writing.",
  },
];

const PAYMENT_ROWS = [
  { event: "Project confirmation", detail: "Token amount — reserves your development slot", pays: true },
  { event: "Module 01 delivered", detail: "Payment released on completed, working milestone", pays: true },
  { event: "Module 02 delivered", detail: "Payment released on completed, working milestone", pays: true },
  { event: "Further modules", detail: "Each payment tied to its deliverable", pays: true },
  { event: "Testing & QA", detail: "Included in the build — not a line item surprise", pays: false },
  { event: "Deployment, documentation & training", detail: "Included before handover", pays: false },
  { event: "Final handover", detail: "Remaining balance on delivery", pays: true },
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "What does the discovery session cost?",
    answer:
      "Nothing — discovery is complimentary. We'd rather understand the business first and let the proposal earn the engagement.",
  },
  {
    question: "Do we have to pay a large amount upfront?",
    answer:
      "No. A token amount reserves your development slot; after that, every payment is released against a completed, working milestone — never against a promise.",
  },
  {
    question: "How quickly do we get the proposal?",
    answer:
      "Within 2–3 business days of the discovery session, in writing — scope, deliverables, timeline, stack, and the full payment schedule.",
  },
  {
    question: "Who owns the system once it's delivered?",
    answer:
      "You do. Ownership, handover, and the support period are all spelled out in the proposal — nothing is left to interpretation.",
  },
  {
    question: "Are there any charges that appear later?",
    answer:
      "No hidden charges. Ever. If something isn't in the written proposal, it isn't billed. Scope changes are agreed — in writing — before any work or cost is added.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "How we work", path: "/how-we-work" },
          ]),
        ]}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header id="top" className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3">
              <span className="anno">Anymus — Working together</span>
              <span className="anno anno-mark">Operating manual</span>
            </div>
          </Reveal>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="pt-10 sm:pt-16 pb-12 sm:pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm">
                We don&rsquo;t begin with a proposal.
                <br />
                We begin with{" "}
                <Highlight color="#C8391B">
                  <span className="italic text-mark">understanding</span>
                </Highlight>
                .
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  How an engagement runs — from a complimentary discovery
                  session to final handover, with payment tied to delivery and
                  nothing hidden.
                </p>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Spec strip ──────────────────────────────────── */}
        <div className="bg-mark border-y border-mark-deep overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              Discovery first
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              Payment tied to delivery
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              ✳ No hidden charges. Ever.
            </span>
          </div>
        </div>

        {/* ── Sec. 1 — Three steps before code ────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">Sec. 01 — The engagement</span>
            <span className="anno hidden sm:block">Before a single line of code</span>
          </div>
          <Reveal>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm mb-10 sm:mb-14 max-w-[620px]">
              Three steps, <span className="italic">before</span> a single line
              of code.
            </h2>
          </Reveal>
          <RevealGroup
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
            stagger={0.09}
          >
            {STEPS.map((step, i) => (
              <RevealItem key={step.title} className="h-full">
                <div className="group relative border rule bg-sheet-lift h-full px-6 pt-6 pb-5 rounded-[2px] card-lift flex flex-col">
                  <span className="anno anno-mark block mb-4">{`Step 0${i + 1}`}</span>
                  <p className="font-serif text-[22px] sm:text-[24px] leading-tight text-inkwarm mb-1.5">
                    {step.title}
                  </p>
                  <p className="anno !text-[10px] mb-4">{step.stamp}</p>
                  <ul className="space-y-2 mb-6">
                    {step.points.map((p, j) => (
                      <li
                        key={p}
                        className="flex items-baseline gap-3 text-[13px] sm:text-[13.5px] text-inkwarm leading-snug"
                      >
                        <span className="font-mono text-[11px] text-inkwarm-faint shrink-0">
                          {`0${i + 1}.${j + 1}`}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto font-mono text-[11px] text-inkwarm-soft leading-relaxed border-t rule pt-4">
                    <span className="text-mark">✳</span> {step.note}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* ── Sec. 2 — Modular payments ledger ────────────── */}
        <section className="graph-bg bg-sheet-deep/60 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">Sec. 02 — Modular payments</span>
              <span className="anno hidden sm:block">You pay as work is delivered</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <Reveal className="lg:col-span-4">
                <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[380px]">
                  You pay as the work is{" "}
                  <span className="italic text-mark">delivered</span>.
                </h2>
                <p className="mt-6 text-[14px] text-inkwarm-soft leading-relaxed max-w-[340px]">
                  No large upfront commitment. A token reserves your slot; every
                  release after that is tied to a completed, working milestone.
                </p>
              </Reveal>
              <RevealGroup className="lg:col-span-8" stagger={0.06}>
                {PAYMENT_ROWS.map((row, i) => (
                  <RevealItem
                    key={row.event}
                    className="border-t rule py-4 sm:py-5 grid grid-cols-[minmax(36px,auto)_1fr_auto] gap-x-4 sm:gap-x-6 items-baseline"
                  >
                    <span className="font-mono text-[11px] text-inkwarm-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="font-serif text-[16px] sm:text-[18px] leading-snug text-inkwarm block">
                        {row.event}
                      </span>
                      <span className="block mt-1 text-[12.5px] sm:text-[13px] text-inkwarm-soft">
                        {row.detail}
                      </span>
                    </span>
                    {row.pays ? (
                      <StampIn
                        delay={0.15}
                        rotate={0}
                        className="font-mono text-[10px] uppercase tracking-[0.16em] text-mark border border-mark/40 rounded-[2px] px-2 py-1"
                      >
                        Payment
                      </StampIn>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-inkwarm-faint px-2 py-1">
                        Included
                      </span>
                    )}
                  </RevealItem>
                ))}
                <div className="border-t rule" />
                <p className="anno mt-5">
                  <span className="text-mark">✳</span> Payments are always tied
                  to agreed deliverables — never to promises.
                </p>
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* ── Sec. 3 — Clarity, in writing ────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
            <span className="eyebrow !mb-0">Sec. 03 — Clarity, in writing</span>
            <span className="anno hidden sm:block">All in one document</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[400px]">
                Every proposal defines{" "}
                <span className="italic text-mark">it all</span>.
              </h2>
              <p className="mt-6 text-[14px] text-inkwarm-soft leading-relaxed max-w-[360px]">
                Nothing is left to interpretation. Every engagement spells out
                exactly what you get, when, and on what terms — in one document.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-7">
              <ProposalDoc />
              <p className="anno text-center pt-4">
                Fig. 03 — every engagement term, on one signed page
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Sec. 4 — Questions ──────────────────────────── */}
        <section className="bg-sheet-deep/40 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-14">
              <span className="eyebrow !mb-0">Sec. 04 — Questions</span>
              <span className="anno hidden sm:block">Asked before signing</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <Reveal className="lg:col-span-4">
                <h2 className="font-serif font-light text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-inkwarm max-w-[340px]">
                  Fair questions, straight answers.
                </h2>
                <p className="mt-6 text-[14px] text-inkwarm-soft leading-relaxed max-w-[340px]">
                  Wondering what we&rsquo;d actually build?{" "}
                  <Link href="/services" className="u-draw text-inkwarm font-medium">
                    The three chapters
                  </Link>{" "}
                  cover the work itself.
                </p>
              </Reveal>
              <div className="lg:col-span-8">
                <ServiceFaq faqs={FAQS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing ─────────────────────────────────────── */}
        <section id="start" className="relative bg-inkwarm graph-bg-dark overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
            <Reveal>
              <p className="anno anno-mark mb-6">Working together — in closing</p>
              <h2 className="font-serif font-light text-[clamp(30px,5.5vw,64px)] leading-[1.05] tracking-[-0.025em] text-sheet max-w-[760px]">
                Well-run businesses aren&rsquo;t lucky.{" "}
                <span className="italic text-mark">They&rsquo;re built.</span>
              </h2>
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="/schedule-call"
                  className="btn-stamp btn-stamp-paper px-7 sm:px-9 py-4 text-[15px] font-medium tracking-[-0.01em]"
                >
                  Start with discovery
                  <span aria-hidden className="font-mono text-[12px]">→</span>
                </a>
                <span className="anno !text-sheet/45">
                  Complimentary session · proposal in 2–3 days · no lock-in
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

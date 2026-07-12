import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, FileText, ArrowRight, Clock } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import CtaBand from "@/components/sections/CtaBand";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Highlight from "@/components/motion/Highlight";
import { StampIn } from "@/components/sections/SpreadVisuals";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbList } from "@/lib/structured-data";
import { CONTACT_EMAIL } from "@/lib/site";
import type { ServiceFaqItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the anymus team about websites, automation, and internal systems, a demo, or a project scope. Reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | anymus",
    description: "Get in touch with the anymus team. Reply within 24 hours.",
    url: "/contact",
  },
};

const CHANNELS = [
  {
    icon: Mail,
    label: "Email us",
    description:
      "Send us a message and we'll get back to you within 24 hours on business days.",
    action: { href: `mailto:${CONTACT_EMAIL}`, text: CONTACT_EMAIL },
  },
  {
    icon: MessageSquare,
    label: "Schedule a call",
    description:
      "Book a free 30-minute discovery call — no pitch, just a clear next step.",
    action: { href: "/schedule-call", text: "Book a call" },
  },
  {
    icon: FileText,
    label: "Read how we work",
    description:
      "Prefer to see the terms first? Discovery, proposal, and payments — all in writing.",
    action: { href: "/how-we-work", text: "How we work" },
  },
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How quickly do you respond?",
    answer: "We typically reply within 24 hours on business days.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes — we work with businesses of all sizes, from early-stage startups to established companies.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes — we work with Indian and international clients, and keep overlap hours across IST and US time zones for calls.",
  },
  {
    question: "Can you take on urgent projects?",
    answer:
      "Reach out and we'll let you know our current availability. We occasionally take on expedited projects.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[calc(62px+env(safe-area-inset-top))] sm:pt-[70px]">
        {/* ── Document header ─────────────────────────────── */}
        <header className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3">
              <span className="anno">Anymus — Contact</span>
              <span className="anno anno-mark">Correspondence</span>
            </div>
          </Reveal>

          {/* ── Title block ──────────────────────────────── */}
          <Reveal className="relative pt-10 sm:pt-16 pb-12 sm:pb-16">
            {/* Postmark */}
            <StampIn
              delay={0.5}
              rotate={8}
              className="hidden sm:block absolute right-2 lg:right-[36%] top-8 sm:top-12 w-[92px] h-[92px] opacity-70 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" aria-hidden className="w-full h-full">
                <defs>
                  <path
                    id="postmark-circle"
                    d="M 50,50 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
                  />
                </defs>
                <circle cx="50" cy="50" r="46" fill="none" stroke="#C8391B" strokeOpacity="0.55" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="22" fill="none" stroke="#C8391B" strokeOpacity="0.45" strokeWidth="1" />
                <text
                  fill="#C8391B"
                  fillOpacity="0.7"
                  style={{ fontSize: "8.4px", letterSpacing: "1.6px", fontFamily: "var(--font-mono, monospace)" }}
                >
                  <textPath href="#postmark-circle">
                    ANYMUS · CORRESPONDENCE · REPLY &lt; 24H
                  </textPath>
                </text>
                <text
                  x="50"
                  y="53.5"
                  textAnchor="middle"
                  fill="#C8391B"
                  fillOpacity="0.6"
                  style={{ fontSize: "7px", letterSpacing: "1px", fontFamily: "var(--font-mono, monospace)" }}
                >
                  2026
                </text>
              </svg>
            </StampIn>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">
              <h1 className="lg:col-span-8 font-serif font-light text-[clamp(38px,7.5vw,96px)] leading-[1.02] tracking-[-0.03em] text-inkwarm">
                Start the{" "}
                <Highlight color="#C8391B">
                  <span className="italic text-mark">conversation</span>
                </Highlight>
                .
              </h1>
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <p className="text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed lg:border-l lg:rule lg:pl-5">
                  A question, a demo, a project you&rsquo;re weighing up — write
                  to us and a person (not a funnel) reads it and replies.
                </p>
              </div>
            </div>
          </Reveal>
        </header>

        {/* ── Spec strip ──────────────────────────────────── */}
        <div className="bg-mark border-y border-mark-deep overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              Reply &lt; 24h
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/70 whitespace-nowrap hidden sm:block">
              IST ↔ US overlap hours
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sheet/90 whitespace-nowrap">
              ✳ No obligation
            </span>
          </div>
        </div>

        {/* ── Channels ────────────────────────────────────── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-12">
            <span className="eyebrow !mb-0">Sec. 01 — Channels</span>
            <span className="anno hidden sm:block">Pick whichever suits</span>
          </div>
          <RevealGroup
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
            stagger={0.09}
          >
            {CHANNELS.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <RevealItem key={ch.label} className="h-full">
                  <Link
                    href={ch.action.href}
                    className="group flex flex-col h-full border rule bg-sheet-lift rounded-[2px] px-6 sm:px-7 pt-6 pb-5 card-lift"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="anno anno-mark">{`Ch. 0${i + 1}`}</span>
                      <span className="w-9 h-9 rounded-[2px] border rule bg-sheet flex items-center justify-center">
                        <Icon className="w-4 h-4 text-mark" strokeWidth={1.6} />
                      </span>
                    </div>
                    <h2 className="font-serif font-light text-[22px] sm:text-[24px] text-inkwarm mb-2">
                      {ch.label}
                    </h2>
                    <p className="text-[13.5px] sm:text-[14px] text-inkwarm-soft leading-relaxed mb-6">
                      {ch.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-mark u-draw break-all">
                      {ch.action.text}
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Pinned note */}
          <div className="relative mt-10 max-w-[420px]">
            <span
              aria-hidden
              className="absolute -top-[5px] left-8 w-2.5 h-2.5 rounded-full bg-mark shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
            />
            <div className="border rule bg-sheet-lift rounded-[2px] px-5 py-4 rotate-[-0.6deg]">
              <p className="font-mono text-[11.5px] text-inkwarm-soft leading-relaxed">
                <span className="text-mark">Field note:</span> not sure what to
                write? &ldquo;Here&rsquo;s what&rsquo;s manual in my
                business&rdquo; is the perfect first line.
              </p>
            </div>
          </div>
        </section>

        {/* ── Questions ───────────────────────────────────── */}
        <section className="graph-bg bg-sheet-deep/60 border-y rule">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
            <div className="flex items-baseline justify-between border-b rule pb-3 mb-10 sm:mb-12">
              <span className="eyebrow !mb-0 flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-mark" strokeWidth={1.8} />
                Sec. 02 — Before you write
              </span>
              <span className="anno hidden sm:block">Asked often</span>
            </div>
            <RevealGroup
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8"
              stagger={0.07}
            >
              {FAQS.map((faq, i) => (
                <RevealItem key={faq.question}>
                  <p className="anno mb-2.5">{`Q.0${i + 1}`}</p>
                  <h3 className="font-serif text-[17px] sm:text-[18px] text-inkwarm mb-2.5 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed border-l-2 border-mark/40 pl-3">
                    {faq.answer}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <MobileCtaBar />
      <CtaBand />
      <Footer />
    </>
  );
}

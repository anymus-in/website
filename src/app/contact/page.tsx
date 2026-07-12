import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/motion/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the anymus team about websites, automation, and internal systems, a demo, or a project scope.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | anymus",
    description: "Get in touch with the anymus team.",
    url: "/contact",
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email us",
    description: "Send us a message and we'll get back to you within 24 hours.",
    action: { href: `mailto:${CONTACT_EMAIL}`, text: CONTACT_EMAIL },
  },
  {
    icon: MessageSquare,
    label: "Schedule a call",
    description: "Book a free 30-minute discovery call — no pitch, just a clear next step.",
    action: { href: "/schedule-call", text: "Book a call" },
  },
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We typically reply within 24 hours on business days.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes — we work with businesses of all sizes, from early-stage startups to established companies.",
  },
  {
    q: "Can you take on urgent projects?",
    a: "Reach out and we'll let you know our current availability. We occasionally take on expedited projects.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-[92px] sm:pt-[116px] pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-10 sm:mb-14">
              <span className="anno">Anymus — Contact</span>
              <span className="anno anno-mark hidden sm:block">Reply &lt; 24h</span>
            </div>
            <h1 className="font-serif font-light text-[clamp(34px,6vw,56px)] leading-[1.04] tracking-[-0.025em] text-inkwarm mb-4">
              Write to us.
            </h1>
            <p className="text-[14.5px] sm:text-[15.5px] text-inkwarm-soft max-w-[460px] leading-relaxed mb-10 sm:mb-14">
              Questions about anymus, a demo, or anything else? Send us a
              message and we&apos;ll get back to you.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-14 sm:mb-20">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Reveal key={method.label}>
                  <Link
                    href={method.action.href}
                    className="group block border rule bg-sheet-lift rounded-[2px] px-6 sm:px-8 py-7 sm:py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-mark)] hover:border-mark"
                  >
                    <span className="w-11 h-11 rounded-[2px] border rule bg-sheet flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-mark" strokeWidth={1.6} />
                    </span>
                    <h2 className="font-serif font-light text-[22px] sm:text-[26px] text-inkwarm mb-2">
                      {method.label}
                    </h2>
                    <p className="text-[13.5px] sm:text-[14px] text-inkwarm-soft leading-relaxed mb-5">
                      {method.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-mark u-draw">
                      {method.action.text}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="border-t rule-strong pt-8 sm:pt-10">
              <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                <Clock className="w-4 h-4 text-mark" strokeWidth={1.8} />
                <span className="anno">Frequently asked</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-[14px] sm:text-[15px] font-medium text-inkwarm mb-2 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] text-inkwarm-soft leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}

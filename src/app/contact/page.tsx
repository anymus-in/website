import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

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

const CONTACT_EMAIL = "anymus.shared@gmail.com";

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-[92px] sm:pt-[116px] pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
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

          <Reveal>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-4 border rule bg-sheet-lift rounded-[2px] px-6 sm:px-8 py-6 sm:py-7 max-w-[440px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-mark)] hover:border-mark"
            >
              <span className="w-11 h-11 rounded-[2px] border rule bg-sheet flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-mark" strokeWidth={1.6} />
              </span>
              <span>
                <span className="anno block mb-1">Email us at</span>
                <span className="u-draw block text-[16px] sm:text-[18px] font-medium text-inkwarm">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}

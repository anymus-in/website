import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the anymus team about ERP, CRM, and automation implementation, a demo, or a project scope.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — anymus",
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
      <main className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 md:px-8">
          <Reveal>
            <p className="eyebrow mb-4 sm:mb-5">Get in touch</p>
            <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-black mb-3">
              Contact us
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[460px] leading-relaxed mb-10 sm:mb-14">
              Questions about anymus, a demo, or anything else? Send us a
              message and we&apos;ll get back to you.
            </p>
          </Reveal>

          <Reveal>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="cta-lift focus-accent surface flex items-center gap-4 px-6 sm:px-8 py-6 sm:py-7 max-w-[420px] group"
            >
              <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent-ink" />
              </span>
              <span>
                <span className="block text-[13px] text-[#71717A] mb-0.5">
                  Email us at
                </span>
                <span className="block text-[16px] sm:text-[18px] font-medium text-black group-hover:text-accent-ink transition-colors">
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

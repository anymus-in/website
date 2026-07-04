import type { ReactNode } from "react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-[92px] sm:pt-[116px] pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-10 sm:mb-14">
              <span className="anno">Anymus — Legal</span>
              <span className="anno hidden sm:block">Last updated {updated}</span>
            </div>
            <h1 className="font-serif font-light text-[clamp(32px,5.5vw,52px)] leading-[1.05] tracking-[-0.025em] text-inkwarm mb-3">
              {title}
            </h1>
            <p className="anno sm:hidden mb-10">Last updated {updated}</p>
            <div className="hidden sm:block mb-10 sm:mb-14" />
          </Reveal>
          <div className="space-y-8 sm:space-y-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" amount={0.1}>
      <h2 className="font-serif text-[20px] sm:text-[23px] text-inkwarm mb-3 sm:mb-4 border-t rule pt-6">
        {heading}
      </h2>
      <div className="space-y-4 text-[14px] sm:text-[15px] text-inkwarm-soft leading-relaxed">
        {children}
      </div>
    </Reveal>
  );
}

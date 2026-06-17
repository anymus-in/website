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
      <main className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 md:px-8">
          <Reveal>
            <p className="eyebrow mb-4 sm:mb-5">Legal</p>
            <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-black mb-3">
              {title}
            </h1>
            <p className="text-[13px] sm:text-sm text-[#71717A] mb-10 sm:mb-14">
              Last updated {updated}
            </p>
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
      <h2 className="font-serif text-[19px] sm:text-[22px] text-black mb-3 sm:mb-4">
        {heading}
      </h2>
      <div className="space-y-4 text-[14px] sm:text-[15px] text-[#52525B] leading-relaxed">
        {children}
      </div>
    </Reveal>
  );
}

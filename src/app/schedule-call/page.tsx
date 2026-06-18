import type { Metadata } from "next";
import { Check } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";
import ScheduleCallForm from "./ScheduleCallForm";

export const metadata: Metadata = {
  title: "Schedule a Call",
  description:
    "Book a free 30-minute discovery call with the anymus team to scope your ERP, CRM, or automation project.",
  alternates: { canonical: "/schedule-call" },
  openGraph: {
    title: "Schedule a Call — anymus",
    description: "Book a free discovery call with the anymus team.",
    url: "/schedule-call",
  },
};

const trustPoints = [
  "Free 30-minute call",
  "No obligation",
  "Response within 24 hours",
];

export default function ScheduleCallPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Copy */}
            <Reveal className="lg:pt-3">
              <p className="eyebrow mb-4 sm:mb-5">Get in touch</p>
              <h1 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-black mb-4 sm:mb-5 max-w-[420px]">
                Schedule a free discovery call
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#52525B] leading-relaxed max-w-[420px] mb-8 sm:mb-10">
                Tell us a bit about your business and what you need.
                We&apos;ll follow up to set up a 30-minute call — no pitch,
                just a clear next step.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {trustPoints.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-ink-700"
                  >
                    <Check className="w-4 h-4 text-grad-green shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal>
              <ScheduleCallForm />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

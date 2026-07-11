import type { Metadata } from "next";
import { Check } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";
import DiscoveryForm from "./DiscoveryForm";

export const metadata: Metadata = {
  title: "Sales Discovery",
  description:
    "Capture prospect details on the go — business info, challenges, and services interested in.",
  alternates: { canonical: "/discovery" },
  openGraph: {
    title: "Sales Discovery | anymus",
    description: "Capture prospect details on the go.",
    url: "/discovery",
  },
};

const features = [
  "Instant team notification",
  "No paperwork needed",
  "Works online & offline",
];

export default function DiscoveryPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-[92px] sm:pt-[116px] pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-10 sm:mb-14">
              <span className="anno">Anymus — Discovery</span>
              <span className="anno anno-mark hidden sm:block">
                Internal · sales use
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 sm:gap-12 lg:gap-16 items-start">
            <Reveal className="lg:pt-3">
              <h1 className="font-serif font-light text-[clamp(34px,5.5vw,56px)] leading-[1.04] tracking-[-0.025em] text-inkwarm mb-4 sm:mb-5 max-w-[440px]">
                Log a{" "}
                <span className="italic text-mark">discovery</span> call
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-inkwarm-soft leading-relaxed max-w-[420px] mb-8 sm:mb-10">
                Fill this out after a conversation with a prospect. The team
                gets notified instantly and can pick up the next step.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 text-[13px] sm:text-[14px] font-medium text-inkwarm border-t rule pt-3"
                  >
                    <Check
                      className="w-3.5 h-3.5 text-mark shrink-0"
                      strokeWidth={2.5}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <DiscoveryForm />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

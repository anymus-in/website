import type { Metadata } from "next";
import ScrollProgress from "@/components/motion/ScrollProgress";
import ChapterRail from "@/components/motion/ChapterRail";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import ServiceIndex from "@/components/sections/ServiceIndex";
import Interlude from "@/components/sections/Interlude";
import BuildSheet from "@/components/sections/BuildSheet";
import Principles from "@/components/sections/Principles";
import ClosingCta from "@/components/sections/ClosingCta";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "anymus | Websites, Automation & Internal Systems for Growing Businesses",
  },
  description:
    "anymus designs and builds the websites, automations, and internal tools that growing businesses run on, one connected system, built around the tools you already use.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <ScrollProgress />
      <ChapterRail />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ServiceIndex />
        <Principles />
        <Interlude />
        <BuildSheet />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

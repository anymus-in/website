import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemsWeSolve from "@/components/sections/ProblemsWeSolve";
import Industries from "@/components/sections/Industries";
import WhyChooseAnymus from "@/components/sections/WhyChooseAnymus";
import GetStarted from "@/components/sections/GetStarted";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";

/* Below-the-fold sections — still server-rendered (ssr defaults to true),
   but split into separate chunks so their client JS isn't in the main bundle. */
const FeatureBlocks = dynamic(() => import("@/components/sections/FeatureBlocks"));

export const metadata: Metadata = {
  title: {
    absolute: "anymus — Websites, Automation & Internal Systems for Growing Businesses",
  },
  description:
    "anymus designs and builds the websites, automations, and internal tools that growing businesses run on — one connected system, built around the tools you already use.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
<ProblemsWeSolve />
        <FeatureBlocks />
        <Industries />
        <WhyChooseAnymus />
        <GetStarted />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

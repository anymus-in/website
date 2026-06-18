import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemsSection from "@/components/sections/ProblemsSection";
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
    absolute: "anymus — Custom ERP, CRM & Automation Systems for Growing Businesses",
  },
  description:
    "anymus is an implementation agency that builds custom ERP, CRM, and business-automation systems — and websites — for growing businesses. A clear process, not a black box.",
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
        <ProblemsSection />
        <FeatureBlocks />
        <GetStarted />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

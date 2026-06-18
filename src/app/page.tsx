import dynamic from "next/dynamic";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemsSection from "@/components/sections/ProblemsSection";
import GetStarted from "@/components/sections/GetStarted";
import CtaBand from "@/components/sections/CtaBand";

/* Below-the-fold sections — still server-rendered (ssr defaults to true),
   but split into separate chunks so their client JS isn't in the main bundle. */
const FeatureBlocks = dynamic(() => import("@/components/sections/FeatureBlocks"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProblemsSection />
        <FeatureBlocks />
        <GetStarted />
        <FAQ />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

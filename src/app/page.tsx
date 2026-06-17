import ScrollProgress from "@/components/motion/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemsSection from "@/components/sections/ProblemsSection";
import FeatureBlocks from "@/components/sections/FeatureBlocks";
import GetStarted from "@/components/sections/GetStarted";
import FAQ from "@/components/sections/FAQ";
import CtaBand from "@/components/sections/CtaBand";

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

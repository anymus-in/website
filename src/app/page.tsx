import ScrollProgress from "@/components/motion/ScrollProgress";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsBand from "@/components/sections/StatsBand";
import DemoBand from "@/components/sections/DemoBand";
import FeatureBlocks from "@/components/sections/FeatureBlocks";
import GetStarted from "@/components/sections/GetStarted";
import ScaleSection from "@/components/sections/ScaleSection";
import BigTestimonial from "@/components/sections/BigTestimonial";
import FAQ from "@/components/sections/FAQ";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <StatsBand />
        <DemoBand />
        <FeatureBlocks />
        <GetStarted />
        <ScaleSection />
        <BigTestimonial />
        <FAQ />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

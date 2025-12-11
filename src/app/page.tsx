import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Project from "@/components/project";
import VideoHero from "@/components/VideoHero";
import GoldStandardValues from "@/components/gold-standard-values";
import VirtuousCycle from "@/components/virtuous-cycle";
import TitleChip from "@/components/title-chip";
import BetterMarquee from "@/components/BetterMarquee";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <AboutSection />

      <BetterMarquee />

      <section className="section-padding bg-secondary relative" id="gold-standard">
        <div className="w-[600px] h-[600px] absolute -top-[100px] -left-[100px]">
          <Icon icon="material-symbols:speed-camera" className="text-white w-[600px] h-[600px] opacity-80" />
        </div>

        <div className="w-[600px] h-[600px] absolute -bottom-[200px] -right-[100px]">
          <Icon icon="fluent:camera-dome-20-filled" className="text-white w-[600px] h-[600px] opacity-80" />
        </div>
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <TitleChip title="The Gold Standard" className="text-white border-white" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Excellence is Not Claimed.
              <span className="text-white block">It's Engineered.</span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto mb-4">
              "The Gold Standard" is not a slogan; it's our operating system. Every action we take is governed by an internal code of mastery.
            </p>
          </div>
          <GoldStandardValues />
          <p className="text-center text-2xl font-semibold italic mt-12 text-white">
            "Culture is our strongest firewall."
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary" id="virtuous-cycle">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <TitleChip title="Our Ecosystem" className="text-white border-white" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              The Virtuous Cycle
              <span className="text-white block">of Assurance™</span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Security is not a department—it's an ecosystem. Our six interdependent branches create a continuous loop of assurance that no other company in East Africa can match.
            </p>
          </div>
          <VirtuousCycle />
        </div>
      </section>

      <ServicesSection />
      <CTA variant="consultation" className="bg-dark py-16" />
      <Project />
      <StatsSection />
      <Footer />
    </main>
  );
}

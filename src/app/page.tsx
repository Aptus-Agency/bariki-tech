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
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <AboutSection />

      <ScrollReveal delay={0.2}>
        <BetterMarquee />
      </ScrollReveal>

      <section className="section-padding bg-secondary relative" id="gold-standard">
        <div className="w-[600px] h-[600px] absolute -top-[100px] -left-[100px] hidden md:block">
          <Icon icon="material-symbols:speed-camera" className="text-white w-[600px] h-[600px] opacity-80" />
        </div>

        <div className="w-[600px] h-[600px] absolute -bottom-[200px] -right-[100px] hidden md:block">
          <Icon icon="fluent:camera-dome-20-filled" className="text-white w-[600px] h-[600px] opacity-80" />
        </div>
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <TitleChip title="The Gold Standard" className="text-white border-white" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Excellence is Not Claimed.
                <span className="text-white block">It's Engineered.</span>
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto mb-4">
                "The Gold Standard" is not a slogan; it's our operating system. Every action we take is governed by an internal code of mastery.
              </p>
            </div>
          </ScrollReveal>
          <GoldStandardValues />
          <ScrollReveal delay={0.4}>
            <p className="text-center text-2xl font-semibold italic mt-12 text-white">
              "Culture is our strongest firewall."
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary" id="virtuous-cycle">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <TitleChip title="Our Ecosystem" className="text-white border-white" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The Virtuous Cycle
                <span className="text-white block">of Assurance™</span>
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Security is not a department—it's an ecosystem. Our six interdependent branches create a continuous loop of assurance that no other company in East Africa can match.
              </p>
            </div>
          </ScrollReveal>
          <VirtuousCycle />
        </div>
      </section>

      <ServicesSection />
      <ScrollReveal>
        <CTA variant="consultation" className="bg-secondary py-16" />
      </ScrollReveal>
      <Project />
      <StatsSection />
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}

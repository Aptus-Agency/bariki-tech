import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Project from "@/components/project";
import Marquee from "@/components/ui/marquee";
import VideoHero from "@/components/VideoHero";
import GoldStandardValues from "@/components/gold-standard-values";
import VirtuousCycle from "@/components/virtuous-cycle";
import TitleChip from "@/components/title-chip";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <AboutSection />

      {/* Updated Marquee with new keywords */}
      <section className="section-padding bg-dark">
        <Marquee duration={15}>
          <div className="flex items-center gap-4">
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Resilience</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Excellence</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Ecosystem</span>
          </div>
        </Marquee>
      </section>

      {/* NEW: Gold Standard Excellence Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <TitleChip title="The Gold Standard" />
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Excellence is Not Claimed.
              <span className="text-gradient block">It's Engineered.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              "The Gold Standard" is not a slogan; it's our operating system. Every action we take is governed by an internal code of mastery.
            </p>
          </div>
          <GoldStandardValues />
          <p className="text-center text-2xl font-semibold italic mt-12 text-dark">
            "Culture is our strongest firewall."
          </p>
        </div>
      </section>

      {/* NEW: Virtuous Cycle Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <TitleChip title="Our Ecosystem" />
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              The Virtuous Cycle
              <span className="text-gradient block">of Assurance™</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Security is not a department—it's an ecosystem. Our six interdependent branches create a continuous loop of assurance that no other company in East Africa can match.
            </p>
          </div>
          <VirtuousCycle />
        </div>
      </section>

      <ServicesSection />
      <CTA variant="consultation" className="mt-16 bg-gradient-dark py-16" />
      <Project />
      <StatsSection />
      <Footer />
    </main>
  );
}

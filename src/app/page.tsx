import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import CTA from "@/components/cta";
import Project from "@/components/project";
import Marquee from "@/components/ui/marquee";
import { Icon } from "@iconify/react";
import VideoHero from "@/components/VideoHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <HeroSection /> */}
      <VideoHero />
      <AboutSection />
      <section className="section-padding">
        <Marquee duration={15}>
          <div className="flex items-center gap-4">
            {/* <Icon icon="solar:shield-bold-duotone" className="w-12 h-12 text-primary" /> */}
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman">Security</span>
          </div>
          <div className="flex items-center gap-4">
            {/* <Icon icon="solar:shield-bold-duotone" className="w-12 h-12 text-primary" /> */}
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman">Surveillance</span>
          </div>
          <div className="flex items-center gap-4">
            {/* <Icon icon="solar:shield-bold-duotone" className="w-12 h-12 text-primary" /> */}
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman">Protection</span>
          </div>
        </Marquee>
      </section>
      <ServicesSection />
      <CTA className="mt-16 bg-gradient-dark py-16" />
      <Project />
      <StatsSection />
      <Footer />
    </main>
  );
}

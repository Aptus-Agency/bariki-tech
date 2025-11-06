import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Project from "@/components/project";
import Marquee from "@/components/ui/marquee";
import VideoHero from "@/components/VideoHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <AboutSection />

      <section className="section-padding bg-dark">
        <Marquee duration={15}>
          <div className="flex items-center gap-4">
            {/* <Icon icon="solar:shield-bold-duotone" className="w-12 h-12 text-primary" /> */}
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Security</span>
          </div>
          <div className="flex items-center gap-4">
            {/* <Icon icon="solar:shield-bold-duotone" className="w-12 h-12 text-primary" /> */}
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Surveillance</span>
          </div>
          <div className="flex items-center gap-4">
            {/* <Icon icon="solar:shield-bold-duotone" className="w-12 h-12 text-primary" /> */}
            <img src={'/bariki-logo.png'} className="w-12 h-12" alt="" />
            <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Protection</span>
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

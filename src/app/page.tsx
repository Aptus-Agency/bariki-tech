import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import CTA from "@/components/cta";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTA className="mt-16 bg-gradient-dark py-16" />
      <Project />
      <StatsSection />
      <Footer />
    </main>
  );
}

import Header from '@/components/header';
import Footer from '@/components/footer';
import TitleChip from '@/components/title-chip';
import EcosystemServices from '@/components/ecosystem-services';
import { ServiceData, servicesData } from '@/lib/data';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function ServicesPage() {
  const services = Object.values(servicesData);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[600px] flex items-center justify-center">
        <div className="container-custom">
          <div className="absolute inset-0">
            <img
              src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1761834481/bariki/nlg8xybmeq7dcximos5f.webp'}
              alt="About Bariki Tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/60"></div>
          </div>
          <div className="relative flex justify-start z-10 text-white">
            <div className="container-custom text-center relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Virtuous Cycle
                <span className="text-gradient block">of Assurance™</span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                One Ecosystem, Six Branches, One Unbreakable Standard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Unlike contractors who specialize in one niche or consultants who only write reports,
              Bariki Tech operates as a single, unified engine. Our branches follow a deliberate,
              closed-loop process:
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 text-lg md:text-xl font-semibold bg-muted/50 p-6 rounded-lg">
              <span className="text-secondary">CONSULT</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-secondary">INTEGRATE</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-secondary">MAINTAIN</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-secondary">TRAIN</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-secondary">CYBERSECURE</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-secondary">CONSULT</span>
            </div>

            <p className="text-lg text-muted-foreground italic mt-8">
              "Each branch is independent in function but interdependent in purpose. When we
              consult, we bring the intelligence of every branch with us."
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Branches */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <TitleChip title="Six Branches" className='text-white border-white' />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              The Six Pillars of Our Ecosystem
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Each branch delivers specialized capabilities while contributing to the unified
              security ecosystem.
            </p>
          </div>

          <EcosystemServices />
        </div>
      </section>

      {/* Technical Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <TitleChip title="Proven Solutions" />
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Technical Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our ecosystem is backed by comprehensive technical capabilities.
              Explore our specialized security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Three Revenue Engines */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <TitleChip title="Business Model" className="border-white text-white" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Strategy Backed by Execution:
              <span className="block mt-2">Our Three Revenue Engines</span>
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Behind our operational ecosystem lies a business model engineered for sustainability
              and growth. These three self-reinforcing engines power Bariki Tech's mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="text-5xl font-bold text-primary mb-4"><Icon icon="iconoir:number-1-square" /></div>
              <h3 className="text-2xl font-bold mb-4">Core Installation & Maintenance</h3>
              <p className="opacity-90 mb-4">
                The foundation of trust. We design, install, and maintain the physical infrastructure—
                from electric fencing to access control—that keeps Africa's operations running.
              </p>
              <p className="text-primary font-semibold">Key Metric: 98% First-Time Fix Rate</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="text-5xl font-bold text-primary mb-4"><Icon icon="iconoir:number-2-square" /></div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Division</h3>
              <p className="opacity-90 mb-4">
                The digital shield. We provide Managed Detection & Response (MDR), vulnerability
                testing, and incident response, recognizing that your firewall is your new perimeter wall.
              </p>
              <p className="text-primary font-semibold">Digital Layer Hardening</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="text-5xl font-bold text-primary mb-4"><Icon icon="iconoir:number-3-square" /></div>
              <h3 className="text-2xl font-bold mb-4">Security Systems Consultancy</h3>
              <p className="opacity-90 mb-4">
                The strategic brain. We advise, design, and oversee security ecosystems from blueprint
                to commissioning. This engine is uniquely powerful because it is backed by the five
                other branches that execute what we envision.
              </p>
              <p className="text-primary font-semibold">Strategy Meets Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            Experience the Difference of an Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Move beyond the limitations of disconnected vendors and theoretical consultants.
            Partner with a team that designs, builds, maintains, and evolves your entire security reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-gradient-primary px-8 py-4">
              Speak to a Consultant
            </Link>
            <Link href="/about" className="btn-outline px-8 py-4">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceData }) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="group card-glass hover-lift overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
          {service.description}
        </p>
        <button className="btn-outline w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
          Learn More
        </button>
      </div>
    </Link>
  );
}

import Link from 'next/link';
import Header from '@/components/header';
import { Icon } from '@iconify/react';
import Footer from '@/components/footer';
import { aboutPageValues, achievements, team } from '@/lib/data';
import TitleChip from '@/components/title-chip';
import Marquee from '@/components/ui/marquee';

const About = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="container-custom">
          <div className="absolute inset-0">
            <img
              src={'/about-hero-cctv.jpg'}
              alt="About Bariki Tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/60"></div>
          </div>
          <div className="relative flex justify-start z-10 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Protect What Matters Most</h1>
            <div></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="">
            <TitleChip title="Our Promise" />
            <div className="grid md:grid-cols-3">
              {aboutPageValues.map((value, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon icon={value.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{value.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">

            <h3 className="text-4xl lg:text-5xl font-bold text-dark mb-8">
              At Bariki, We don’t just install, we integrate, protect, maintain and build trust.
            </h3>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <img
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1759526429/bariki/hiryaparhmslqhxb0bom.png'}
                alt="Security Engineer"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="animate-slide-right">
              <TitleChip title="About Our Company" className="border-white text-white" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted Partner in Security and Design
              </h2>

              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Building Trust Since 2010</h3>
                <p className="text-white/90">Leading security solutions provider in East Africa</p>
              </div>

              <p className="text-lg text-white mb-6 leading-relaxed">
                At Bariki Tech Ltd, we exist to protect what matters most—lives and property—through
                smart, reliable, and customized security solutions. We specialize in the design,
                installation, and maintenance of CCTV surveillance, electric fencing, access control
                systems, gate automation, time and attendance solutions, and more.
              </p>

              <p className="text-lg text-white mb-8 leading-relaxed">
                Our solutions are trusted by schools, hospitals, residential estates, businesses, and
                institutions that demand dependable security and peace of mind. Backed by a team of highly
                trained engineers and technicians, Bariki Tech has built a strong reputation for innovation,
                integrity, and excellence.
              </p>

              <Link href="/projects" className="btn-primary">
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Image Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={'/about-facility.jpg'}
          alt="Security Operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/70"></div>

        <div className="relative z-10 w-full">
          {/* Use the new Marquee component. A lower duration means faster speed. */}
          <Marquee duration={15}>
            <div className="flex items-center gap-4">
              <Icon icon="svg-spinners:pulse-3" className="w-12 h-12 text-primary" />
              <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Security</span>
            </div>
            <div className="flex items-center gap-4">
              <Icon icon="svg-spinners:pulse-3" className="w-12 h-12 text-primary" />
              <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Surveillance</span>
            </div>
            <div className="flex items-center gap-4">
              <Icon icon="svg-spinners:pulse-3" className="w-12 h-12 text-primary" />
              <span className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">Protection</span>
            </div>
          </Marquee>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <TitleChip title="Industry Certifications" />
              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
                Our Key Achievements Over the Years
              </h2>
            </div>

            <div>
              <img
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1759527741/bariki/yvtvmxty9oatg03dybbz.png'}
                alt="Team Achievement"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {achievements.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={stat.icon} className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-dark mb-2">{stat.number}</div>
                <div className="text-muted-foreground uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <TitleChip title="Meet Our Experts" />
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Dedicated Professionals
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Your Security Solution Awaits — Get Started Today!
              </h2>
            </div>
            <Link
              href="/#contact"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2 flex-shrink-0"
            >
              <span>Contact Us</span>
              <Icon icon="mdi:arrow-up" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
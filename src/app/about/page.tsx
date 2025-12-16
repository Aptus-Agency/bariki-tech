import Header from '@/components/header';
import ClientCarousel from '@/components/client-carousel';
import Footer from '@/components/footer';
import TitleChip from '@/components/title-chip';
import CTA from '@/components/cta';
import GoldStandardValues from '@/components/gold-standard-values';

const About = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[600px] flex items-center justify-center">
        <div className="container-custom">
          <div className="absolute inset-0">
            <img
              src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1765874762/bariki/xrwmvv6n4gwnp8tgg2zh.jpg'}
              alt="About Bariki Tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/60"></div>
          </div>
          <div className="relative flex justify-start z-10 text-white">
            <div className="container-custom text-center relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto text-white">
                The Story of a Revolution <br className="hidden md:block" />
                <span className="text-gradient">Forged in Africa's Reality</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We didn't set out to become Africa's first converged security ecosystem.
                We set out to solve a problem everyone else accepted as normal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
                From Witnessing the Gap to Building the Bridge
              </h2>

              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Bariki Tech began where we were needed most: on the ground as a local installer.
                </p>

                <p className="text-lg">
                  But as we worked across Uganda's most critical sectors; from banking halls to remote
                  oilfields and telecom infrastructure, a glaring truth became unavoidable. <strong className="text-dark">
                    The systems were multiplying, but the security wasn't strengthening.</strong>
                </p>

                <p className="text-lg">
                  Organizations were buying more cameras, more fences, and more firewalls, yet they
                  remained vulnerable. Their physical security teams didn't speak to their IT departments.
                  Their sensors couldn't talk to their software. They were creating a patchwork of
                  protection, full of holes and blind spots.
                </p>

                <p className="text-lg">
                  We realized the industry was broken. And so, we began a transformation not just of our
                  company, but of the very concept of security in Africa.
                </p>
              </div>
            </div>
            <div className="animate-slide-right">
              <img
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1759526429/bariki/hiryaparhmslqhxb0bom.png'}
                alt="Security Engineer"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center">Our Evolution:</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-glass-dark p-6 text-center">
              <div className="text-primary text-5xl font-bold mb-3">→</div>
              <h4 className="text-lg font-semibold mb-2 text-dark">From Vendor</h4>
              <p className="text-muted-foreground text-sm mb-3">to Integrator</p>
              <p className="text-sm text-muted-foreground">
                We started connecting the disconnected systems.
              </p>
            </div>

            <div className="card-glass-dark p-6 text-center">
              <div className="text-primary text-5xl font-bold mb-3">→</div>
              <h4 className="text-lg font-semibold mb-2 text-dark">From Integrator</h4>
              <p className="text-muted-foreground text-sm mb-3">to Advisor</p>
              <p className="text-sm text-muted-foreground">
                We began designing the solutions from the ground up.
              </p>
            </div>

            <div className="card-glass-dark p-6 text-center">
              <div className="text-primary text-5xl font-bold mb-3">→</div>
              <h4 className="text-lg font-semibold mb-2 text-dark">From Advisor</h4>
              <p className="text-muted-foreground text-sm mb-3">to Ecosystem</p>
              <p className="text-sm text-muted-foreground">
                We became Africa's first fully converged security partner.
              </p>
            </div>

            <div className="card-glass-dark p-6 text-center">
              <div className="text-primary text-5xl font-bold mb-3">★</div>
              <h4 className="text-lg font-semibold mb-2 text-dark">Today</h4>
              <p className="text-muted-foreground text-sm mb-3">The Gold Standard</p>
              <p className="text-sm text-muted-foreground">
                Physical and cyber domains meet under one philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Standard Ethos - Full Table */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <TitleChip title="Our Operating System" className="border-white text-white" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Gold Standard Ethos</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              For us, "The Gold Standard" is not a marketing slogan. It is our living operating system,
              the internal code that governs every project, every decision, and every partnership.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl font-semibold italic">"Excellence is not claimed. It is engineered."</p>
          </div>

          <GoldStandardValues />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="relative min-h-[500px] w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1765452951/bariki/kshtqub1tbrrmgon6jv1.jpg"
                alt="Our Mission"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center py-8">
              <div>
                <TitleChip title="Mission & Vision" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-dark">Our Enduring Mission</h2>

                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Our mission is to <strong className="text-dark">redefine what security means for Africa</strong> by moving it from a reactive
                  cost to a strategic advantage. We engineer resilience from the ground up, ensuring that
                  the continent's growth is built on a foundation of unshakable safety and trust.
                </p>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 my-8 border-l-4 border-primary rounded-r-xl">
                  <p className="text-xl font-medium mb-3 text-dark">We no longer just install equipment.</p>
                  <p className="text-5xl font-bold text-primary font-goldman mb-3">We design resilience.</p>
                  <p className="text-xl font-medium text-dark">We protect the promise of Africa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <CTA variant="partnership" className="bg-gradient-dark py-16" />
      <ClientCarousel />

      <Footer />
    </div>
  );
};

export default About;

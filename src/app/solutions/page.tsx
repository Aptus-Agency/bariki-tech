import Header from '@/components/header';
import Footer from '@/components/footer';
import TitleChip from '@/components/title-chip';
import ClientTiers from '@/components/client-tiers';

export default function ClientSolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
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
            <div className="container-custom text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Gold Standard,
                <span className="text-gradient block">Perfectly Scaled</span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                One Philosophy, Three Pathways to Resilience
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
              From the family home to the nation's infrastructure, our promise remains the same:
              measurable resilience, architected for your world. Bariki Tech's tiered engagement
              model ensures that every client, regardless of size or sector, receives a solution
              precisely engineered for their operational reality and risk profile.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 my-8 border-l-4 border-primary rounded-r-xl">
              <p className="text-xl font-medium mb-3 text-dark">We scale the solution, never the standard. Every client experiences the same</p>
              <p className="text-5xl font-bold text-primary font-goldman mb-3">Gold Standard Ethos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Tiers */}
      <section className="section-padding bg-secondary" id="solutions">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Path to Resilience
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Each tier delivers the Gold Standard, scaled to your specific needs and operational context.
            </p>
          </div>

          <ClientTiers />
        </div>
      </section>

      {/* Cross-Tier Promise */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <TitleChip title="The Unbreakable Commitment" className="border-white text-white" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Cross-Tier Bariki Promise
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              While the technological scope and service intensity differ, our core commitment is
              unvarying. Every Bariki Tech client, in every tier, experiences the same Gold Standard Ethos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h4 className="font-semibold text-lg mb-2">Integrity</h4>
              <p className="text-sm opacity-90">
                Transparent pricing and honest assessments, always.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h4 className="font-semibold text-lg mb-2">Kaizen</h4>
              <p className="text-sm opacity-90">
                Your system is designed with future growth in mind.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h4 className="font-semibold text-lg mb-2">Over-Deliver</h4>
              <p className="text-sm opacity-90">
                The 15% Rule is applied to every project.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h4 className="font-semibold text-lg mb-2">Assurance Index™</h4>
              <p className="text-sm opacity-90">
                Every engagement is measured, scored, and optimized.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-semibold italic">
              "From the simplest installation to the most complex ecosystem, you are not just a
              client—you are a partner in a shared mission for a more secure Africa."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Find Your Tier, Secure Your Future
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's identify the perfect Security solution for your world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-gradient-primary px-8 py-4">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

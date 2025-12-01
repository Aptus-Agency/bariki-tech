import Header from '@/components/header';
import Footer from '@/components/footer';
import TitleChip from '@/components/title-chip';
import ResilienceMatrix from '@/components/resilience-matrix';
import { goldStandardFramework } from '@/lib/data';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function BarikiDifferencePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom text-center">
          <TitleChip title="The Bariki Difference" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Where Promise
            <span className="text-gradient block">Becomes Proof</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We Don't Deliver Projects. We Design Partnerships.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While others promise protection, we guarantee proof. The difference isn't just in what
              we do, but in how we think, build, and measure. It's the reason we are Africa's first
              fully converged security ecosystem, not just another vendor.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Security by Design */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <div>
                <TitleChip title="The Architectural Mindset" />
                <h2 className="text-3xl lg:text-4xl font-bold text-dark">
                  Security by Design
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Most organizations treat security as a purchase—an afterthought, a collection of
                unconnected systems reacting to yesterday's threats.
              </p>

              <p className="text-2xl font-bold text-dark">
                We see it differently. <span className="text-primary">Security is not installed; it is designed.</span>
              </p>

              <p>
                We collaborate directly with architects, developers, and IT strategists from the earliest
                concept stage. This ensures that every wall, gate, network, and device is part of one
                coherent, intelligent defense system woven into the very blueprint of your enterprise.
              </p>

              <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-l-4 border-primary">
                <p className="text-2xl font-semibold italic text-dark mb-0">
                  "True resilience isn't about building higher walls; it's about smarter foundations."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Bariki Resilience Matrix™ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <div>
                <TitleChip title="Proprietary Model" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              The Bariki Resilience Matrix™
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              The Blueprint for Converged Security
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We solved the critical crisis of disconnection between physical and digital security with
              our proprietary model. The Bariki Resilience Matrix™ aligns every layer of your
              ecosystem under a single strategic framework.
            </p>
          </div>

          <ResilienceMatrix />
        </div>
      </section>

      {/* 3. Strategy Backed by Execution */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <div>
                <TitleChip title="The Unbeatable Combination" />
                <h2 className="text-3xl lg:text-4xl font-bold text-dark">
                  Strategy Backed by Execution
                </h2>
              </div>
            </div>

            <p className="text-xl font-bold text-dark mb-6">
              Most consultants write reports. We build the reality behind them.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This is our most fundamental differentiator: <strong className="text-dark">Our consultancy is powered by our own
              execution capability.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card-glass p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="mdi:check-decagram" className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-dark mb-2">Reality-Validated Design</h4>
                <p className="text-sm text-muted-foreground">
                  Every blueprint is stress-tested by the very teams who will install, maintain, and
                  defend it, eliminating theoretical flaws before they are built.
                </p>
              </div>

              <div className="card-glass p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="mdi:brain" className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-dark mb-2">Multi-Domain Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Our consultants are fluent in both "engineering" and "IT," speaking the language
                  of both the boardroom and the server room.
                </p>
              </div>

              <div className="card-glass p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="mdi:package-variant" className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-dark mb-2">Vendor-Neutral Approach</h4>
                <p className="text-sm text-muted-foreground">
                  We design to the best standards, not to specific brands, ensuring you get the
                  optimal solution for your needs.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-l-4 border-primary">
              <p className="text-lg font-medium italic text-dark">
                "They don't just draw plans; they design systems that work."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — Senior Project Engineer, Oil & Gas Consortium Uganda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Gold Standard Framework */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">4</span>
              </div>
              <div>
                <TitleChip title="Excellence, Engineered" className="border-white text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Gold Standard Framework
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every company promises quality. We built a framework to measure it. The Gold Standard
              Framework is the invisible scaffolding that guarantees every project achieves the same
              level of precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {goldStandardFramework.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon icon={item.icon} className="w-9 h-9 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="opacity-90 mb-4 leading-relaxed">{item.description}</p>
                <p className="text-primary-light text-sm font-medium">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            Ready to Partner with a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            This is more than security. It's a commitment to a different way of working—one built on
            transparency, measurable results, and a shared mission to build something that endures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-gradient-primary px-8 py-4">
              Begin Your Partnership
            </Link>
            <Link href="/solutions" className="btn-outline px-8 py-4">
              Explore Client Tiers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

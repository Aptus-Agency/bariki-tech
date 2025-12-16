import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "@iconify/react";

type CTAVariant = 'consultation' | 'audit' | 'partnership';

interface CTAProps {
  className?: string;
  variant?: CTAVariant;
}

const ctaContent = {
  consultation: {
    title: "Ready to Architect Your Resilience?",
    description: "Stop adding disconnected systems. Start building a unified, intelligent security ecosystem designed to anticipate threats, not just respond to them.",
    buttonText: "Schedule Your Consultation",
    buttonHref: "/contact"
  },
  audit: {
    title: "Need a Custom Security Solution?",
    description: "Our experts will assess your requirements and design a tailored security system using the Gold Standard framework. Every solution is engineered for resilience.",
    buttonText: "Book a Security Audit",
    buttonHref: "/contact"
  },
  partnership: {
    title: "Ready to Build with a Partner, Not Just a Provider?",
    description: "Join organizations across Africa who have transformed their security from reactive protection to predictive resilience.",
    buttonText: "Book a Security Audit",
    buttonHref: "/contact"
  }
};

export default function CTA({ className, variant = 'consultation' }: CTAProps) {
  const content = ctaContent[variant];

  return (
    <section className={cn("relative overflow-hidden w-full", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Icon icon="material-symbols:fingerprint" className="absolute -right-20 -bottom-20 text-white/20 w-96 h-96" />
        <Icon icon="material-symbols:fingerprint" className="absolute -left-20 -top-20 text-white/20 w-64 h-64" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="text-left space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {content.title}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              {content.description}
            </p>
            <div className="pt-2">
              <Link href={content.buttonHref}>
                <button className="btn-primary bg-gradient-primary border-none rounded-none text-lg px-8 py-4">
                  {content.buttonText}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Contact */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12 py-4">
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-medium text-white/90">
                24 Hour Hotline
              </h4>
              <a
                href="tel:+256702751312"
                className="block text-4xl lg:text-5xl font-bold text-white hover:text-white/80 transition-colors tracking-tight"
              >
                +256 702 751 312
              </a>
              <p className="text-white/60 text-sm mt-4">
                Our rapid response team is always on standby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
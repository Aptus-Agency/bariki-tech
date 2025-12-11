import { cn } from "@/lib/utils";
import Link from "next/link";

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
    description: "Join organizations across Africa who have transformed their security from reactive protection to predictive resilience. Let's begin your journey to the Gold Standard.",
    buttonText: "Begin Your Partnership",
    buttonHref: "/contact"
  }
};

export default function CTA({ className, variant = 'consultation' }: CTAProps) {
    const content = ctaContent[variant];

    return (
        <div className={cn("text-center animate-scale-in", className)}>
            <div className="p-8 max-w-3xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {content.title}
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                    {content.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={content.buttonHref}>
                        <button className={cn("btn-primary bg-gradient-primary", "border-none rounded-none text-lg px-8 py-4")}>
                            {content.buttonText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}
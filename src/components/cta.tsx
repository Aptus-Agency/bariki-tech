import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTA({ className }: { className?: string }) {
    return (
        <div className={cn("text-center mt-16 animate-scale-in", className)}>
            <div className="p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Need a Custom Security Solution?
                </h3>
                <p className="text-white mb-6">
                    Our experts will assess your requirements and design a tailored security system
                    that meets your specific needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                    <button className={cn("btn-primary bg-gradient-primary", "border-none rounded-none")}>
                        Get Free Consultation
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}
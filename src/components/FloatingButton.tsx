"use client";

import { Icon } from "@iconify/react";

export default function FloatingButton() {
    return (
        <a
            href="tel:+256702751312"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center max-w-content h-14 px-4 gap-2 rounded-full shadow-lg transition-transform hover:scale-110 bg-secondary"
            aria-label="Call us"
        >
            <Icon icon="line-md:phone-loop" className="w-7 h-7" color="white" />
            <p className="text-white text-sm font-bold">0702 751 312</p>
        </a>
    );
}

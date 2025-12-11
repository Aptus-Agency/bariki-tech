'use client'

import { motion } from "framer-motion";

export default function BetterMarquee() {
  return (
    <div className="section-padding bg-dark w-full py-4 md:py-6 text-white z-20 overflow-hidden border-y-4 border-black shadow-[0_0_40px_rgba(255,255,255,0.4)]">
      <motion.div
        className="flex w-fit will-change-transform"
        animate={{ x: "-50%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((key) => (
          <div key={key} className="flex whitespace-nowrap shrink-0">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-4xl lg:text-6xl font-bold uppercase tracking-wider font-goldman text-white">
                Resilience <span className="text-white text-2xl md:text-4xl">●</span>
                Excellence <span className="text-white text-2xl md:text-4xl">●</span>
                Eco-system <span className="text-white text-2xl md:text-4xl">●</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
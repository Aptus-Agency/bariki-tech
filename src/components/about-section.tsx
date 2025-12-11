"use client";

import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Simplified Gold Standard features for homepage
  const features = [
    "98% First-Time Fix Rate",
    "24/7 Support Available",
    "Radical Transparency",
    "15% Over-Delivery Rule",
    "Continuous Improvement",
    "End-to-End Integration"
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TitleChip title="About Bariki Tech" />

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              We Don't Install Equipment.
              <span className="text-gradient block">We Design Resilience.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bariki Tech is Africa's first fully converged security ecosystem. We transform your security posture from reactive protection to predictive resilience, integrating the physical and digital worlds into a single, unbreakable shield.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon icon="mdi-light:check-circle" className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary inline-flex">
              Book a Security Audit
            </Link>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-full"
          >
            <img
              src="https://res.cloudinary.com/zurri-cloud/image/upload/v1762417210/bariki/t8huhfczdtxvnihgpgga.jpg"
              alt="Bariki Tech Security Solutions"
              className="w-full h-full max-w-full max-h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
"use client";

import TitleChip from "./title-chip";
import { servicesData } from "@/lib/data";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ScrollReveal from "./ui/scroll-reveal";

const ServicesSection = () => {
  const services = Object.values(servicesData);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="section-padding bg-[#F2F2F2]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12">
            <TitleChip title="Our Services" />
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Comprehensive Security
              <span className="text-gradient block">Solutions & Services</span>
            </h2>

            {/* Ecosystem Context */}
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground mb-6">
                Our technical solutions are backed by a comprehensive security ecosystem.
                From strategic consultancy to cybersecurity hardening, every installation
                is part of our integrated approach to building resilient security.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                <span>Explore Our Ecosystem Approach</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group card-glass hover-lift overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <a href={`/services/${service.id}`}>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </a>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <a href={`/services/${service.id}`}>
                  <button className="btn-outline w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    Learn More
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
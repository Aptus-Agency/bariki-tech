'use client'

import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";
import { servicesData } from "@/lib/data";
import Carousel from "./ui/carousel";
import { useState } from "react";

const ServicesSection = () => {

  const services = Object.entries(servicesData).map(([id, service]) => (service));

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = services.length;

  const next = (currentIndex: number, totalItems: number) => {
    return (currentIndex + 1) % totalItems
};

const prev = (currentIndex: number, totalItems: number) => {
    return (currentIndex - 1 + totalItems) % totalItems;
};

  return (
    <section id="services" className="section-padding bg-[#F2F2F2]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-0 animate-slide-up flex items-stretch w-full">
          <div className="mb-16 animate-slide-up">
            <TitleChip title="Our Services" />

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Comprehensive Security
              <span className="text-gradient block">Solutions & Services</span>
            </h2>
          </div>
          <div className="self-center items-start flex-1 flex justify-end gap-2">
            <button
              onClick={() => prev(currentIndex, totalItems)}
              aria-label="Previous slide"
              className="bg-white/80 backdrop-blur-sm text-dark hover:bg-primary hover:text-white rounded-full p-2 shadow-elegant transition-all duration-300"
            >
              <Icon icon="mdi-light:chevron-left" className="w-6 h-6" />
            </button>
            <button
              onClick={() => next(currentIndex, totalItems)}
              aria-label="Next slide"
              className="bg-white/80 backdrop-blur-sm text-dark hover:bg-primary hover:text-white rounded-full p-2 shadow-elegant transition-all duration-300"
            >
              <Icon icon="mdi-light:chevron-right" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Services Grid - Now using the enhanced Carousel */}
        <Carousel itemsToShow={3} showNavigationButtons={false} nextCarouselItem={next} prevCarouselItem={prev}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-glass hover-lift overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              </div>

              {/* Service Content */}
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
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default ServicesSection;
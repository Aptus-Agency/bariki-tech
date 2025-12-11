'use client'

import { Icon } from "@iconify/react";
import Carousel from "./ui/carousel";
import { useState } from "react";
import { achievements, stats, testimonials } from "@/lib/data";

const StatsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = testimonials.length;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Trusted by Hundreds of
            <span className="text-gradient block">Satisfied Clients</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our commitment to excellence and customer satisfaction has made us
            the preferred security solutions provider across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div key={index} className="flex items-start relative mb-10 group">
              {/* Background Number */}
              <div className="absolute right-0 top-0 text-[100px] font-bold text-primary/10 leading-none -z-10 select-none transition-all duration-500 group-hover:text-primary/20">
                0{index + 1}
              </div>

              {/* Main Number */}
              <div className="inline-block text-center w-[130px] relative">
                <h2 className="text-[70px] font-bold text-transparent [-webkit-text-stroke:1px_#97bbc5] leading-none m-0">
                  {stat.number.replace(/\D/g, '')}
                </h2>
                <span className="bg-primary h-10 w-10 inline-block text-center font-bold text-dark text-xl rounded-full leading-[38px] -translate-y-[26px] shadow-lg">
                  {stat.number.includes('+') ? '+' : '%'}
                </span>
              </div>

              {/* Content */}
              <div className="pl-5 relative z-10 pt-4">
                <h4 className="text-white text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h4>
                <p className="text-white/70 text-sm m-0">
                  {stat.icon === 'mdi:building-outline' && 'Successful security installations across the region.'}
                  {stat.icon === 'mdi:account-group-outline' && 'Dedicated professionals ensuring your safety.'}
                  {stat.icon === 'mdi:award-outline' && 'Satisfied clients trusting our gold standard.'}
                  {stat.icon === 'mdi:clock-outline' && 'Years of proven excellence in security.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Carousel itemsToShow={1} currentIndex={currentIndex} nextItem={nextItem} prevItem={prevItem}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
                  <p className="text-lg md:text-xl text-gray-200 mb-8">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-crypto-purple"
                    />
                    <div className="ml-4">
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
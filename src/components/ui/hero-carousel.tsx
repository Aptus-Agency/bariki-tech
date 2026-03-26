'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import Link from 'next/link';
import { servicesData } from '@/lib/data';

const subtitleMap: Record<string, string> = {
  'cctv-surveillance': 'Surveillance Solutions',
  'electric-fencing': 'Perimeter Security',
  'access-control': 'Entry Management',
  'gate-automation': 'Gate Automation',
  'vehicle-access-control-barriers': 'Traffic & Fleet Security',
};

const slides = Object.values(servicesData)
  .slice(0, 5)
  .map((s) => ({
    subtitle: subtitleMap[s.id] ?? s.title,
    title: s.title,
    description: s.description,
    bg: s.heroImage || s.image,
    link: `/services/${s.id}`,
  }));

const bottomFeatures = [
  'Professional Installation',
  '24/7 System Monitoring',
  'Rapid Response Support',
  '15+ Years Experience',
];

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="home" className="relative h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, rgb(30, 32, 36), rgb(47, 49, 55))' }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectCube]}
        effect="cube"
        cubeEffect={{ shadow: false, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
        style={
          {
            '--swiper-pagination-color': 'hsl(193 100% 69%)',
            '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.45)',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bottom': '5.5rem',
          } as React.CSSProperties
        }
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative h-full">
            {/* Background image + overlays */}
            <div className="absolute inset-0">
              <img
                src={slide.bg}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
            </div>

            {/* Slide content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {slide.subtitle}
                  </p>
                  <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mb-8 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                    {slide.description}
                  </p>
                  <div className="flex gap-2">
                    <Link href={slide.link}>
                      <button className="btn-hero-alt border-none">
                        Explore Service
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="btn-hero border-none">
                        Get Free Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom features bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-white/10 bg-dark/60 backdrop-blur-sm sm:block">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 divide-x divide-white/10">
                  {bottomFeatures.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-white/85"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

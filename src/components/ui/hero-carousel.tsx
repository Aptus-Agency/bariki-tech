'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import Link from 'next/link';

const slides = [
  {
    subtitle: 'Surveillance Solutions',
    title: 'Digital CCTV Surveillance Systems',
    description:
      'Advanced IP camera networks, HD recording, and real-time remote monitoring to keep your property under 24/7 watch.',
    bg: '/cctv-installation.jpg',
  },
  {
    subtitle: 'Perimeter Security',
    title: 'High Security Electric Fencing',
    description:
      'Energized perimeter solutions that deter intruders, trigger instant alerts, and integrate seamlessly with your security ecosystem.',
    bg: '/electric-fencing.jpg',
  },
  {
    subtitle: 'Entry Management',
    title: 'Access Control Systems',
    description:
      'Biometric readers, smart cards, and PIN-based entry systems that give you complete control over who enters your premises.',
    bg: '/access-control.jpg',
  },
  {
    subtitle: 'Gate Automation',
    title: 'Automated Gate Systems',
    description:
      'Motorized sliding and swing gates with remote operation, intercom integration, and obstruction safety sensors.',
    bg: '/project-corporate-access.jpg',
  },
  {
    subtitle: 'Traffic & Fleet Security',
    title: 'Vehicle Access Control Systems',
    description:
      'Boom barriers, ANPR cameras, and RFID-based lane management for secure, efficient vehicle access at any facility.',
    bg: '/project-warehouse-security.jpg',
  },
];

const bottomFeatures = [
  'Professional Installation',
  '24/7 System Monitoring',
  'Rapid Response Support',
  '5-Year Workmanship Warranty',
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
              <div className="absolute inset-0 bg-dark/75" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />
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
                  <Link href="/contact">
                    <button className="btn-hero border-none">
                      Get Free Consultation
                    </button>
                  </Link>
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

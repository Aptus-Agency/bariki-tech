"use client";

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/lib/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false)

  const services = Object.values(servicesData);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-elegant mt-0'
          : 'bg-transparent text-white'
          }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221309/bariki/alh0lrkyjtbzydirlamy.png"
                alt="Bariki Tech Security Solutions"
                className="h-[100px] w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navigationItems.map((item, index) => {
                if (index === 2) {
                  return (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <div className="hover:text-greenish transition-colors flex items-center gap-1 btn-ghost relative group">
                        Services
                        <motion.div
                          animate={{ rotate: isServicesHovered ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <Icon icon="mdi-light:chevron-down" />
                        </motion.div>
                      </div>
                      <div
                        className={`absolute top-full left-0 mt-2 p-8 bg-white shadow-lg transition-all duration-300 w-[100vw] grid grid-cols-3 ${isServicesHovered
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                          }`}
                      >
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              href={`/services/${service.id}`}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors normal-case"
                            >
                              <div>
                                <h3 className='font-medium text-lg mb-4'>{service.title}
                                <p className='text-sm line-clamp-3'>{service.description}</p></h3>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )
                }
                return <a
                  key={item.label}
                  href={item.href}
                  className="btn-ghost relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              }
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="btn-outline">
                Get Quote
              </button>
              <button className="btn-primary">
                Emergency Service
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <Icon icon="mdi-light:x" /> : <Icon icon="mdi-light:menu" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-border">
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="btn-ghost justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <button className="btn-outline">
                    Get Quote
                  </button>
                  <button className="btn-primary">
                    Emergency Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
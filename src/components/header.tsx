"use client";

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/lib/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

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
    { label: 'Services', href: '#' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-elegant'
          : 'bg-transparent text-white'
          }`}
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221309/bariki/alh0lrkyjtbzydirlamy.png"
                alt="Bariki Tech Security Solutions"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <div className="btn-ghost relative group flex items-center gap-1">
                        {item.label}
                        <motion.div
                          animate={{ rotate: isServicesHovered ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <Icon icon="mdi-light:chevron-down" />
                        </motion.div>
                      </div>
                      <div
                        className={`absolute top-full left-0 mt-2 bg-white w-64 shadow-lg rounded-none transition-all duration-300 ${isServicesHovered
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                          }`}
                      >
                        <div className="">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              href={`/services/${service.id}`}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors normal-case"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    (
                      <div
                        key={item.label}
                      >
                        <Link href={item.href} className="btn-ghost relative group flex items-center gap-1">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      </div>
                    )
                  )
                }
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://api.whatsapp.com/send?phone=256702751312" className="btn-primary bg-gradient-primary">Book Free Site Visit</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              <Icon icon={isMenuOpen ? "mdi-light:x" : "mdi-light:menu"} className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Services Full-Width Dropdown */}
        <AnimatePresence>
          {false && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <div className="container-custom py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100/80 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-md mt-1">
                        <Icon icon={service.icon || 'mdi:shield-check-outline'} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-dark mb-1 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-border">
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="btn-ghost justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <button className="btn-primary bg-gradient-primary">Book Free Site Visit</button>
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
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#' },
    { label: 'About', href: '/about' },
    { label: 'Porfolio', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
          }`}
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <nav className="container-custom px-4 lg:px-8 font-sans">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221309/bariki/alh0lrkyjtbzydirlamy.png"
                alt="Bariki Tech Security Solutions"
                className="h-20 w-auto max-w-[70vw] lg:max-w-none object-contain transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navigationItems.map((item, idx) => {
                if (item.label === 'Services') {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`relative group flex items-center gap-1.5 px-4 py-2.5 text-lg rounded-lg font-semibold cursor-pointer transition-all duration-300 ${isScrolled
                          ? 'hover:text-primary hover:bg-primary/5'
                          : 'text-white hover:text-primary hover:bg-white/10'
                          }`}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: isServicesHovered ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <Icon icon="ic:round-arrow-drop-down" className="w-5 h-5" />
                        </motion.div>
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {/* Enhanced Mega Menu */}
                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full -left-3/4 -translate-x-1/2 mt-3 bg-white w-[750px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border border-gray-100"
                          >
                            <div className="grid grid-cols-2 divide-x divide-gray-100">
                              {/* Ecosystem Column */}
                              <div className="p-7">
                                <div className="flex items-center gap-2.5 mb-5">
                                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                                    <Icon icon="mdi:network" className="w-5 h-5 text-primary" />
                                  </div>
                                  <h3 className="font-bold text-dark text-sm uppercase tracking-wider">Our Ecosystem</h3>
                                </div>
                                <div className="space-y-1">
                                  <Link
                                    href="/services"
                                    className="group block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 rounded-xl"
                                  >
                                    <div className="font-semibold text-base mb-0.5 group-hover:translate-x-1 transition-transform duration-300">All Services</div>
                                  </Link>
                                  <Link
                                    href="/solutions"
                                    className="group block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 rounded-xl"
                                  >
                                    <div className="font-semibold text-base mb-0.5 group-hover:translate-x-1 transition-transform duration-300">Client Solutions</div>
                                    <div className="text-xs text-muted-foreground">Gold Standard, Perfectly Scaled</div>
                                  </Link>
                                </div>
                              </div>

                              {/* Technical Solutions Column */}
                              <div className="p-7 bg-gradient-to-br from-gray-50/50 to-white">
                                <div className="flex items-center gap-2.5 mb-5">
                                  <div className="p-2 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg">
                                    <Icon icon="mdi:tools" className="w-5 h-5 text-secondary" />
                                  </div>
                                  <h3 className="font-bold text-dark text-sm uppercase tracking-wider">Technical Solutions</h3>
                                </div>
                                <div className="space-y-1 max-h-[420px] overflow-y-auto custom-scrollbar pr-2">
                                  {services.map((service, index) => (
                                    <Link
                                      key={index}
                                      href={`/services/${service.id}`}
                                      className="group block px-4 py-2.5 text-sm text-black hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 hover:text-secondary transition-all duration-300 rounded-xl"
                                    >
                                      <div className="font-medium group-hover:translate-x-1 transition-transform duration-300">{service.title}</div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                } else {
                  return (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative group flex items-center gap-1 px-4 py-2.5 rounded-lg font-semibold text-lg transition-all duration-300 ${isScrolled
                          ? 'hover:text-primary hover:bg-primary/5'
                          : 'text-white hover:text-primary hover:bg-white/10'
                          }`}
                      >
                        {item.label}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  )
                }
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(96, 239, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://api.whatsapp.com/send?phone=256702751312"
                className="hidden lg:flex relative px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base rounded-xl overflow-hidden group shadow-lg hover:shadow-[0_10px_40px_rgba(96,239,255,0.4)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                  Book Free Site Visit
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg backdrop-blur-sm transition-all text-white bg-secondary`}
                aria-label="Toggle mobile menu"
              >
                <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-lg"
                  aria-label="Close menu"
                >
                  <Icon icon="mdi:close" className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="p-6">
                {navigationItems.map((item) => (
                  <MobileMenuItem 
                    key={item.label} 
                    item={item} 
                    onClose={() => setIsMenuOpen(false)} 
                    services={services} 
                  />
                ))}

                {/* Mobile CTA */}
                <a
                  href="https://api.whatsapp.com/send?phone=256702751312"
                  className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base rounded-xl shadow-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                  Book Free Site Visit
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileMenuItem = ({
  item,
  onClose,
  services
}: {
  item: { label: string; href: string }
  onClose: () => void
  services: any[]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.label !== 'Services') {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-3 text-gray-800 hover:text-primary transition-colors font-medium border-b border-gray-100 last:border-0"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 text-gray-800 hover:text-primary transition-colors font-medium"
      >
        {item.label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <Icon icon="ic:round-arrow-drop-down" className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">
              <Link
                href="/services"
                onClick={onClose}
                className="block py-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
              >
                All Services
              </Link>
              <Link
                href="/solutions"
                onClick={onClose}
                className="block py-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
              >
                Client Solutions
              </Link>
              <div className="pt-3 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Technical Solutions
              </div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.id}`}
                  onClick={onClose}
                  className="block py-2 text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
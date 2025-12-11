"use client";

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { servicesData, ecosystemBranches } from '@/lib/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const services = Object.values(servicesData);
  const branches = Object.values(ecosystemBranches);

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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm'
          }`}
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221309/bariki/alh0lrkyjtbzydirlamy.png"
                alt="Bariki Tech Security Solutions"
                className="h-16 lg:h-20 w-auto transition-all duration-300"
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
                        className={`relative group flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 ${isScrolled
                            ? 'text-gray-700 hover:text-primary hover:bg-primary/5'
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
                                    <div className="font-semibold text-base mb-0.5 group-hover:translate-x-1 transition-transform duration-300">View All Branches</div>
                                    <div className="text-xs text-muted-foreground">The Virtuous Cycle</div>
                                  </Link>
                                  <Link
                                    href="/solutions"
                                    className="group block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 rounded-xl"
                                  >
                                    <div className="font-semibold text-base mb-0.5 group-hover:translate-x-1 transition-transform duration-300">Client Solutions</div>
                                    <div className="text-xs text-muted-foreground">Gold Standard, Perfectly Scaled</div>
                                  </Link>
                                  <Link
                                    href="/difference"
                                    className="group block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 rounded-xl"
                                  >
                                    <div className="font-semibold text-base mb-0.5 group-hover:translate-x-1 transition-transform duration-300">The Bariki Difference</div>
                                    <div className="text-xs text-muted-foreground">Where Promise Becomes Proof</div>
                                  </Link>
                                  <div className="border-t border-gray-200 my-3"></div>
                                  {branches.slice(0, 4).map((branch, index) => (
                                    <div
                                      key={index}
                                      className="group px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 rounded-xl cursor-pointer"
                                    >
                                      <div className="font-medium text-[15px] mb-0.5 group-hover:translate-x-1 transition-transform duration-300">{branch.branch}</div>
                                      <div className="text-xs text-muted-foreground">{branch.tagline}</div>
                                    </div>
                                  ))}
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
                                      className="group block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 hover:text-secondary transition-all duration-300 rounded-xl"
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
                        className={`relative group flex items-center gap-1 px-4 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 ${isScrolled
                            ? 'text-gray-700 hover:text-primary hover:bg-primary/5'
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(96, 239, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://api.whatsapp.com/send?phone=256702751312"
                className="relative px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base rounded-xl overflow-hidden group shadow-lg hover:shadow-[0_10px_40px_rgba(96,239,255,0.4)] transition-all duration-300"
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
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${isScrolled
                  ? 'bg-primary/10 text-primary hover:bg-primary/20'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              aria-label="Toggle Menu"
            >
              <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} className="h-6 w-6" />
            </motion.button>
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="container-custom py-6">
                <motion.div
                  className="flex flex-col gap-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            y: { stiffness: 1000, velocity: -100 }
                          }
                        },
                        closed: {
                          y: 20,
                          opacity: 0,
                          transition: {
                            y: { stiffness: 1000 }
                          }
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-5 py-4 text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl font-semibold text-lg transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                        <Icon icon="mdi:chevron-right" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    className="pt-4 mt-4 border-t border-gray-200"
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=256702751312"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[0_10px_40px_rgba(96,239,255,0.4)] transition-all duration-300"
                    >
                      <Icon icon="mdi:whatsapp" className="w-6 h-6" />
                      Book Free Site Visit
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
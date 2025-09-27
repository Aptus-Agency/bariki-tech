"use client";

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-dark-foreground py-2 px-4 text-sm">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon icon="mdi-light:phone" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi-light:email" />
              <span>info@barikitech.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi-light:shield" />
            <span>Trusted Security Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-elegant mt-0' 
            : 'bg-transparent mt-12'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={'/bariki-logo.png'} 
                alt="Bariki Tech Security Solutions" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="font-bold text-lg text-dark leading-tight">
                  BARIKI TECH
                </h1>
                <p className="text-xs text-muted-foreground">Security Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="btn-ghost relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
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
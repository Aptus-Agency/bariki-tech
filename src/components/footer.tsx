import { socialLinks } from "@/lib/data";
import { Icon } from "@iconify/react";

const Footer = () => {
  const services = [
    'CCTV Surveillance',
    'Electric Fencing',
    'Access Control',
    'Gate Automation',
    'Time & Attendance',
    'Security Consulting'
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Projects',
    'Contact',
    'Privacy Policy',
    'Terms of Service'
  ];

  return (
    <footer className="bg-dark text-dark-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={"/bariki-logo.png"} 
                alt="Bariki Tech Security Solutions" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg text-white leading-tight">
                  BARIKI TECH
                </h3>
                <p className="text-xs text-white/60">Security Solutions</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Protecting lives and property through smart, reliable, and customized 
              security solutions. Your trusted partner for comprehensive security needs.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon icon="mdi-light:map-marker" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Nairobi, Kenya</p>
                  <p className="text-white/60 text-sm">Professional Security Center</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon icon="mdi-light:phone" className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">+254 700 000 000</p>
                  <p className="text-white/60 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon icon="mdi-light:email" className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">info@barikitech.com</p>
                  <p className="text-white/60 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <p>&copy; 2024 Bariki Tech Security Solutions. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Icon icon="mdi-light:shield" className="w-4 h-4 text-primary" />
              <span>Licensed & Insured Security Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
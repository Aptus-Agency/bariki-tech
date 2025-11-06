import { socialLinks } from "@/lib/data";
import { Icon } from "@iconify/react";

const Footer = () => {
  const services = [
    {title: 'CCTV Surveillance', href: '/services/cctv-surveillance'},
    {title: 'Electric Fencing', href: '/services/electric-fencing'},
    {title: 'Access Control', href: '/services/access-control'},
    {title: 'Gate Automation', href: '/services/gate-automation'},
  ];

  const quickLinks = [
    {title: 'About Us', href: '/about'},
    {title: 'Our Services', href: '/services/cctv-surveillance'},
    {title: 'Projects', href: '/projects'},
    {title: 'Contact', href: '/contact'},
  ];

  return (
    <footer className="bg-dark text-dark-foreground">
      {/* Main Footer */}
      <div className="container-custom pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={"/bariki-logo.png"} 
                alt="Bariki Tech Security Solutions" 
                className="h-24 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg text-dark leading-tight">
                  BARIKI TECH
                </h3>
                <p className="text-xs text-dark/60">Security Solutions</p>
              </div>
            </div>
            
            <p className="text-dark/80 mb-6 leading-relaxed">
              Protecting lives and property through smart, reliable, and customized 
              security solutions. Your trusted partner for comprehensive security needs.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-2 pt-16">
            {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a 
                    href={service.href} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {service.title}
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
                <li key={link.title}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.title}
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
                  <p className="text-white/80">Hancock Rd Ntinda, Kamapala</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon icon="mdi-light:phone" className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">+256 702 751 312</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon icon="mdi-light:email" className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">info@barikitech.com</p>
                </div>
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
              <p>&copy; {new Date().getFullYear()} Bariki Tech Security Solutions. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Licensed & Insured Security Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
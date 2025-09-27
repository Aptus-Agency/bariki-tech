import heroImage from '@/assets/hero-security.jpg';
import { Icon } from "@iconify/react";

const HeroSection = () => {
  const stats = [
    { icon: "mdi-light:shield", label: 'Projects Completed', value: '500+' },
    { icon: "mdi-light:users", label: 'Happy Clients', value: '200+' },
    { icon: "mdi-light:award", label: 'Years Experience', value: '10+' },
    { icon: "mdi-light:clock", label: '24/7 Support', value: 'Always' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={'/hero-security.jpg'} 
          alt="Security surveillance system" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50"></div>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Icon icon="mdi-light:shield" />
              <span className="font-medium">Professional Security Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Protect What
              <span className="text-gradient block">Matters Most</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
              Smart, reliable, and customized security solutions for your home, business, 
              and institution. Backed by expert engineers and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-hero group">
                Get Free Consultation
                <Icon icon="mdi-light:arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline border-white/30 text-white hover:bg-white hover:text-dark">
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>24/7 Emergency Response</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative animate-slide-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`card-glass p-6 text-center hover-lift ${
                    index % 2 === 0 ? 'animate-float' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <Icon icon={stat.icon} className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
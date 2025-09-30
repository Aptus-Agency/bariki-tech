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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white space-y-8">
          {/* Corner Brackets and Title */}
          <div className="relative inline-block mb-8">
            <div className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-white"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 border-r-2 border-t-2 border-white"></div>
            <h1 className="text-7xl md:text-8xl font-bold font-display leading-tight">
                Protect What
                <span className="text-gradient block">Matters Most</span>
              </h1>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-2 border-b-2 border-white"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-white"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
          Smart, reliable, and customized security solutions for your home, business, 
          and institution. Backed by expert engineers and 24/7 support.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="btn-hero group">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
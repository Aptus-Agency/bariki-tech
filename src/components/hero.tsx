const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-tech-pattern">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--tech-dot)) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, hsl(var(--tech-dot)) 1px, transparent 1px),
            radial-gradient(circle at 40% 20%, hsl(var(--tech-dot)) 1px, transparent 1px),
            radial-gradient(circle at 90% 30%, hsl(var(--tech-dot)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px, 180px 180px',
        }}></div>
      </div>

      {/* Hexagonal Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="hsl(var(--tech-line))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Corner Brackets and Title */}
          <div className="relative inline-block">
            <div className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-foreground"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 border-r-2 border-t-2 border-foreground"></div>
            <h1 className="text-8xl md:text-9xl font-bold tracking-[0.2em] font-display">
              SECURE
            </h1>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-2 border-b-2 border-foreground"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-foreground"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Keep your home or business safe with CCTV systems designed to provide 24/7
            surveillance and peace of mind.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="btn-hero group">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
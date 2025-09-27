import { Icon } from "@iconify/react";

const AboutSection = () => {
  const features = [
    'Licensed security professionals',
    'State-of-the-art equipment',
    '24/7 monitoring & support',
    'Custom security solutions',
    'Preventive maintenance',
    'Emergency response team'
  ];

  const values = [
    {
      icon: "mdi-light:shield",
      title: 'Dependable Protection',
      description: 'Smart Solutions. Ongoing Care.',
      highlight: 'We don\'t just install, we integrate, protect, maintain and build trust.'
    },
    {
      icon: "mdi-light:target",
      title: 'Our Mission',
      description: 'To protect lives and property through smart security installations, excellent service and ongoing care.'
    },
    {
      icon: "mdi-light:eye",
      title: 'Our Vision',
      description: 'To be the most trusted provider of smart, dependable, caring security solutions in Africa.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Icon icon="mdi-light:award" className="w-5 h-5" />
              <span className="font-medium">About Bariki Tech</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              We Protect Lives and Property Through
              <span className="text-gradient block">Smart Security Solutions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Bariki Tech Ltd, we exist to protect what matters most—lives and property—through 
              smart, reliable, and customized security solutions. We specialize in the design, 
              installation, and maintenance of CCTV surveillance, electric fencing, access control 
              systems, gate automation, time and attendance solutions, and more.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our solutions are trusted by schools, hospitals, residential estates, businesses, and 
              institutions that demand dependable security and peace of mind. Backed by a team of highly 
              trained engineers and technicians, Bariki Tech has built a strong reputation for innovation, 
              integrity, and excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon icon="mdi-light:check-circle" className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Values Cards */}
          <div className="animate-slide-right space-y-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="card-glass p-6 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon icon={value.icon} className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {value.description}
                    </p>
                    {value.highlight && (
                      <p className="text-sm text-primary font-medium">
                        {value.highlight}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
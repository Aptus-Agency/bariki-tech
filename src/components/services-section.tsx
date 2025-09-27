import { Icon } from "@iconify/react";

const ServicesSection = () => {
  const services = [
    {
      icon: "mdi-light:camera",
      title: 'CCTV Surveillance',
      description: 'Advanced surveillance systems with HD cameras, remote monitoring, and intelligent analytics for comprehensive security coverage.',
      image: "/cctv-installation.jpg",
      features: ['HD/4K Video Quality', 'Remote Monitoring', 'Motion Detection', 'Night Vision', 'Cloud Storage', 'Mobile App Access']
    },
    {
      icon: "mdi-light:zap",
      title: 'Electric Fencing',
      description: 'High-voltage perimeter protection systems designed to deter intruders while ensuring safety and reliability.',
      image: "/electric-fencing.jpg",
      features: ['High Voltage Protection', 'Alarm Integration', 'Weather Resistant', 'Low Maintenance', 'Solar Options', 'Monitoring Systems']
    },
    {
      icon: "mdi-light:key",
      title: 'Access Control',
      description: 'Smart access control systems including biometric scanners, keycards, and automated entry management.',
      image: "/access-control.jpg",
      features: ['Biometric Scanners', 'Keycard Systems', 'Mobile Access', 'Time Scheduling', 'Visitor Management', 'Integration Ready']
    },
    {
      icon: "mdi-light:shield",
      title: 'Gate Automation',
      description: 'Automated gate systems with remote control, safety features, and integration with existing security systems.',
      image: "/cctv-installation.jpg",
      features: ['Remote Control', 'Safety Sensors', 'Backup Power', 'Integration Ready', 'Mobile App', 'Emergency Override']
    },
    {
      icon: "mdi-light:timer",
      title: 'Time & Attendance',
      description: 'Comprehensive workforce management solutions with biometric time tracking and reporting systems.',
      image: "/electric-fencing.jpg",
      features: ['Biometric Tracking', 'Real-time Reports', 'Mobile Integration', 'Shift Management', 'Analytics', 'Payroll Integration']
    },
    {
      icon: "mdi-light:user",
      title: 'Security Consulting',
      description: 'Expert security assessments and consulting services to identify vulnerabilities and recommend optimal solutions.',
      image: "/electric-fencing.jpg",
      features: ['Risk Assessment', 'Custom Solutions', 'Implementation Planning', 'Training Programs', 'Maintenance Plans', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Icon icon="mdi-light:shield" className="w-5 h-5" />
            <span className="font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Comprehensive Security
            <span className="text-gradient block">Solutions & Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From CCTV surveillance to access control, we provide complete security solutions 
            tailored to your specific needs and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group card-glass hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon icon={service.icon} className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-outline w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Need a Custom Security Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts will assess your requirements and design a tailored security system 
              that meets your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Free Consultation
              </button>
              <button className="btn-outline">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
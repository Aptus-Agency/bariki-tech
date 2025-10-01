import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";
import { services } from "@/lib/data";
import Carousel from "./ui/carousel";

const ServicesSection = () => {

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <TitleChip title="Our Services" />

          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Comprehensive Security
            <span className="text-gradient block">Solutions & Services</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From CCTV surveillance to access control, we provide complete security solutions
            tailored to your specific needs and requirements.
          </p>
        </div>

        {/* Services Grid - Now using the enhanced Carousel */}
        <Carousel itemsToShow={3}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-glass hover-lift overflow-hidden h-full flex flex-col"
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
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <button className="btn-outline w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </Carousel>

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
import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";
import { servicesData } from "@/lib/data";

const ServicesSection = () => {
  const services = Object.values(servicesData);

  return (
    <section id="services" className="section-padding bg-[#F2F2F2]">
      <div className="container-custom">
        <div className="mb-16 animate-slide-up">
          <TitleChip title="Our Services" />
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Comprehensive Security
            <span className="text-gradient block">Solutions & Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-glass hover-lift overflow-hidden h-full flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <a href={`/services/${service.id}`}>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </a>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <a href={`/services/${service.id}`}>
                  <button className="btn-outline w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
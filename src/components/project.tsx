import { features } from "@/lib/data";
import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";

const Project = () => {

  return (
    <section id="project" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-right space-y-6">
            <img 
              src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221308/bariki/mzefic6yjt2vt0cxxdtn.jpg" 
              alt="Bariki Tech Security Solutions" 
              className="w-full h-auto"
            />
          </div>

          <div className="animate-slide-left">
            <TitleChip title="Installation Project" />
            
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Installation Project
              <span className="text-gradient block">Smart Security Solutions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Bariki Tech Ltd, we exist to protect what matters most—lives and property—through 
              smart, reliable, and customized security solutions. We specialize in the design, 
              installation, and maintenance of CCTV surveillance, electric fencing, access control 
              systems, gate automation, time and attendance solutions, and more.
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
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
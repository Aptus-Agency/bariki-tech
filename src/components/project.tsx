import { features } from "@/lib/data";
import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";

const Project = () => {

  return (
    <section id="product" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-right h-full">
            <img
              src="https://res.cloudinary.com/zurri-cloud/image/upload/v1762420276/bariki/kpi5k4aqnftawfxxoxe0.webp"
              alt="Pro Series with ColorVu 3.0"
              className="w-full h-full max-w-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="animate-slide-left">

            <TitleChip title="Latest Product Offering" />

            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Pro Series with ColorVu 3.0
              <span className="text-gradient block">Making Pro, More Pro</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience next-generation surveillance with our Pro Series featuring ColorVu 3.0 technology.
              Capture full-color images 24/7, even in complete darkness. With advanced AI-powered detection,
              ultra-high resolution, and intelligent features, this system delivers unmatched security and
              peace of mind for your property.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon icon="mingcute:check-2-line" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-dark font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a href="https://api.whatsapp.com/send?phone=256702751312" className="btn-primary bg-gradient-primary">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
import { features } from "@/lib/data";
import { Icon } from "@iconify/react";
import TitleChip from "./title-chip";
import Link from "next/link";

const AboutSection = () => {

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-left">
            <TitleChip title="About Bariki Tech" />
            
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

            {/* <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our solutions are trusted by schools, hospitals, residential estates, businesses, and 
              institutions that demand dependable security and peace of mind. Backed by a team of highly 
              trained engineers and technicians, Bariki Tech has built a strong reputation for innovation, 
              integrity, and excellence.
            </p> */}

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon icon="mdi-light:check-circle" className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          {/* Right Content - Values Cards */}
          <div className="animate-slide-right space-y-6">
            <img 
              src="https://res.cloudinary.com/zurri-cloud/image/upload/v1759221308/bariki/mzefic6yjt2vt0cxxdtn.jpg" 
              alt="Bariki Tech Security Solutions" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
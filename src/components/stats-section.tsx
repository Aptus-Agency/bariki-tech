import { Icon } from "@iconify/react";
import Carousel from "./ui/carousel";

const StatsSection = () => {
  const stats = [
    {
      icon: "bxs:check-shield",
      value: '500+',
      label: 'Installations Completed',
      description: 'Successful security installations'
    },
    {
      icon: "bxs:happy",
      value: '200+',
      label: 'Happy Clients',
      description: 'Satisfied customers nationwide'
    },
    {
      icon: "bxs:rocket",
      value: '10+',
      label: 'Years Experience',
      description: 'Proven track record'
    },
    {
      icon: "bxs:time",
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance'
    }
  ];

  const testimonials = [
    {
      quote: "CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns.",
      author: "Michael Chen",
      role: "Full-time Trader",
      avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop"
    },
    {
      quote: "As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently.",
      author: "Sarah Johnson",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
    },
    {
      quote: "The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found.",
      author: "David Rodriguez",
      role: "Cybersecurity Specialist",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop"
    },
    {
      quote: "Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable.",
      author: "Emma Thompson",
      role: "Investment Advisor",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Trusted by Hundreds of
            <span className="text-gradient block">Satisfied Clients</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our commitment to excellence and customer satisfaction has made us
            the preferred security solutions provider across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-scale-in flex"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Icon icon={stat.icon} className="w-8 h-8 text-primary" />
              </div>

              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                <p className="text-white/60 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Carousel itemsToShow={1}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Icon icon="mdi-light:star" key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-200 mb-8">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-crypto-purple"
                    />
                    <div className="ml-4">
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import { Icon } from "@iconify/react";

const StatsSection = () => {
  const stats = [
    {
      icon: "mdi-light:shield",
      value: '500+',
      label: 'Projects Completed',
      description: 'Successful security installations'
    },
    {
      icon: "mdi-light:users",
      value: '200+',
      label: 'Happy Clients',
      description: 'Satisfied customers nationwide'
    },
    {
      icon: "mdi-light:award",
      value: '10+',
      label: 'Years Experience',
      description: 'Proven track record'
    },
    {
      icon: "mdi-light:clock",
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
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
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Icon icon={stat.icon} className="w-8 h-8 text-primary" />
              </div>
              
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
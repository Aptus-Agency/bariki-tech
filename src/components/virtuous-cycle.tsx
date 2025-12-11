'use client';

import { Icon } from '@iconify/react';
import { motion, Variants } from 'framer-motion';

const VirtuousCycle = () => {
  const cycle = [
    { label: 'CONSULT', icon: 'mdi:brain', description: 'Strategic advisory and architecture' },
    { label: 'INTEGRATE', icon: 'mdi:network', description: 'Unified system deployment' },
    { label: 'MAINTAIN', icon: 'mdi:tools', description: 'Ongoing care and optimization' },
    { label: 'TRAIN', icon: 'mdi:school', description: 'Knowledge transfer and capability building' },
    { label: 'CYBERSECURE', icon: 'mdi:security', description: 'Digital layer hardening' },
    { label: 'CONSULT', icon: 'mdi:brain', description: 'Strategic advisory and architecture' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop View - Horizontal Flow */}
      <motion.div
        className="hidden md:flex items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cycle.map((item, index) => (
          <motion.div key={index} className="flex items-center" variants={itemVariants}>
            {/* Cycle Item */}
            <div className="group relative w-[200px]">
              <div className="card-glass-dark p-6  hover:shadow-primary transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={item.icon} className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-bold text-dark mb-2">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>

            {/* Arrow - Show after each item except last */}
            {index < cycle.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.3 }}
              >
                <Icon
                  icon="mdi:arrow-right"
                  className="w-6 h-6 text-secondary mx-2 flex-shrink-0"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile View - Vertical Stack */}
      <motion.div
        className="md:hidden space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cycle.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon icon={item.icon} className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-dark mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            {index < cycle.length - 1 && (
              <div className="flex justify-center my-2">
                <Icon icon="mdi:arrow-down" className="w-6 h-6 text-primary" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Back to CONSULT */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-4 pt-4 border-t-2 border-dashed border-primary"
          variants={itemVariants}
        >
          <Icon icon="mdi:arrow-up-bold-circle" className="w-7 h-7 text-primary" />
          <span className="font-bold text-primary">CONSULT</span>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-white italic max-w-4xl mx-auto">
          "Each branch is independent in function but interdependent in purpose. When we consult, we bring the intelligence of every branch with us."
        </p>
      </motion.div>
    </div>
  );
};

export default VirtuousCycle;

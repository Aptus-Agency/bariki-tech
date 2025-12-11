'use client';

import { goldStandardValues } from '@/lib/data';
import { Icon } from '@iconify/react';
import { motion, Variants } from 'framer-motion';

const GoldStandardValues = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {goldStandardValues.map((value, index) => (
        <motion.div
          key={index}
          className="card-glass-dark p-6 hover:shadow-primary transition-all duration-300 group"
          variants={itemVariants}
        >
          {/* Icon */}
          <div className="mb-4">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon
                icon="tabler:robot"
                className="w-12 h-12 text-secondary"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-dark mb-3">
            {value.title}
          </h3>

          {/* Interpretation */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {value.interpretation}
          </p>

          {/* In Action */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm font-medium text-secondary">
              In Action:
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {value.inAction}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GoldStandardValues;

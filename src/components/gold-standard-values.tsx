'use client';

import { goldStandardValues } from '@/lib/data';
import { Icon } from '@iconify/react';

const GoldStandardValues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {goldStandardValues.map((value, index) => (
        <div
          key={index}
          className="card-glass-dark p-6 hover:shadow-primary transition-all duration-300 group"
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
        </div>
      ))}
    </div>
  );
};

export default GoldStandardValues;

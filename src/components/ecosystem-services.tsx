'use client';

import { ecosystemBranches } from '@/lib/data';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const EcosystemServices = () => {
  const branches = Object.values(ecosystemBranches);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {branches.map((branch, index) => (
        <div
          key={index}
          className="card-glass p-6 hover:shadow-primary transition-all duration-300 group cursor-pointer"
        >
          {/* Icon & Tag Line */}
          <div className="mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon
                icon={branch.icon}
                className="w-10 h-10 text-primary"
              />
            </div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
              {branch.tagline}
            </span>
          </div>

          {/* Branch Name */}
          <h3 className="text-xl font-bold text-dark mb-3">
            {branch.branch}
          </h3>

          {/* Core Function */}
          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
            <span className="font-semibold text-dark">Core Function: </span>
            {branch.coreFunction}
          </p>

          {/* Strategic Value */}
          <p className="text-sm text-muted-foreground mb-4 italic">
            {branch.strategicValue}
          </p>

          {/* Key Metrics */}
          {branch.keyMetrics && branch.keyMetrics.length > 0 && (
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold text-primary mb-2">Key Metrics:</p>
              <div className="flex flex-wrap gap-2">
                {branch.keyMetrics.map((metric, i) => (
                  <span
                    key={i}
                    className="text-xs bg-dark/5 px-2 py-1 rounded"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Services Count */}
          {branch.relatedServices.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <Icon icon="mdi:link-variant" className="inline w-4 h-4 mr-1" />
                {branch.relatedServices.length} Technical {branch.relatedServices.length === 1 ? 'Service' : 'Services'}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EcosystemServices;

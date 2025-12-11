'use client';

import { resilienceMatrix } from '@/lib/data';
import { Icon } from '@iconify/react';

const ResilienceMatrix = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <table className="w-full border-collapse bg-white/5 backdrop-blur-sm">
          <thead>
            <tr className="border-b-2 border-primary/20">
              <th className="text-left p-4 font-bold text-dark">Layer</th>
              <th className="text-left p-4 font-bold text-dark">Domain</th>
              <th className="text-left p-4 font-bold text-dark">Objective</th>
              <th className="text-left p-4 font-bold text-dark">Deliverables</th>
            </tr>
          </thead>
          <tbody>
            {resilienceMatrix.map((layer, index) => (
              <tr
                key={index}
                className="border-b border-border hover:bg-muted/30 transition-colors"
              >
                <td className="p-4 align-top">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon icon={layer.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold text-dark">{layer.layer}</span>
                  </div>
                </td>
                <td className="p-4 text-muted-foreground align-top">
                  {layer.domain}
                </td>
                <td className="p-4 text-muted-foreground align-top">
                  {layer.objective}
                </td>
                <td className="p-4 text-primary font-medium align-top">
                  {layer.deliverables}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-6">
        {resilienceMatrix.map((layer, index) => (
          <div
            key={index}
            className="card-glass p-6"
          >
            {/* Icon & Layer Name */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon icon={layer.icon} className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark mb-1">{layer.layer}</h4>
                <p className="text-sm text-muted-foreground">{layer.domain}</p>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-3">
              <h5 className="text-xs font-semibold text-primary mb-1 uppercase">Objective</h5>
              <p className="text-sm text-muted-foreground">{layer.objective}</p>
            </div>

            {/* Deliverables */}
            <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h5 className="text-xs font-semibold text-primary mb-1 uppercase">Deliverables</h5>
              <p className="text-sm font-medium text-dark">{layer.deliverables}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="text-center mt-12">
        <p className="text-2xl font-semibold italic text-primary">
          "From fence sensors to firewalls — every signal speaks to one system."
        </p>
      </div>
    </div>
  );
};

export default ResilienceMatrix;

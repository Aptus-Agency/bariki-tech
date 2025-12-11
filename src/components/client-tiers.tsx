'use client';

import { clientTiers } from '@/lib/data';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const ClientTiers = () => {
  const tiers = Object.values(clientTiers);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <div
          key={tier.id}
          className="card-glass-dark p-8 hover:shadow-secondary transition-all duration-300 group flex flex-col h-full"
        >
          {/* Tier Badge */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-3">
              {tier.name}
            </div>
          </div>

          {/* Tagline & Subtitle */}
          <h3 className="text-2xl font-bold text-dark mb-2">
            {tier.tagline}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 italic">
            {tier.subtitle}
          </p>

          {/* Target Clientele */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
              Target Clientele
            </h4>
            <ul className="space-y-2">
              {tier.targetClientele.map((client, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-dark mb-2">Philosophy</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tier.philosophy}
            </p>
          </div>

          {/* Engagement Details */}
          <div className="space-y-4 mb-6 p-4 bg-muted/30 rounded-lg">
            <div>
              <h5 className="text-xs font-semibold text-secondary mb-1">Entry Point</h5>
              <p className="text-sm text-muted-foreground">{tier.entryPoint}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-secondary mb-1">Solution</h5>
              <p className="text-sm text-muted-foreground">{tier.solution}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-secondary mb-1">Service Covenant</h5>
              <p className="text-sm text-muted-foreground">{tier.serviceCovenant}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-secondary mb-1">Transparency</h5>
              <p className="text-sm text-muted-foreground">{tier.transparency}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/10 rounded-lg border-l-4 border-secondary mb-6">
            <p className="text-sm font-medium italic text-dark">
              "{tier.quote}"
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="btn-secondary bg-gradient-secondary w-full text-center group-hover:shadow-lg transition-all"
          >
            I am a {tier.name} Client
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClientTiers;

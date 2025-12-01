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
          className="card-glass p-8 hover:shadow-primary transition-all duration-300 group flex flex-col h-full"
        >
          {/* Tier Badge */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon icon={tier.icon} className="w-12 h-12 text-primary" />
            </div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">
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
            <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
              Target Clientele
            </h4>
            <ul className="space-y-2">
              {tier.targetClientele.map((client, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
              <h5 className="text-xs font-semibold text-primary mb-1">Entry Point</h5>
              <p className="text-sm text-muted-foreground">{tier.entryPoint}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-primary mb-1">Solution</h5>
              <p className="text-sm text-muted-foreground">{tier.solution}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-primary mb-1">Service Covenant</h5>
              <p className="text-sm text-muted-foreground">{tier.serviceCovenant}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-primary mb-1">Transparency</h5>
              <p className="text-sm text-muted-foreground">{tier.transparency}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-l-4 border-primary mb-6">
            <p className="text-sm font-medium italic text-dark">
              "{tier.quote}"
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="btn-primary bg-gradient-primary w-full text-center group-hover:shadow-lg transition-all"
          >
            I am a {tier.name} Client
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClientTiers;

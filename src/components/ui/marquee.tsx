// src/components/marquee.tsx

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  /**
   * The duration of the scroll animation in seconds.
   * A lower number means a faster scroll.
   * @default 20
   */
  duration?: number;
  /**
   * A custom className to apply to the container.
   */
  className?: string;
}

const Marquee = ({ children, duration = 20, className = '' }: MarqueeProps) => {
  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      // Pass the duration to CSS via a custom property
      style={{ '--duration': `${duration}s` } as React.CSSProperties}
    >
      {/* The track that contains the duplicated content and animates */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render the content twice for a seamless loop */}
        <div className="flex items-center justify-around flex-shrink-0">{children}</div>
        <div className="flex items-center justify-around flex-shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
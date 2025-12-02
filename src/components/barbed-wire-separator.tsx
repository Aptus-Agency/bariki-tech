'use client';

import { cn } from '@/lib/utils';

interface BarbedWireSeparatorProps {
    className?: string;
    duration?: string;
}

const BarbedWireSeparator = ({
    className,
    duration = "20s"
}: BarbedWireSeparatorProps) => {
    return (
        <div className={cn("w-full overflow-hidden bg-transparent py-8 select-none pointer-events-none", className)}>
            <div
                className="flex w-fit animate-marquee"
                style={{
                    '--duration': duration,
                    animationDirection: 'reverse'
                } as React.CSSProperties}
            >
                {/* Repeat the SVG enough times to cover wide screens and allow for smooth scrolling */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 800 300"
                            className="w-[800px] h-[150px] md:h-[200px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                {/* Metallic Gradient for the main double-strand wire */}
                                <linearGradient id={`wireGradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2b2b2b" />
                                    <stop offset="20%" stopColor="#8a8a8a" />
                                    <stop offset="45%" stopColor="#1a1a1a" /> {/* Center groove */}
                                    <stop offset="55%" stopColor="#1a1a1a" /> {/* Center groove */}
                                    <stop offset="80%" stopColor="#8a8a8a" />
                                    <stop offset="100%" stopColor="#2b2b2b" />
                                </linearGradient>

                                {/* Gradient for the sharp barbs */}
                                <linearGradient id={`barbGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#555" />
                                    <stop offset="50%" stopColor="#ccc" />
                                    <stop offset="100%" stopColor="#444" />
                                </linearGradient>

                                {/* Gradient for the coil wrap */}
                                <linearGradient id={`coilGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#333" />
                                    <stop offset="30%" stopColor="#999" />
                                    <stop offset="70%" stopColor="#999" />
                                    <stop offset="100%" stopColor="#333" />
                                </linearGradient>

                                {/* Drop Shadow for depth */}
                                <filter id={`shadow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                                    <feOffset dx="2" dy="2" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.5" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode in="offsetblur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* Single Barb Cluster Definition */}
                                <g id={`barbCluster-${i}`}>
                                    {/* Back Spikes (Darker/Behind) */}
                                    <path d="M0,0 L-15,-20 L-12,-5 Z" fill="#333" stroke="none" transform="rotate(-10)" />
                                    <path d="M0,0 L15,20 L12,5 Z" fill="#333" stroke="none" transform="rotate(-10)" />

                                    {/* The Coil Knot (Wraps around the wire) */}
                                    <g transform="translate(-6, -5)">
                                        <rect x="0" y="0" width="4" height="10" rx="1" fill={`url(#coilGradient-${i})`} transform="skewX(-15)" />
                                        <rect x="4" y="0" width="4" height="10" rx="1" fill={`url(#coilGradient-${i})`} transform="skewX(-15)" />
                                        <rect x="8" y="0" width="4" height="10" rx="1" fill={`url(#coilGradient-${i})`} transform="skewX(-15)" />
                                    </g>

                                    {/* Front Spikes (Lighter/In Front) */}
                                    <path d="M2,2 L20,-15 L8,-2 Z" fill={`url(#barbGradient-${i})`} filter={`url(#shadow-${i})`} />
                                    <path d="M-2,2 L-20,15 L-8,2 Z" fill={`url(#barbGradient-${i})`} filter={`url(#shadow-${i})`} />
                                </g>
                            </defs>

                            {/* Line 1 */}
                            <g transform="translate(0, 50)">
                                {/* Main Wire Strand */}
                                <rect x="0" y="-4" width="800" height="8" fill={`url(#wireGradient-${i})`} filter={`url(#shadow-${i})`} />
                                {/* Barbs */}
                                <use href={`#barbCluster-${i}`} x="100" y="0" />
                                <use href={`#barbCluster-${i}`} x="300" y="0" />
                                <use href={`#barbCluster-${i}`} x="500" y="0" />
                                <use href={`#barbCluster-${i}`} x="700" y="0" />
                            </g>

                            {/* Line 2 */}
                            <g transform="translate(0, 150)">
                                {/* Main Wire Strand */}
                                <rect x="0" y="-4" width="800" height="8" fill={`url(#wireGradient-${i})`} filter={`url(#shadow-${i})`} />
                                {/* Barbs (Offset for variety) */}
                                <use href={`#barbCluster-${i}`} x="150" y="0" transform="scale(1, -1)" />
                                <use href={`#barbCluster-${i}`} x="350" y="0" transform="scale(1, -1)" />
                                <use href={`#barbCluster-${i}`} x="550" y="0" transform="scale(1, -1)" />
                                <use href={`#barbCluster-${i}`} x="750" y="0" transform="scale(1, -1)" />
                            </g>

                            {/* Line 3 */}
                            <g transform="translate(0, 250)">
                                {/* Main Wire Strand */}
                                <rect x="0" y="-4" width="800" height="8" fill={`url(#wireGradient-${i})`} filter={`url(#shadow-${i})`} />
                                {/* Barbs */}
                                <use href={`#barbCluster-${i}`} x="80" y="0" />
                                <use href={`#barbCluster-${i}`} x="280" y="0" />
                                <use href={`#barbCluster-${i}`} x="480" y="0" />
                                <use href={`#barbCluster-${i}`} x="680" y="0" />
                            </g>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarbedWireSeparator;

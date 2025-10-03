'use client'

import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import React from "react";

interface CarouselProps {
    children: React.ReactNode[];
    currentIndex: number;
    itemsToShow?: number;
    autoPlayInterval?: number;
    showNavigationButtons?: boolean;
    nextItem: () => void;
    prevItem: () => void;
}

export default function Carousel({
    children,
    currentIndex,
    itemsToShow = 3,
    autoPlayInterval = 5000,
    showNavigationButtons = true,
    nextItem,
    prevItem
}: CarouselProps) {
    const totalItems = React.Children.count(children);

    useEffect(() => {
        if (autoPlayInterval > 0 && totalItems > itemsToShow) {
            const interval = setInterval(nextItem, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [totalItems, itemsToShow, autoPlayInterval, nextItem]);

    const xOffset = -(currentIndex * (100 / totalItems));

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <motion.div
                    className="flex"
                    style={{ width: `${(totalItems / itemsToShow) * 100}%` }}
                    animate={{ x: `${xOffset}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{ width: `${100 / totalItems}%` }}
                        >
                            <div className="px-4 h-full">
                                {child}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {totalItems > itemsToShow && showNavigationButtons && (
                <>
                    <button
                        onClick={prevItem}
                        aria-label="Previous slide"
                        className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm text-dark hover:bg-primary hover:text-white rounded-full p-2 shadow-elegant transition-all duration-300"
                    >
                        <Icon icon="mdi-light:chevron-left" className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextItem}
                        aria-label="Next slide"
                        className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm text-dark hover:bg-primary hover:text-white rounded-full p-2 shadow-elegant transition-all duration-300"
                    >
                        <Icon icon="mdi-light:chevron-right" className="w-6 h-6" />
                    </button>
                </>
            )}
        </div>
    );
}
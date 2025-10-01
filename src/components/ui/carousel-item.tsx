"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItemProps {
    currentIndex: number;
    itemsToShow: number;
    children: React.ReactNode[];
    direction: number;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
    currentIndex,
    itemsToShow,
    children,
    direction
}) => {
    const items = React.Children.toArray(children);
    const visibleItems = [];
    if (items.length > 0) {
        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % items.length;
            visibleItems.push(items[index]);
        }
    }

    const gridColsMap: { [key: number]: string } = {
        1: 'grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
    };
    const gridClass = gridColsMap[itemsToShow] || 'lg:grid-cols-3';

    return (
        <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
                key={currentIndex}
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction < 0 ? '100%' : '-100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className={`grid grid-cols-1 gap-8 ${gridClass}`}
            >
                {visibleItems}
            </motion.div>
        </AnimatePresence>
    );
};
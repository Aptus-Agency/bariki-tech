"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItemProps {
    currentIndex: number;
    onPrevious: () => void;
    onNext: () => void;
    onSelectItem: (index: number) => void;
    children: React.ReactNode[];
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
    currentIndex: currentTestimonialIndex,
    onPrevious,
    onNext,
    onSelectItem: onSelectTestimonial,
    children
}) => {

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='grid grid-cols-3 items-center gap-4'
                >
                    {children.slice(0, 3)}
                </motion.div>
            </AnimatePresence>
        </>
    );
};
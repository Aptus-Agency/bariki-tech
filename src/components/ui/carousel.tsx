'use client'

import { useEffect, useState } from "react";
import { CarouselItem } from "./carousel-item";

export default function Carousel({ children }: { children: React.ReactNode[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % children.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="carousel">
            <CarouselItem
                currentIndex={currentIndex}
                onPrevious={prevTestimonial}
                onNext={nextTestimonial}
                onSelectItem={() => { }}
            >
                {children}
            </CarouselItem>
        </div>
    );
}
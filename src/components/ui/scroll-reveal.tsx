"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all" };
    as?: React.ElementType;
}

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    distance = 30,
    viewport = { once: true, margin: "-50px" },
    as: Component = "div"
}: ScrollRevealProps) {
    const MotionComponent = motion(Component as any);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={variants}
            className={className}
        >
            {children}
        </MotionComponent>
    );
}

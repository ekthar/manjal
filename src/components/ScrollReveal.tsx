import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    delay?: string; // e.g. "delay-100"
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", threshold = 0.1, delay = "delay-0" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out transform ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

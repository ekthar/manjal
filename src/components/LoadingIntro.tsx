import React, { useEffect, useState } from 'react';

interface LoadingIntroProps {
    onComplete: () => void;
}

const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out after 2 seconds
        const timer = setTimeout(() => {
            setFadeOut(true);
            // Call onComplete after transition finishes
            setTimeout(onComplete, 800); 
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div 
            className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'}`}
        >
            <div className="relative flex flex-col items-center">
                <div className="relative">
                    <img 
                        src="/banner.png" 
                        alt="Manjal Ayurveda" 
                        className={`snap-logo ${fadeOut ? 'snap-logo--out' : ''}`} 
                    />
                    <div className={`snap-dust ${fadeOut ? 'snap-dust--out' : ''}`}>
                        <span className="snap-dust__particle"></span>
                        <span className="snap-dust__particle"></span>
                        <span className="snap-dust__particle"></span>
                        <span className="snap-dust__particle"></span>
                        <span className="snap-dust__particle"></span>
                        <span className="snap-dust__particle"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingIntro;

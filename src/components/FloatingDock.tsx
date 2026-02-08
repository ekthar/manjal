import React, { useEffect, useState } from 'react';

const FloatingDock: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show dock after scrolling down a bit (e.g., 100px)
            setIsVisible(window.scrollY > 100);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl flex items-center gap-1 sm:gap-2">
                
                {/* Book Call / Phone */}
                <a href="tel:+917907178727" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-theme-surface hover:bg-white hover:text-black transition-all group relative text-white border border-white/5">
                    {/* @ts-ignore */}
                    <iconify-icon icon="solar:phone-calling-bold-duotone" width="20"></iconify-icon>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Call Us</span>
                </a>

                <div className="w-[1px] h-6 bg-white/10 mx-1"></div>

                 {/* WhatsApp */}
                 <a href="https://wa.me/917907178727" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                    {/* @ts-ignore */}
                    <iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon>
                    <span>WhatsApp</span>
                </a>

                {/* Book Appointment */}
                <a href="#consultation" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                    {/* @ts-ignore */}
                    <iconify-icon icon="solar:calendar-add-bold" width="18"></iconify-icon>
                    <span className="hidden sm:inline">Book Now</span>
                    <span className="sm:hidden">Book</span>
                </a>

            </div>
        </div>
    );
};

export default FloatingDock;

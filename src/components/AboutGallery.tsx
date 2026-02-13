import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
// Ensure you have these icons installed or available globally
import 'iconify-icon'; 

type PhotoAsset = {
    id: string;
    alt: string;
    base: string;
};

// --- DATA ---
const albumPhotos: PhotoAsset[] = [

    { id: '1 (2)', alt: 'Gallery item 12', base: '/gallery/1%20(2)' },
    { id: '1 (3)', alt: 'Gallery item 3', base: '/gallery/1%20(3)' },
    { id: '1 (4)', alt: 'Gallery item 4', base: '/gallery/1%20(4)' },
    { id: '1 (5)', alt: 'Gallery item 5', base: '/gallery/1%20(5)' },
    { id: '1 (6)', alt: 'Gallery item 6', base: '/gallery/1%20(6)' },
    { id: '1 (7)', alt: 'Gallery item 7', base: '/gallery/1%20(7)' },
    { id: '1 (8)', alt: 'Gallery item 8', base: '/gallery/1%20(8)' },
    { id: '1 (9)', alt: 'Gallery item 9', base: '/gallery/1%20(9)' },
    { id: '1 (10)', alt: 'Gallery item 10', base: '/gallery/1%20(10)' },
    { id: '1 (11)', alt: 'Gallery item 11', base: '/gallery/1%20(11)' },
    { id: '1 (12)', alt: 'Gallery item 2', base: '/gallery/1%20(12)' },
    { id: '1 (13)', alt: 'Gallery item 13', base: '/gallery/1%20(13)' },
    { id: '1 (14)', alt: 'Gallery item 14', base: '/gallery/1%20(14)' },
    { id: '1 (15)', alt: 'Gallery item 15', base: '/gallery/1%20(15)' },
    { id: '1 (16)', alt: 'Gallery item 16', base: '/gallery/1%20(16)' },
    { id: '1 (17)', alt: 'Gallery item 17', base: '/gallery/1%20(17)' },
    { id: '1 (18)', alt: 'Gallery item 18', base: '/gallery/1%20(18)' },
    { id: '1 (19)', alt: 'Gallery item 19', base: '/gallery/1%20(19)' },
    { id: 'album (1)', alt: 'Gallery item 20', base: '/gallery/album%20(1)' },
    { id: 'album (2)', alt: 'Gallery item 21', base: '/gallery/album%20(2)' },
    { id: 'album (3)', alt: 'Gallery item 22', base: '/gallery/album%20(3)' },
    { id: 'album (4)', alt: 'Gallery item 23', base: '/gallery/album%20(4)' },
    { id: 'album (5)', alt: 'Gallery item 24', base: '/gallery/album%20(5)' },
    { id: 'album (6)', alt: 'Gallery item 25', base: '/gallery/album%20(6)' },
    { id: 'album (7)', alt: 'Gallery item 26', base: '/gallery/album%20(7)' },
    { id: 'album (8)', alt: 'Gallery item 27', base: '/gallery/album%20(8)' },
    { id: 'album (9)', alt: 'Gallery item 28', base: '/gallery/album%20(9)' },
    { id: 'album (10)', alt: 'Gallery item 29', base: '/gallery/album%20(10)' },
    { id: 'album (11)', alt: 'Gallery item 30', base: '/gallery/album%20(11)' },
    { id: 'album (12)', alt: 'Gallery item 31', base: '/gallery/album%20(12)' },
    { id: 'album (13)', alt: 'Gallery item 32', base: '/gallery/album%20(13)' },
    { id: 'album (14)', alt: 'Gallery item 33', base: '/gallery/album%20(14)' },
    { id: 'album (15)', alt: 'Gallery item 34', base: '/gallery/album%20(15)' },
]

// --- UTILS ---
const imageSizes = [400, 800, 1200];
const buildSrcSet = (base: string, ext: 'jpg' | 'webp' | 'avif') =>
    imageSizes.map((size) => `${base}-${size}.${ext} ${size}w`).join(', ');
const getSizedSrc = (base: string, size: number, ext: 'jpg' | 'webp' | 'avif' = 'jpg') => `${base}-${size}.${ext}`;
const getDefaultSrc = (base: string) => getSizedSrc(base, 800, 'jpg');
const getLqip = (base: string) => `${base}-lqip.jpg`;

// --- COMPONENT: LAZY IMAGE (Optimized) ---
const LazyImage: React.FC<{
    photo: PhotoAsset;
    sizes: string;
    className?: string;
    loadTrigger: boolean;
    onClick?: () => void;
}> = ({ photo, sizes, className = '', loadTrigger, onClick }) => {
    const [loaded, setLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loadTrigger) setShouldLoad(true);
    }, [loadTrigger]);

    return (
        <div 
            ref={ref} 
            className={`relative overflow-hidden bg-zinc-800 ${className}`} 
            onClick={onClick}
        >
            {/* LQIP (Blur Placeholder) */}
            <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${loaded ? 'opacity-0' : 'opacity-100'}`}
                style={{ backgroundImage: `url('${getLqip(photo.base)}')`, filter: 'blur(8px)', transform: 'scale(1.1)' }}
            />

            {shouldLoad && (
                <picture>
                    <source type="image/avif" srcSet={buildSrcSet(photo.base, 'avif')} sizes={sizes} />
                    <source type="image/webp" srcSet={buildSrcSet(photo.base, 'webp')} sizes={sizes} />
                    <img
                        src={getDefaultSrc(photo.base)}
                        srcSet={buildSrcSet(photo.base, 'jpg')}
                        sizes={sizes}
                        alt={photo.alt}
                        onLoad={() => setLoaded(true)}
                        className={`relative w-full h-full object-cover transition-all duration-700 ease-out 
                        ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} 
                        group-hover:scale-110 duration-[1500ms]`}
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
            )}
            
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

// --- COMPONENT: MASONRY GRID (The Organic Look) ---
const MasonryGrid: React.FC<{ photos: PhotoAsset[], openAt: (i: number) => void, loadTrigger: boolean }> = ({ photos, openAt, loadTrigger }) => {
    return (
        // CSS Columns create the waterfall/masonry effect without JS calculation
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 px-4 pb-24">
            {photos.map((photo, index) => (
                <div 
                    key={photo.id} 
                    className="break-inside-avoid group relative cursor-zoom-in rounded-2xl overflow-hidden shadow-lg border border-white/5 transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 will-change-transform"
                    onClick={() => openAt(index)}
                    // Stagger animation for reveal
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <LazyImage 
                        photo={photo} 
                        loadTrigger={loadTrigger}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full bg-zinc-900"
                    />
                </div>
            ))}
        </div>
    );
};

const AboutGallery: React.FC = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [loadAssets, setLoadAssets] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Handle scroll locking
    useEffect(() => {
        if (isGalleryOpen || activeIndex !== null) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            // Trigger load slightly after open to prioritize UI animation
            setTimeout(() => setLoadAssets(true), 150);
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isGalleryOpen, activeIndex]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (activeIndex === null) {
                if (isGalleryOpen && e.key === 'Escape') setIsGalleryOpen(false);
                return;
            }
            if (e.key === 'Escape') setActiveIndex(null);
            if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? null : (i - 1 + albumPhotos.length) % albumPhotos.length));
            if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? null : (i + 1) % albumPhotos.length));
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [activeIndex, isGalleryOpen]);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section id="about-gallery" className="py-24 bg-theme-base-alt relative overflow-hidden">
            <div className="breathing-ritual" aria-hidden="true"></div>
            
            {/* --- MODAL OVERLAY --- */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-black/95 animate-in slide-in-from-bottom-8 fade-in duration-500">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between px-6 py-4 z-20 bg-black/80 backdrop-blur-md border-b border-white/5 sticky top-0">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <h3 className="text-sm md:text-base font-light text-white tracking-[0.2em] uppercase font-inter-tight">
                                Manjal <span className="text-gray-500">Archives</span>
                            </h3>
                        </div>
                        
                        <button 
                            onClick={() => setIsGalleryOpen(false)}
                            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                        >
                            <span className="text-xs uppercase tracking-widest hidden md:block group-hover:mr-1 transition-all">Close</span>
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
                        </button>
                    </div>

                    {/* Scrollable Masonry Area */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar bg-zinc-950/50">
                        <div className="max-w-7xl mx-auto pt-8 min-h-screen">
                            <MasonryGrid photos={albumPhotos} openAt={openLightbox} loadTrigger={loadAssets} />
                        </div>
                    </div>
                </div>
            )}

            {/* --- LIGHTBOX (FULLSCREEN) --- */}
            {activeIndex !== null && (
                <div className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center animate-in fade-in duration-300" onClick={() => setActiveIndex(null)}>
                    {/* Top Right Close */}
                    <button onClick={() => setActiveIndex(null)} className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white transition-colors">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:close-circle-bold" width="40"></iconify-icon>
                    </button>
                    
                    {/* Arrows */}
                    <button onClick={(e) => {e.stopPropagation(); setActiveIndex((activeIndex - 1 + albumPhotos.length) % albumPhotos.length)}} 
                        className="absolute left-2 md:left-8 text-white/30 hover:text-white transition-colors p-4 z-50">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:alt-arrow-left-linear" width="48"></iconify-icon>
                    </button>
                    <button onClick={(e) => {e.stopPropagation(); setActiveIndex((activeIndex + 1) % albumPhotos.length)}} 
                        className="absolute right-2 md:right-8 text-white/30 hover:text-white transition-colors p-4 z-50">
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:alt-arrow-right-linear" width="48"></iconify-icon>
                    </button>

                    {/* Main Image */}
                    <div className="max-w-[95vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={getDefaultSrc(albumPhotos[activeIndex].base)}
                            srcSet={buildSrcSet(albumPhotos[activeIndex].base, 'jpg')}
                            alt={albumPhotos[activeIndex].alt}
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm select-none"
                        />
                         <div className="absolute bottom-[-30px] left-0 w-full text-center">
                            <p className="text-white/40 text-xs tracking-widest uppercase font-inter-tight">
                                {activeIndex + 1} / {albumPhotos.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* --- MAIN PAGE LAYOUT --- */}
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* LEFT: Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <ScrollReveal>
                            <span className="breathing-subtitle text-purple-400 text-xs font-bold tracking-widest uppercase font-inter-tight flex items-center gap-2 mb-6">
                                <span className="w-6 h-[1px] bg-purple-500"></span>
                                Our Heritage
                            </span>
                            
                            <h2 className="breathing-title text-3xl md:text-5xl font-bold text-white mb-8 font-inter-tight leading-tight">
                                Where Ancient Wisdom <br/> 
                                <span className="text-gray-500">Meets Modern Care</span>
                            </h2>
                            
                            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
                                <p>
                                    At Manjal Ayurveda, we believe that true healing begins when the body, mind, and spirit align. Established with a vision to preserve the purity of traditional Kerala Ayurveda, our clinic is a sanctuary away from the noise of the modern world.
                                </p>
                                <p>
                                    Unlike commercial wellness centers, we focus on <strong className="text-white font-medium">Curative Ayurveda</strong>. Our architecture reflects this philosophy—using sustainable materials, open-air courtyards, and medicinal gardens that breathe life into your healing journey.
                                </p>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-8">
                                <button 
                                    onClick={() => setIsGalleryOpen(true)}
                                    className="group flex items-center gap-3 text-white px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-900/20 hover:border-purple-500/50 transition-all"
                                >
                                    <span className="tracking-widest uppercase text-xs font-bold">View Gallery</span>
                                    {/* @ts-ignore */}
                                    <iconify-icon icon="solar:gallery-wide-bold" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT: Stacked Cards Preview (Replaces Chat Bubble) */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center perspective-1000">
                        <ScrollReveal delay="delay-200">
                            <div 
                                onClick={() => setIsGalleryOpen(true)}
                                className="relative w-72 h-80 md:w-80 md:h-96 group cursor-pointer"
                            >
                                {/* Card 3 (Bottom) */}
                                <div className="absolute inset-0 bg-zinc-800 rounded-3xl rotate-12 opacity-40 scale-90 group-hover:rotate-[15deg] group-hover:translate-x-4 transition-all duration-500 border border-white/10 shadow-xl"></div>
                                
                                {/* Card 2 (Middle) */}
                                <div className="absolute inset-0 bg-zinc-800 rounded-3xl -rotate-6 opacity-60 scale-95 group-hover:-rotate-[8deg] group-hover:-translate-x-4 transition-all duration-500 border border-white/10 shadow-xl overflow-hidden">
                                     <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale"
                                         style={{ backgroundImage: `url('${getSizedSrc(albumPhotos[1].base, 400)}')` }}></div>
                                </div>
                                
                                {/* Card 1 (Top/Main) */}
                                <div className="absolute inset-0 bg-zinc-900 rounded-3xl rotate-0 group-hover:scale-[1.02] transition-transform duration-300 border border-white/10 shadow-2xl overflow-hidden z-10">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                         style={{ backgroundImage: `url('${getSizedSrc(albumPhotos[0].base, 800)}')` }}>
                                    </div>
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                                    
                                    {/* Card Content */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-1">Gallery</p>
                                                <h4 className="text-2xl text-white font-serif italic">Inside Manjal</h4>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                                {/* @ts-ignore */}
                                                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutGallery;
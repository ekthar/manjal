import React from 'react';

const AboutGallery: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-[#030305] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <span className="text-purple-400 text-xs font-bold tracking-widest uppercase font-inter-tight flex items-center gap-2 mb-6">
                            <span className="w-6 h-[1px] bg-purple-500"></span>
                            Our Heritage
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-inter-tight leading-tight">
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

                        <div className="mt-10 flex items-center gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white font-inter-tight">15+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-white font-inter-tight">5k+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Happy Patients</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Instagram Chat Style Gallery */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <div className="relative max-w-sm w-full">
                            
                            {/* Decorative Message Tail/Bubble effect */}
                            <div className="absolute -right-4 top-10 w-8 h-8 bg-[#1a1a1e] rotate-45 z-0 rounded-sm"></div>

                            {/* The Stack Container - Removed animate-pulse-slow */}
                            <div className="bg-[#1a1a1e] p-2 rounded-[2rem] rounded-tr-none shadow-2xl border border-white/5 relative z-10">
                                
                                {/* Grid Layout similar to IG multi-image upload */}
                                <div className="grid grid-cols-2 gap-2">
                                    {/* Main Large Image */}
                                    <div className="col-span-2 relative group overflow-hidden rounded-2xl aspect-[16/9]">
                                        <div className="absolute inset-0 bg-gray-700"></div> 
                                        {/* Replace with actual image */}
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"></div>
                                    </div>

                                    {/* Small Image 1 */}
                                    <div className="relative group overflow-hidden rounded-2xl aspect-square">
                                        <div className="absolute inset-0 bg-gray-800"></div>
                                        {/* Replace with actual image */}
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"></div>
                                    </div>

                                    {/* Small Image 2 */}
                                    <div className="relative group overflow-hidden rounded-2xl aspect-square">
                                        <div className="absolute inset-0 bg-gray-800"></div>
                                        {/* Replace with actual image */}
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617804676579-43c0d8f0814f?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"></div>
                                        
                                        {/* "More" overlay effect */}
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            {/* @ts-ignore */}
                                            <iconify-icon icon="solar:gallery-wide-bold" className="text-white text-2xl"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timestamp / Meta look */}
                            <div className="flex justify-end mt-2 px-2 gap-1 items-center opacity-50">
                                <span className="text-[10px] text-gray-400 font-inter-tight">Sent from Manjal Clinic</span>
                                {/* @ts-ignore */}
                                <iconify-icon icon="solar:check-read-linear" className="text-blue-500 text-xs"></iconify-icon>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutGallery;
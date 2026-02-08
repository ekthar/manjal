import React from 'react';

const doctors = [
    {
        name: "Dr. Anjali Menon",
        degree: "B.A.M.S, M.D (Ayurveda)",
        speciality: "Chief Physician & Founder",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop", 
        bio: "With over 15 years of clinical experience, Dr. Anjali specializes in neurological disorders and authentic detoxification therapies. She is dedicated to bringing the pure essence of Kerala Ayurveda to the modern world."
    }
];

const Doctors: React.FC = () => {
    return (
        <section id="doctors" className="py-24 bg-theme-base border-t border-white/5 relative">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-green-400 text-xs font-bold tracking-widest uppercase font-inter-tight">The Healer</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 font-inter-tight">Meet Our Chief Physician</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
                        Guiding your journey to wellness with generations of wisdom and compassionate care.
                    </p>
                </div>

                <div className="flex justify-center">
                    {doctors.map((doc, idx) => (
                        <div key={idx} className="group bg-theme-surface rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden max-w-sm w-full">
                            
                            {/* Image Area */}
                            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <img 
                                    src={doc.image} 
                                    alt={doc.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                
                                {/* Social/Contact Overlay - Slides up on hover */}
                                <div className="absolute bottom-0 left-0 w-full p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <a href="#consultation" className="block w-full text-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
                                        Book Appointment
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-bold text-white font-inter-tight">{doc.name}</h3>
                                <p className="text-purple-400 text-xs font-bold uppercase tracking-wide mt-1 mb-4">{doc.degree}</p>
                                <div className="w-10 h-[1px] bg-white/10 mb-4 mx-auto"></div>
                                <p className="text-sm text-gray-300 font-medium mb-3">{doc.speciality}</p>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">{doc.bio}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
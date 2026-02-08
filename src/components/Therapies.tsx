import React from 'react';

const treatments = [
    {
        name: 'Panchakarma',
        description: 'A five-step detoxification process to purify the body and mind.',
        icon: 'solar:waterdrops-bold-duotone',
        color: 'text-cyan-400'
    },
    {
        name: 'Abhyanga',
        description: 'Traditional full-body oil massage for rejuvenation and stress relief.',
        icon: 'solar:hand-stars-bold-duotone',
        color: 'text-amber-400'
    },
    {
        name: 'Shirodhara',
        description: 'A soothing therapy involving pouring warm oil over the forehead.',
        icon: 'solar:drop-linear',
        color: 'text-purple-400'
    },
    {
        name: 'Nasyam',
        description: 'Nasal administration of herbal oils to clear head and neck channels.',
        icon: 'solar:nose-linear',
        color: 'text-emerald-400'
    },
    {
        name: 'Kizhi',
        description: 'Herbal poultice massage to alleviate pain and inflammation.',
        icon: 'solar:leaf-bold-duotone',
        color: 'text-lime-400'
    },
    {
        name: 'Udvartana',
        description: 'Herbal powder massage for weight loss and improved circulation.',
        icon: 'solar:body-linear',
        color: 'text-rose-400'
    }
];

const Therapies: React.FC = () => {
    return (
        <section id="therapies" className="py-24 bg-[#050507] border-t border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none accent-glow-purple"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase font-inter-tight">Our Specialities</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 font-inter-tight">Therapeutic Treatments</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
                        Ancient Ayurvedic therapies curated to heal, rejuvenate, and restore your body's vital energy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {treatments.map((item, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                {/* @ts-ignore */}
                                <iconify-icon icon={item.icon}></iconify-icon>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-inter-tight">{item.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Therapies;
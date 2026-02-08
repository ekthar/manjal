import React, { useState } from 'react';

// Data from the provided images

const conditions = [
    "Neurological Diseases",
    "Cervical Spondylosis",
    "Lumbar Spondylosis",
    "Ligament Injury",
    "Sports Injuries",
    "Spinal Injuries",
    "IVDP",
    "Sciatica",
    "Frozen Shoulder",
    "Osteoarthritis",
    "Varicose Vein",
    "Skin Disease",
    "Tennis Elbow",
    "Carpal Tunnel Syndrome",
    "Dislocation",
    "Piles/ Fissure",
    "Gastric Problems",
    "Diabetes",
    "Lifestyle Diseases",
    "Gynaecological Diseases"
];


const specializedTreatments = [
    {
        title: "Deep Tissue Massage",
        benefits: ["Improves Athletic Recovery And Performance", "Treats Chronic Body Pain", "Relax Muscles"],
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=300" 
    },
    {
        title: "Sports Massage",
        benefits: ["Increase Joint Mobility", "Increase Flexibility", "Relieve Spasms"],
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "De-Toxification",
        subtitle: "Virechana (വയറിളക്കൽ)",
        benefits: ["Removes Foul smell of the body", "It helps Weight loss", "Removes toxins in body"],
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Beauty Care",
        benefits: ["Njavara Facial", "DE-TAN Scrub", "Herbal Facial", "Mugalepa"],
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Shirodara",
        benefits: ["Reduce Stress and Anxiety", "Reduce Hair Fall", "Enhance the quality of sleep"],
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300" // Placeholder
    },
    {
        title: "Rejuvenation Massage",
        benefits: ["Enhance Sexual Activity", "Improves Circulation", "Reduce Anxiety"],
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=300"
    },
    {
        title: "Udwarthanam",
        benefits: ["Helps in Weight loss", "Removes toxins from the body", "Improves skin complexion"],
        image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=300"
    }
];

const malayalamCategories = [
    {
        title: "കുട്ടികളിലെ രോഗങ്ങൾ (Pediatrics)",
        desc: "ചുമ, പനി, വിരശല്യം, കഫക്കെട്ട്, അഡിനോയ്ഡ്, പഠനവൈകല്യം"
    },
    {
        title: "ശ്വാസകോശ രോഗങ്ങൾ (Respiratory)",
        desc: "ചുമ, ആസ്മ, മൂക്കിലെ ദശ, ടോൺസിലൈറ്റിസ്, സൈനുസൈറ്റിസ്, അലർജി"
    },
    {
        title: "സ്ത്രീ രോഗങ്ങൾ (Gynaecology)",
        desc: "ഗർഭാശയ മുഴകൾ, ആർത്തവ ക്രമക്കേടുകൾ, വെള്ളപോക്ക്, ഹോർമോൺ വ്യതിയാന പ്രശ്നങ്ങൾ"
    },
    {
        title: "തലവേദന (Head & Neurological)",
        desc: "മൈഗ്രെയ്ൻ, തലചുറ്റൽ, രക്തസമ്മർദ്ദം, തലവേദന, ഉറക്കമില്ലായ്മ"
    },
    {
        title: "ജീവിതശൈലി രോഗങ്ങൾ (Lifestyle)",
        desc: "തൈറോയ്ഡ്, അസിഡിറ്റി, പ്രമേഹം, കൊളസ്ട്രോൾ, അമിത വണ്ണം"
    },
    {
        title: "സന്ധി രോഗങ്ങൾ (Joints)",
        desc: "വാതരോഗങ്ങൾ, സന്ധി വീക്കം, തേയ്മാനം, ശരീരവേദന, നടുവേദന, സെർവിക്കൽ സ്പോണ്ടിലൈറ്റിസ്"
    },
    {
        title: "മൂത്രാശയ രോഗങ്ങൾ (Urinary)",
        desc: "മൂത്രത്തിലെ കല്ല്, പഴുപ്പ്, പ്രോസ്റ്റേറ്റ് ഗ്രന്ഥി വീക്കം"
    },
    {
        title: "ഉദര രോഗങ്ങൾ (Stomach)",
        desc: "അൾസർ, പൈൽസ്, ഫിഷർ, മഞ്ഞപ്പിത്തം, മലബന്ധം, ഗ്യാസ്ട്രൈറ്റിസ്, ഹെപ്പറ്റൈറ്റിസ്"
    },
    {
        title: "ചർമ്മ രോഗങ്ങൾ (Skin)",
        desc: "മുഖക്കുരു, താരൻ, സോറിയാസിസ്, മുടികൊഴിച്ചിൽ, ആണിരോഗം, അരിമ്പാറ, അലർജി, എക്സിമ, ചിരങ്ങ്, കരപ്പൻ"
    }
];

interface AllServicesProps {
    onBack: () => void;
}

const AllServices: React.FC<AllServicesProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'conditions' | 'specialties' | 'malayalam'>('specialties');

    return (
        <div className="min-h-screen bg-[#030305] text-white pt-24 pb-12 font-inter-tight absolute inset-0 z-50 overflow-y-auto">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                     <div>
                        <span className="text-green-400 text-xs font-bold tracking-widest uppercase mb-2 block">Comprehensive Care</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-playfair">Our Treatments & Practices</h1>
                     </div>
                     <button onClick={onBack} className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                        <span className="text-sm font-bold">Back to Home</span>
                        {/* @ts-ignore */}
                        <iconify-icon icon="solar:arrow-right-align-bold" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
                     </button>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 border-b border-white/10 pb-1 mb-12">
                    <button 
                        onClick={() => setActiveTab('specialties')}
                        className={`pb-4 px-2 text-sm font-bold tracking-wide uppercase transition-colors relative ${activeTab === 'specialties' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                        Specialized Therapies
                        {activeTab === 'specialties' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></div>}
                    </button>
                    <button 
                        onClick={() => setActiveTab('conditions')}
                        className={`pb-4 px-2 text-sm font-bold tracking-wide uppercase transition-colors relative ${activeTab === 'conditions' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                        Medical Conditions Treated
                        {activeTab === 'conditions' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></div>}
                    </button>
                    <button 
                        onClick={() => setActiveTab('malayalam')}
                        className={`pb-4 px-2 text-sm font-bold tracking-wide uppercase transition-colors relative ${activeTab === 'malayalam' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                        Diseases (Malayalam/English)
                        {activeTab === 'malayalam' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></div>}
                    </button>
                </div>

                {/* Content - Specialties */}
                {activeTab === 'specialties' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {specializedTreatments.map((item, idx) => (
                            <div key={idx} className="bg-theme-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
                                        {item.subtitle && <p className="text-green-400 text-sm">{item.subtitle}</p>}
                                    </div>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-2">
                                        {item.benefits.map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-2 text-gray-400 text-sm">
                                                <span className="mt-1 text-green-500">
                                                    {/* @ts-ignore */}
                                                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                                                </span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Content - Conditions */}
                {activeTab === 'conditions' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {conditions.map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors">
                                <span className="text-green-500 text-xl flex-shrink-0">
                                    {/* @ts-ignore */}
                                    <iconify-icon icon="solar:medical-kit-bold-duotone"></iconify-icon>
                                </span>
                                <span className="font-medium text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Content - Malayalam */}
                {activeTab === 'malayalam' && (
                    <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {malayalamCategories.map((item, idx) => (
                            <div key={idx} className="bg-theme-surface p-6 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold font-manjari mb-3 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light font-manjari">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-500/20 text-center">
                    <h3 className="text-2xl font-bold text-white font-playfair mb-4">Ready to start your healing journey?</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Our expert physicians are here to guide you to the right treatment plan tailored for your body type.</p>
                    <a href="#consultation" onClick={onBack} className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                        Book Consultation
                    </a>
                </div>

            </div>
        </div>
    );
};

export default AllServices;

import React from 'react';

const Consultation: React.FC = () => {
    return (
        <section id="consultation" className="py-24 bg-[#050507] relative border-t border-white/5">
            <div className="container mx-auto px-6">
                
                <div className="max-w-4xl mx-auto bg-[#0a0a0c] rounded-3xl overflow-hidden border border-white/5 flex flex-col md:flex-row shadow-2xl">
                    
                    {/* Left: Contact & WhatsApp */}
                    <div className="w-full md:w-2/5 bg-[#101014] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

                        <div>
                            <span className="text-green-400 text-xs font-bold tracking-widest uppercase font-inter-tight">Fastest Way</span>
                            <h3 className="text-2xl font-bold text-white mt-4 mb-2 font-inter-tight">Instant Booking</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Connect with our Ayurveda specialists directly via WhatsApp for quick appointments and queries.
                            </p>
                        </div>

                        <a 
                            href="https://wa.me/919876543210" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] group"
                        >
                            {/* @ts-ignore */}
                            <iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                            <span className="font-inter-tight">Chat on WhatsApp</span>
                            {/* @ts-ignore */}
                            <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                        </a>

                        <div className="mt-8 pt-8 border-t border-white/10">
                             <p className="text-gray-500 text-xs font-inter-tight text-center">
                                Typical response time: <span className="text-white">Under 10 mins</span>
                             </p>
                        </div>
                    </div>

                    {/* Right: Detailed Form */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#0a0a0c]">
                        <h3 className="text-2xl font-bold text-white mb-6 font-inter-tight">Book Consultation</h3>
                        
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Phone</label>
                                    <input type="tel" placeholder="+91 ..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Preferred Therapy (Optional)</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                                    <option value="" className="bg-[#0a0a0c] text-gray-500">Select a treatment...</option>
                                    <option value="panchakarma" className="bg-[#0a0a0c]">Panchakarma</option>
                                    <option value="abhyanga" className="bg-[#0a0a0c]">Abhyanga (Massage)</option>
                                    <option value="consultation" className="bg-[#0a0a0c]">General Consultation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Message</label>
                                <textarea rows={3} placeholder="Tell us about your health concerns..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"></textarea>
                            </div>

                            <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors font-inter-tight flex items-center justify-center gap-2 mt-4">
                                Request Appointment
                                {/* @ts-ignore */}
                                <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Consultation;
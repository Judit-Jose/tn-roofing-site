import React from 'react';
import { siteData } from '../../data/siteData';

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-[#F5F2F1]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-[#FE5D34] font-semibold text-sm tracking-wide uppercase mb-3">Why choose us</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D110D] mb-6 font-heading">
                        Reliable Roofing, Built To Last
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        {siteData.company.name} delivers expert solutions that protect your property and enhance its value. We combine local knowledge, quality materials, and reliable service for every project.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

                    {/* Box 1: Stats */}
                    <div className="bg-[#EAE4E1] rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                        <div>
                            <h3 className="text-xl font-bold text-[#1D110D] mb-2">Our clients</h3>
                            <div className="flex -space-x-3 mb-6">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-[#EAE4E1] object-cover" alt="Client" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-[#EAE4E1] object-cover" alt="Client" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-[#EAE4E1] object-cover" alt="Client" />
                                <div className="w-12 h-12 rounded-full bg-[#FE5D34] text-white flex items-center justify-center font-bold border-2 border-[#EAE4E1] text-sm">+</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-[#1D110D]">500+</p>
                            <p className="text-gray-600 font-medium">Projects Completed</p>
                        </div>
                    </div>

                    {/* Box 2: Image Card */}
                    <div className="bg-[#1D110D] rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform md:col-span-2 min-h-[300px]">
                        <img
                            src={siteData.images.services.roofing}
                            alt="Quality Roofing"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <p className="text-5xl font-bold text-white mb-2">90%</p>
                            <p className="text-gray-200 text-lg max-w-sm">We provide durable, energy-efficient roofing that stands the test of time.</p>
                        </div>
                    </div>

                    {/* Box 3: Tall Worker Image */}
                    <div className="rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform md:col-span-2 min-h-[400px]">
                        <img
                            src={siteData.images.heroBg}
                            alt="Roofer working"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Box 4: Savings/CTA */}
                    <div className="bg-[#FE5D34] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white hover:-translate-y-1 transition-transform min-h-[400px]">
                        <h3 className="text-3xl font-bold mb-4 font-heading leading-tight">Ready for a Roof Upgrade?</h3>
                        <p className="mb-8 text-white/90">Get a free inspection and discover how much you can enhance your property value.</p>
                        <a href="/contact" className="bg-white text-[#FE5D34] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            Get Free Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

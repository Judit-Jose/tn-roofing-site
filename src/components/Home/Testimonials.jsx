import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Quick to respond, reliable in service, and unmatched in roofing excellence — that’s our promise to you.",
            name: "Marjorie Jenkins",
            role: "Property Manager",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
            quote: "We pride ourselves on being there when you need us most — delivering fast, dependable solutions.",
            name: "Pamela Todd",
            role: "Local Homeowner",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
            quote: "Your peace of mind is our priority, and we respond fast so you don't have to worry about your roofing repairs.",
            name: "David Juarez",
            role: "Property Owner",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1D110D] font-heading leading-tight">
                            Client Experiences That Speak for Themselves
                        </h2>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-gray-600 text-lg border-l-2 border-[#FE5D34] pl-4">
                            Here's how we make a difference in real lives across the region.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testi, idx) => (
                        <div key={idx} className="bg-[#F5F2F1] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
                            <div>
                                <Quote className="text-[#EAE4E1] w-12 h-12 mb-6" fill="currentColor" />
                                <p className="text-[#1D110D] text-lg font-medium leading-relaxed mb-8">"{testi.quote}"</p>
                            </div>

                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star key={star} size={16} className="text-[#FE5D34]" fill="currentColor" />
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-[#1D110D]">{testi.name}</h4>
                                        <p className="text-gray-500 text-sm">{testi.role}</p>
                                    </div>
                                    <img src={testi.img} alt={testi.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

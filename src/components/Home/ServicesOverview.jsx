import React from 'react';
import { siteData } from '../../data/siteData';
import { ArrowUpRight } from 'lucide-react';

const ServicesOverview = () => {
    // We'll showcase top 3 services using our images
    const services = [
        { title: "Residential Roofing", desc: "We provide durable roofing for every home. From repairs to installations, keep your family safe year-round.", img: siteData.images.services.roofing, link: "/roofing-and-gutters" },
        { title: "Commercial Roofing", desc: "Protect your business with top-tier commercial roofing systems designed for longevity and low maintenance.", img: siteData.images.services.gutters, link: "/roofing-and-gutters" },
        { title: "Siding & Windows", desc: "Enhance curb appeal and energy efficiency with our premium siding and window installation services.", img: siteData.images.services.siding, link: "/siding-and-windows" }
    ];

    return (
        <section className="py-24 bg-[#1D110D]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <p className="text-[#FE5D34] font-semibold text-sm tracking-wide uppercase mb-3">Our Services</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
                            Comprehensive Roofing Solutions
                        </h2>
                    </div>
                    <a href="/roofing-and-gutters" className="inline-flex items-center text-white border-b-2 border-[#FE5D34] pb-1 font-semibold hover:text-[#FE5D34] transition-colors">
                        View All Services <ArrowUpRight size={20} className="ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <a href={service.link} key={idx} className="group relative rounded-3xl overflow-hidden h-[450px] shadow-xl flex flex-col justify-end">
                            {/* Image Background */}
                            <img
                                src={service.img}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                            {/* Circle Arrow Icon */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-[#FE5D34] transition-colors duration-300">
                                <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                            </div>

                            {/* Content text */}
                            <div className="relative z-10 p-8 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-90">{service.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;

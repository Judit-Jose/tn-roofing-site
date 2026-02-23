import React from 'react';
import { siteData } from '../data/siteData';
import { Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-white px-4 pb-8 md:px-8 md:pb-12 pt-4">
            <div
                className="relative w-full h-[600px] md:h-[800px] rounded-[3rem] overflow-hidden shadow-2xl"
                style={{
                    backgroundImage: `url(${siteData.images.heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Main Content Area */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
                    <div className="max-w-3xl relative z-10 w-full mb-12 lg:mb-0">
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white drop-shadow-lg leading-tight mb-6">
                            Reliable Residential Exterior & Interior Solutions

                        </h1>
                        <p className="text-white text-lg md:text-2xl drop-shadow-md max-w-2xl font-body font-light opacity-95">
                            True North Roofing and Restoration offers top-quality roofing and restoration services, delivering reliable solutions—from roofing and siding to gutters and windows—designed to protect and enhance your property.                             </p>
                    </div>
                </div>

                {/* Floating Profile Card - Bottom Right */}
                <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 bg-white p-4 rounded-3xl shadow-2xl flex items-center gap-6 max-w-sm z-20 animate-slide-up hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200">
                        {/* Placeholder for owner image mapping to Proofers styling */}
                        <img
                            src={siteData.images.owner}
                            alt="Owner Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-dark mb-1 leading-tight">{siteData.company.ownerName}</h3>
                        <p className="text-gray-500 text-sm mb-3">Owner of {siteData.company.name}</p>
                        <a
                            href={`tel:${siteData.company.phone}`}
                            className="inline-flex items-center justify-center bg-brand-orange text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors shadow-md"
                        >
                            <Phone size={16} className="mr-2" />
                            {siteData.company.phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

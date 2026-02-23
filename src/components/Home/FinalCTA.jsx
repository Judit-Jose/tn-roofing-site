import React from 'react';
import { siteData } from '../../data/siteData';

const FinalCTA = () => {
    const openModal = (e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-contact-modal'));
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div
                    className="relative rounded-[3rem] overflow-hidden bg-[#F5F2F1] shadow-2xl min-h-[500px] flex items-center p-8 md:p-16 lg:p-24"
                >
                    {/* Background layout mimicking the Behance red roof crop */}
                    <div className="absolute right-0 bottom-0 w-full md:w-[60%] h-full opacity-40 md:opacity-100 mix-blend-multiply md:mix-blend-normal z-0">
                        <img
                            src={siteData.images.contactBg}
                            alt="Roofing Pattern"
                            className="absolute right-0 bottom-0 w-full h-full object-cover object-left-bottom"
                        />
                    </div>
                    {/* Gradient to smooth out the transition on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2F1] via-[#F5F2F1]/90 md:via-[#F5F2F1]/40 to-transparent z-[1]"></div>

                    {/* Content Front */}
                    <div className="relative z-10 max-w-xl">
                        <p className="text-[#FE5D34] font-semibold text-sm tracking-wide uppercase mb-4">
                            Book Your Spot Today
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#1D110D] font-heading leading-tight mb-10">
                            Keeping Your Roof In Good Shape For Years
                        </h2>

                        <button
                            onClick={openModal}
                            className="bg-[#FE5D34] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-black hover:scale-105 transition-all inline-flex items-center text-lg"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

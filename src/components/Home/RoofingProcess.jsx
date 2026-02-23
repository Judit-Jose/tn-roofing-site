import React from 'react';

const RoofingProcess = () => {
    const steps = [
        { id: 1, title: "Consultation", active: false },
        { id: 2, title: "Inspection", active: true },
        { id: 3, title: "Estimation", active: false },
        { id: 4, title: "Installation", active: false },
        { id: 5, title: "Final Review", active: false }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <p className="text-[#FE5D34] font-semibold text-sm tracking-wide uppercase mb-3">How we work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D110D] font-heading">
                        Our Seamless Roofing Process
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting UI Line */}
                    <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-gray-200 -z-10"></div>
                    <div className="hidden md:block absolute top-6 left-12 h-0.5 bg-[#FE5D34] -z-10" style={{ width: '30%' }}></div>

                    {/* Step Nodes */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative z-10">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center flex-1 w-full text-center group cursor-pointer hover:-translate-y-2 transition-transform">
                                {/* Circle Node */}
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md transition-colors ${step.active
                                        ? 'bg-[#FE5D34] text-white ring-4 ring-[#FE5D34]/20'
                                        : 'bg-white text-gray-500 border-2 border-gray-200 group-hover:border-[#FE5D34] group-hover:text-[#FE5D34]'
                                    }`}>
                                    0{step.id}
                                </div>

                                {/* Node Label */}
                                <h3 className={`text-xl font-bold mb-3 ${step.active ? 'text-[#1D110D]' : 'text-gray-500 group-hover:text-[#1D110D]'}`}>
                                    {step.title}
                                </h3>

                                {/* Optional tiny description */}
                                <p className="text-gray-500 text-sm hidden md:block px-2">
                                    {step.id === 1 && "Discuss goals."}
                                    {step.id === 2 && "Thorough site review."}
                                    {step.id === 3 && "Detailed cost plan."}
                                    {step.id === 4 && "Expert craftsmanship."}
                                    {step.id === 5 && "Complete satisfaction."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofingProcess;

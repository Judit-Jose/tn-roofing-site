import React from 'react';
import { siteData } from '../data/siteData';
import ServiceCard from '../components/ServiceCard';

const Services = ({ category }) => {
    // Filter services by category if a prop is passed, or just show all
    const displayedServices = category
        ? siteData.services.filter(s => s.title.toLowerCase().includes(category.toLowerCase()) || s.description.toLowerCase().includes(category.toLowerCase()))
        : siteData.services;

    return (
        <div className="services-page py-16 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                        {category ? `${category} Services` : "Our Expertise"}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        True North Roofing and Restoration provides top-tier materials and expert craftsmanship for your {category ? category.toLowerCase() : 'exterior'} project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            link={service.link}
                            imgKey={service.imgKey}
                        />
                    ))}
                </div>

                {/* Placeholder for specific content blocks */}
                <div className="mt-20 p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-3xl font-bold mb-6 text-brand-dark">Why trust True North with your {category || 'Property'}?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We use only the highest quality materials backed by industry-leading warranties. Our experienced crews
                        are dedicated to completing your project on time, on budget, and to your complete satisfaction.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                        <li>Fully Licensed and Insured</li>
                        <li>Free, No-Obligation Inspections and Estimates</li>
                        <li>Insurance Claim Assistance</li>
                        <li>Commitment to Safety and Cleanliness</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Services;

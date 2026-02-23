import React from 'react';
import { siteData } from '../data/siteData';

const ServiceCard = ({ title, description, icon, link, imgKey }) => {
    return (
        <div className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center overflow-hidden border border-gray-100 group">
            {imgKey && siteData.images.services[imgKey] && (
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={siteData.images.services[imgKey]}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            )}

            <div className="p-8 flex flex-col items-center text-center flex-grow">
                {!imgKey && (
                    <div className="icon-wrapper w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mb-6 text-brand-navy">
                        <span className="text-3xl font-bold">{title.charAt(0)}</span>
                    </div>
                )}

                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{description}</p>

                {link && (
                    <a href={link} className="text-brand-red font-semibold uppercase tracking-wider hover:text-brand-navy transition-colors mt-auto">
                        Learn More &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;

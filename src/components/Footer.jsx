import React from 'react';
import { siteData } from '../data/siteData';

const Footer = () => {
    return (
        <footer className="footer py-16 bg-brand-dark text-white">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Info */}
                    <div className="footer-brand">
                        <img
                            src="/assets.cdn.filesafe.space/4B7bVvRM7AQSRKp1jihi/media/67584288018eecd6f30a9168.png"
                            alt={siteData.company.name}
                            className="footer-logo mb-6"
                            style={{ maxWidth: '200px' }}
                        />
                        <p className="text-gray-300 mb-4">{siteData.company.motto}</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {siteData.navigation.map((link) => (
                                <li key={link.name}>
                                    <a href={link.path} className="text-gray-300 hover:text-white transition-colors block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-red mr-3">📍</span>
                                <span className="text-gray-300">{siteData.company.address}</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-brand-red mr-3">📞</span>
                                <a href={`tel:${siteData.company.phone.replace(/[^0-9]/g, '')}`} className="text-gray-300 hover:text-white transition-colors">{siteData.company.phone}</a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-brand-red mr-3">✉️</span>
                                <a href={`mailto:${siteData.company.email}`} className="text-gray-300 hover:text-white transition-colors">{siteData.company.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="footer-bottom mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {siteData.company.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

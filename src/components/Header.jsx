import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openContactModal = (e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-contact-modal'));
        setIsMenuOpen(false);
    };

    return (
        <header className="header bg-white sticky top-0 z-40 shadow-sm">
            <div className="container flex justify-between items-center h-full py-2">
                {/* Logo */}
                <a href="/" className="logo-link flex items-center flex-shrink-0">
                    <img
                        src={siteData.images.logoPlaceholder}
                        alt={siteData.company.name}
                        className="logo-img h-12 md:h-16"
                    />
                </a>

                {/* Desktop Nav & CTA */}
                <div className="hidden md:flex flex-1 justify-center">
                    <nav className="desktop-nav">
                        <ul className="flex items-center gap-8">
                            {siteData.navigation.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className={`text-base font-semibold transition-colors ${index === 0 ? 'text-brand-orange' : 'text-gray-800 hover:text-brand-orange'}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="hidden md:flex flex-shrink-0">
                    <button
                        onClick={openContactModal}
                        className="bg-brand-dark text-white rounded-full px-6 py-3 font-semibold hover:bg-black transition-colors"
                    >
                        Get Free Quote
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden mobile-menu-toggle p-2 text-brand-dark"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <div className="md:hidden mobile-nav-overlay absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-slide-up">
                    <nav className="mobile-nav p-4">
                        <ul className="flex flex-col gap-2">
                            {siteData.navigation.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className="mobile-nav-link block p-3 text-lg font-semibold text-gray-800 hover:bg-gray-50 rounded-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="mt-4 pt-4 border-t border-gray-100">
                                <button
                                    onClick={openContactModal}
                                    className="w-full btn-primary py-3 text-lg"
                                >
                                    Get in Touch
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

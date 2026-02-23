import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { X } from 'lucide-react';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-contact-modal', handleOpen);
        return () => window.removeEventListener('open-contact-modal', handleOpen);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsOpen(false)}>
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-slide-up" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="bg-brand-dark px-6 py-4 flex justify-between items-center text-white">
                    <h2 className="text-2xl font-bold font-heading tracking-wide">Get In Touch</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-8 bg-gray-50">
                    <p className="text-gray-600 mb-6 text-center">Fill out the form below and our team will get back to you as soon as possible with a free quote.</p>
                    <ContactForm onSuccess={() => setIsOpen(false)} />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;

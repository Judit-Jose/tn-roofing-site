import React from 'react';
import { siteData } from '../data/siteData';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <main className="page-contact mt-16 md:mt-24">
            {/* Contact Header */}
            <section
                className="py-20 bg-brand-dark text-white relative flex justify-center items-center overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${siteData.images.contactBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="container relative z-10 text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
                    <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                        Ready to start your next exterior project? Reach out to our team of experts for a free, no-obligation consultation.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 bg-gray-50">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Form Component */}
                    <div className="animate-slide-up bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6 tracking-tight">Send Us a Message</h2>
                        <ContactForm />
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl font-bold font-heading text-brand-dark mb-8 tracking-tight">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="info-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="icon-wrapper w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1 text-gray-800">Phone</h3>
                                    <a href={`tel:${siteData.company.phone}`} className="text-gray-600 hover:text-brand-orange transition-colors text-lg">
                                        {siteData.company.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="info-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="icon-wrapper w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1 text-gray-800">Email</h3>
                                    <a href={`mailto:${siteData.company.email}`} className="text-gray-600 hover:text-brand-orange transition-colors text-lg">
                                        {siteData.company.email}
                                    </a>
                                </div>
                            </div>

                            <div className="info-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="icon-wrapper w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1 text-gray-800">Location</h3>
                                    <span className="text-gray-600 text-lg">
                                        {siteData.company.address}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-brand-dark p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full opacity-5 transform translate-x-8 -translate-y-8"></div>
                            <h3 className="text-2xl font-bold font-heading flex items-center mb-4">
                                <Clock className="mr-3 text-brand-orange" />
                                Business Hours
                            </h3>
                            <ul className="space-y-3 text-lg opacity-90">
                                <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday - Friday:</span> <span>8:00 AM - 6:00 PM</span></li>
                                <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                                <li className="flex justify-between text-brand-orange"><span>Sunday:</span> <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;

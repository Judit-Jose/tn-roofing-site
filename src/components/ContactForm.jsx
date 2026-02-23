import React, { useState } from 'react';
import Button from './Button';

const ContactForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            if (onSuccess) {
                setTimeout(onSuccess, 2000);
            }
        }, 1500);
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center animate-fade-in">
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>Your message has been received. We will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightBlue rounded-bl-full -z-10 opacity-20 transform translate-x-8 -translate-y-8"></div>

            <div className="form-group mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all bg-gray-50 hover:bg-white"
                    placeholder="John Doe"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all bg-gray-50 hover:bg-white"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all bg-gray-50 hover:bg-white"
                        placeholder="(555) 123-4567"
                    />
                </div>
            </div>

            <div className="form-group mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all bg-gray-50 hover:bg-white resize-none"
                    placeholder="Tell us about your roofing or restoration needs..."
                ></textarea>
            </div>

            <Button type="submit" variant="primary" className="w-full flex justify-center py-4 text-lg mt-4 shadow-md hover:shadow-lg transition-all" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
            </Button>
        </form>
    );
};

export default ContactForm;

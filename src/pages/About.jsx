import React from 'react';
import { siteData } from '../data/siteData';

const About = () => {
    return (
        <div className="about-page bg-white">
            {/* Hero-ish Banner for internal pages */}
            <div className="bg-brand-dark py-16 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About True North</h1>
                <p className="text-xl max-w-2xl mx-auto opacity-90">Your Property Is Our Priority</p>
            </div>

            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-orange mb-6 uppercase tracking-wider">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Based right here in {siteData.company.address}, True North Roofing and Restoration
                            was founded on the principles of honesty, integrity, and superior craftsmanship.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We understand that your home or commercial property is a major investment.
                            Whether you need emergency roof repairs after a storm, a complete roof replacement,
                            or new energy-efficient windows, our dedicated team is here to guide you through
                            every step of the process.
                        </p>
                    </div>

                    <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                        <img
                            src={siteData.images.aboutMain}
                            alt="True North Roofing"
                            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-32">
                    <h2 className="text-center text-3xl font-bold mb-12 text-brand-dark">What Sets Us Apart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl text-center shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-brand-orange mb-4">Quality Materials</h3>
                            <p className="text-gray-600">We partner with industry-leading manufacturers to ensure your project stands the test of time.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl text-center shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-brand-orange mb-4">Expert Craftsmanship</h3>
                            <p className="text-gray-600">Our installers are highly trained, experienced, and dedicated to precision down to the last detail.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl text-center shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-brand-orange mb-4">Customer First</h3>
                            <p className="text-gray-600">Transparent communication and a hassle-free experience are guarantees when you work with True North.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

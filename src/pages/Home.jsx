import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import ServicesOverview from '../components/Home/ServicesOverview';
import RoofingProcess from '../components/Home/RoofingProcess';
import Testimonials from '../components/Home/Testimonials';
import FinalCTA from '../components/Home/FinalCTA';

const Home = () => {
    return (
        <div className="home-page overflow-hidden">
            <Hero />
            <WhyChooseUs />
            <ServicesOverview />
            <RoofingProcess />
            <Testimonials />
            <FinalCTA />
        </div>
    );
};

export default Home;

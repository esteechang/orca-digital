import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';

import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials/index1';
import TestimonialsNew from '../components/Testimonials/testimonials';
import Footer from '../components/Footer';
import Careers from '../components/HeroSection/HeroSectionCareers';
import ContactUs from '../components/ContactUs';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            {/* <InfoSection {...homeObjTwo} /> */}
            <Services />
            {/* <Testimonials /> */}

            <TestimonialsNew />
            <Careers />
            {/* <InfoSection {...homeObjThree} /> */}
            <ContactUs />
            <Footer />
        </>
    );
};

export default Home;

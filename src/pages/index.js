import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';

// import '../App.css';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjThree,
    homeObjTwo,
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
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
            <InfoSection {...homeObjTwo} />
            <Services />
            <Testimonials />
            <Careers />
            {/* <InfoSection {...homeObjThree} /> */}
            {/* <InfoSection {...homeObjThree}></InfoSection> */}
            <ContactUs />
            <Footer />
        </>
    );
};

export default Home;

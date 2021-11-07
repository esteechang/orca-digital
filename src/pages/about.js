import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import PhoneAbout from '../components/AboutPage/About/PhoneAbout';
import PhoneFocus from '../components/AboutPage/Focus/PhoneFocus';
import PhoneIntro from '../components/AboutPage/Intro/PhoneIntro';
import PhoneMission from '../components/AboutPage/Mission/PhoneMission';
import PhoneVision from '../components/AboutPage/Vision/PhoneVision';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Intro from '../components/AboutPage/Intro/Intro';
import AboutUs from '../components/AboutPage/About/About';
import { BackToTopArrow } from '../components/AboutPage/Intro/styles';
import Mission from '../components/AboutPage/Mission/Mission';
import Focus from '../components/AboutPage/Focus/Focus';
import Vision from '../components/AboutPage/Vision/Vision';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        document.title = "Orca Digital | About "
     }, []);

    return (
        <>
            <div style={{ backgroundColor: '#fbbd14' }}>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} about />
            </div>
            <div style={{ height: '100vh' }}>
                <PhoneIntro />
                <PhoneAbout />
                <PhoneMission />
                <PhoneFocus />
                <PhoneVision />
                <BackToTopArrow onClick={toggleHome} />
                <Intro />
                <AboutUs />
                <Mission />
                <Focus />
                <Vision />
            </div>
        </>
    );
};

export default About;

import React, { useState } from 'react';
import PhoneAbout from '../components/AboutPage/About/PhoneAbout';
import PhoneFocus from '../components/AboutPage/Focus/PhoneFocus';
import PhoneIntro from '../components/AboutPage/Intro/PhoneIntro';
import PhoneMission from '../components/AboutPage/Mission/PhoneMission';
import PhoneVision from '../components/AboutPage/Vision/PhoneVision';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
            </div>
            <div style={{ height: '100vh' }}>
                <PhoneIntro />
                <PhoneAbout />
                <PhoneMission />
                <PhoneFocus />
                <PhoneVision />
            </div>
        </>
    );
};

export default About;

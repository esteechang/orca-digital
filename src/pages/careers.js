import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/CareerPage/CareerInfoSection';

// import '../App.css';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjThree,
    homeObjTwo,
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Header from '../components/CareerPage/Header';

const Careers = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Header />
            <HeroSection id="careers" />
            <Footer />
        </>
    );
};

export default Careers;

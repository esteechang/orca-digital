import React, { useEffect, useState } from 'react';
import Intro from '../components/Intro';
import LoadingScreen from '../components/LoadingScreen';
import Main from '../components/Main';
import { BgImageContainer, ImageBg } from '../components/Main/styles';

import MainImageV2 from '../assets/images/MainscreenV2.jpeg';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    useEffect(() => {
        document.title = 'Orca Digital | Home ';
    }, []);
    return (
        <>
            <BgImageContainer>
                <ImageBg src={MainImageV2} />
            </BgImageContainer>
            {loading ? (
                <div style={{ backgroundColor: 'black' }}>
                    <LoadingScreen />
                </div>
            ) : (
                <div style={{ height: '100vh' }}>
                    <Main />
                    <Intro />
                    <Services />
                    <Contact id="contact" />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Home;

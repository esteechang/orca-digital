import React, { useEffect, useState } from 'react';
import Intro from '../components/Intro';
import LoadingScreen from '../components/LoadingScreen';
import Main from '../components/Main';
import { BgImageContainer, ImageBg } from '../components/Main/styles';

import MainImageV2 from '../assets/images/MainscreenV2.jpeg';
import Services from '../components/Services';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
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
                </div>
            )}
        </>
    );
};

export default Home;

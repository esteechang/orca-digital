import React, { useState } from 'react';
import { Button } from '../Button/ButtonElement';

import Video from '../../assets/videos/testimony-background.mp4';
import {
    HeroBg,
    HeroContainer,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './styles';
import { Link } from 'react-router-dom';

import Icon1 from '../../assets/images/orca.jpeg';

import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './styles';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <HeroContainer id="testimonials">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <ServicesWrapper>
                        <ServicesH1>Testimonials</ServicesH1>
                        <ServicesWrapper>
                            <ServicesCard>
                                <ServicesIcon src={Icon1} />
                                <ServicesH2>Company A</ServicesH2>
                                <ServicesP>
                                    We helped them gain xx xxxx
                                </ServicesP>
                            </ServicesCard>
                            <ServicesCard>
                                <ServicesIcon src={Icon1} />
                                <ServicesH2>Company B</ServicesH2>
                                <ServicesP>100% increase in revenue!</ServicesP>
                            </ServicesCard>
                            <ServicesCard>
                                <ServicesIcon src={Icon1} />
                                <ServicesH2>Company C</ServicesH2>
                                <ServicesP>Expanded 3x islandwide</ServicesP>
                            </ServicesCard>
                        </ServicesWrapper>
                    </ServicesWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default HeroSection;

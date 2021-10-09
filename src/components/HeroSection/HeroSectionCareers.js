import React, { useState } from 'react';
import Video from '../../assets/videos/career.mp4';
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
    CareerLinkContainer,
} from './styles';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="careers">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>JOIN US</HeroH1>
                <HeroP>Change the world.</HeroP>
                <HeroBtnWrapper>
                    <CareerLinkContainer
                        primary="true"
                        dark="true"
                        to="/careers"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        <p style={{ marginTop: 3 }}>Apply now</p>
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </CareerLinkContainer>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;

import React, { useState } from 'react';
import { Button } from '../Button/ButtonElement';

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
    CareerLink,
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
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true" //remove for black bg
                        dark="true" // remove for white words
                    >
                        <CareerLink to="/careers">
                            Apply now
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </CareerLink>
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;

import React, { useState } from 'react';
import { Button } from '../Button/ButtonElement'

import Video from '../../assets/videos/waves-2.mp4';
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

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>ORCA DIGITAL</HeroH1>
                <HeroP>Marketing made easy.</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="about"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true" //remove for black bg
                        dark="true" // remove for white words
                    >
                        Learn more {hover ? <ArrowForward /> : <ArrowRight />}{' '}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;

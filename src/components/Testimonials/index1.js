import React from 'react';
import Icon1 from '../../assets/images/orca.jpeg';
import Video from '../../assets/videos/career.mp4';
import {
    HeroBg,
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
    VideoBg,
} from './styles';

const Services = () => {
    return (
        <ServicesContainer id="testimonials">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            {/* <HeroContent>
                <HeroH1>JOIN US</HeroH1>
                <HeroP>Change the world.</HeroP>
                <HeroBtnWrapper>
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true" //remove for black bg
                        dark="true" // remove for white words
                    >
                        <Link to="/careers">
                            Learn more{' '}
                            {hover ? <ArrowForward /> : <ArrowRight />}{' '}
                        </Link>
                    </Button>
                </HeroBtnWrapper>
            </HeroContent> */}

            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <ServicesH1>Testimonials</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Company A</ServicesH2>
                    <ServicesP>We helped them gain xx xxxx</ServicesP>
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
        </ServicesContainer>
    );
};

export default Services;

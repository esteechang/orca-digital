import React from 'react';
import Icon1 from '../../assets/images/orca.jpeg';
import Video from '../../assets/videos/testimony-background.mp4';
import OrcaLogo from '../../assets/images/orca-logo-new.png';

import {
    HeroBg,
    HeroContainer,
    HeroContent,
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
    VideoBg,
} from './styles';

const Testimonials = () => {
    return (
        <>
            {/* <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent> */}
            <ServicesContainer id="testimonials">
                <ServicesH1>Testimonials</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={OrcaLogo} />
                        {/* <ServicesH2>Company A</ServicesH2>
                            <ServicesP>We helped them gain xx xxxx</ServicesP> */}
                        <ServicesH2> Coming Soon...</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={OrcaLogo} />
                        {/* <ServicesH2>Company B</ServicesH2>
                            <ServicesP>100% increase in revenue!</ServicesP> */}
                        <ServicesH2> Coming Soon...</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={OrcaLogo} />
                        {/* <ServicesH2>Company C</ServicesH2>
                            <ServicesP>Expanded 3x islandwide</ServicesP> */}
                        <ServicesH2> Coming Soon...</ServicesH2>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
            {/* </HeroContent>
            </HeroContainer> */}
        </>
    );
};

export default Testimonials;

import React from 'react';
import Icon1 from '../../assets/images/orca.jpeg';
import Video from '../../assets/videos/testimony-background.mp4';
import OrcaLogo from '../../assets/images/orca-logo-new.png';

import {
    HeroBg,
    HeroContainer,
    HeroContent,
    TestimonialsCard,
    TestimonialsContainer,
    TestimonialsH1,
    TestimonialsH2,
    TestimonialsIcon,
    TestimonialsP,
    TestimonialsWrapper,
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
            <TestimonialsContainer id="testimonials">
                <TestimonialsH1>Testimonials</TestimonialsH1>
                <TestimonialsWrapper>
                    <TestimonialsCard>
                        <TestimonialsIcon src={OrcaLogo} />
                        {/* <TestimonialsH2>Company A</TestimonialsH2>
                            <TestimonialsP>We helped them gain xx xxxx</TestimonialsP> */}
                        <TestimonialsH2> Coming Soon...</TestimonialsH2>
                    </TestimonialsCard>
                    <TestimonialsCard>
                        <TestimonialsIcon src={OrcaLogo} />
                        {/* <TestimonialsH2>Company B</TestimonialsH2>
                            <TestimonialsP>100% increase in revenue!</TestimonialsP> */}
                        <TestimonialsH2> Coming Soon...</TestimonialsH2>
                    </TestimonialsCard>
                    <TestimonialsCard>
                        <TestimonialsIcon src={OrcaLogo} />
                        {/* <TestimonialsH2>Company C</TestimonialsH2>
                            <TestimonialsP>Expanded 3x islandwide</TestimonialsP> */}
                        <TestimonialsH2> Coming Soon...</TestimonialsH2>
                    </TestimonialsCard>
                </TestimonialsWrapper>
            </TestimonialsContainer>
            {/* </HeroContent>
            </HeroContainer> */}
        </>
    );
};

export default Testimonials;

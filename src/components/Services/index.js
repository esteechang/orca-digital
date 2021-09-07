import React from 'react';
import Icon1 from '../../assets/images/orca.jpeg';
import BrandingIcon from '../../assets/images/branding-illustration.svg';
import DigitalMarketingIcon from '../../assets/images/socialmedia-illustration.svg';
import IdeationIcon from '../../assets/images/ideation-illustration.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
    // ImageBg,
    // HeroBg,
    Content,
} from './styles';
import ServicesBackground from '../../assets/images/services2.jpeg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            {/* <Content img={ServicesBackground}> */}
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={BrandingIcon} />
                    <ServicesH2>Branding</ServicesH2>
                    <ServicesP>
                        {/* Description for service 1 xxxxxx */}
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={DigitalMarketingIcon} />
                    <ServicesH2>Digital Marketing</ServicesH2>
                    <ServicesP>
                        {/* We can xxxxx xxxxxx related to title 2 */}
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={IdeationIcon} />
                    <ServicesH2>Ideation</ServicesH2>
                    <ServicesP>
                        {/* We will make you the BEST in the market! */}
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            {/* </Content> */}
        </ServicesContainer>
    );
};

export default Services;

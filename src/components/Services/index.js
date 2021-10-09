import React from 'react';
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
    TitleContainer, 
    Underline
} from './styles';

const Services = () => {
    return (
        <ServicesContainer id="services">
            {/* <ServicesH1>Our Services</ServicesH1> */}
            <TitleContainer>
                    <h1 >Our Services</h1>
                    <Underline />
                </TitleContainer>
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
        </ServicesContainer>
    );
};

export default Services;

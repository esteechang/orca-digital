import React from 'react';
import Icon1 from '../../assets/images/orca.jpeg';
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
            <Content img={ServicesBackground}>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Gain customer base</ServicesH2>
                        <ServicesP>
                            We can help you market your products
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Title 2</ServicesH2>
                        <ServicesP>
                            We can xxxxx xxxxxx related to title 2
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Title 3</ServicesH2>
                        <ServicesP>
                            We will make you the BEST in the market!
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </Content>
        </ServicesContainer>
    );
};

export default Services;

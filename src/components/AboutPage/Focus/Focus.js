import React from 'react';
import { Fade } from 'react-awesome-reveal';

import {
    Column,
    Container,
    ElementContainer,
    Icon,
    IconsContainer,
    Subtitle,
    Title,
    ThinLineTop,
    ThickLine,
    MakingWavesIcon,
} from './styles';

import icons from '../../../icons';

const Focus = () => {
    return (
        <Container>
            <Fade direction="left" delay={1500} duration={3000} triggerOnce>
                <Title>FOCUS</Title>
            </Fade>
            <Fade direction="down" duration={4500} delay={1000} triggerOnce>
                <ThinLineTop />
            </Fade>
            <Fade duration={3000} delay={2000} triggerOnce>
                <ThickLine />
            </Fade>
            <Fade delay={3500} duration={2500} triggerOnce>
                <IconsContainer>
                    <Column>
                        <ElementContainer style={{ marginBottom: 50 }}>
                            <Icon src={icons[14]} />
                            <Subtitle>Reliability</Subtitle>
                        </ElementContainer>
                        <ElementContainer>
                            <Icon src={icons[17]} />
                            <Subtitle>Data driven</Subtitle>
                            <Subtitle style={{ marginTop: 0 }}>
                                execution
                            </Subtitle>
                        </ElementContainer>
                    </Column>
                    <Column>
                        <ElementContainer style={{ marginBottom: 50 }}>
                            <Icon src={icons[15]} />
                            <Subtitle>Creative Firepower</Subtitle>
                        </ElementContainer>
                        <ElementContainer>
                            <Icon src={icons[18]} />
                            <Subtitle>Insights</Subtitle>
                        </ElementContainer>
                    </Column>
                    <Column>
                        <ElementContainer style={{ marginBottom: 50 }}>
                            <MakingWavesIcon src={icons[16]} />
                            <Subtitle>Making Waves</Subtitle>
                        </ElementContainer>
                        <ElementContainer>
                            <Icon src={icons[19]} />
                            <Subtitle>Unforgettable</Subtitle>
                            <Subtitle style={{ marginTop: 0 }}>
                                branding
                            </Subtitle>
                        </ElementContainer>
                    </Column>
                </IconsContainer>
            </Fade>
        </Container>
    );
};

export default Focus;

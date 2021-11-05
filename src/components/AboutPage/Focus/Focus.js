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
} from './styles';
import { DividerContainer, ThickLine, ThinLine } from '../Intro/styles';

import icons from '../../../icons';

const Focus = () => {
    return (
        <Container>
            <Fade direction="left" delay={1000} duration={2000} triggerOnce>
                <Title>FOCUS</Title>
            </Fade>
            <Fade direction="down" duration={1500} triggerOnce>
                <DividerContainer>
                    <ThinLine style={{ height: 272 }} />
                    <ThickLine style={{ marginTop: -60, height: 370 }} />
                    <ThinLine style={{ height: 165 }} />
                </DividerContainer>
            </Fade>
            <Fade delay={2000} duration={2500} triggerOnce>
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
                            <Icon
                                src={icons[16]}
                                style={{ width: 40, marginLeft: 65 }}
                            />
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

import React from 'react';
import { Container, Subtitle, Title } from './styles';
import { DividerContainer, ThickLine, ThinLine } from '../Intro/styles';
import { Fade } from 'react-awesome-reveal';

const Mission = () => {
    return (
        <Container>
            <Fade direction="left" delay={1000} duration={1500} triggerOnce>
                <Title >MISSION</Title>
            </Fade>
            <Fade direction="down" duration={1500} triggerOnce>
                <DividerContainer>
                    <ThinLine style={{}} />
                    <ThickLine style={{ marginTop: -20, height: 300 }} />
                    <ThinLine />
                </DividerContainer>
            </Fade>
            <Fade direction="right" delay={1500} duration={2000} triggerOnce>
                <Subtitle>
                    Redefining brands in a digital arena, we aim to use creative
                    strategy, analytics and activation to connect and interact.
                    <br />
                    <br />
                    <br />
                    To redefine the Asian digital arena.
                    <br />
                    <br />
                    <br />
                    Hyper accelerating the growth of our clients through the use
                    of Innovative and Creative strategies to secure the hunt.
                </Subtitle>
            </Fade>
        </Container>
    );
};

export default Mission;

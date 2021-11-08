import React from 'react';
import { Container, Subtitle, Title, ThinLineTop, ThickLine } from './styles';
import { Fade } from 'react-awesome-reveal';

const Mission = () => {
    return (
        <Container>
            <Fade direction="left" delay={1500} duration={2500} triggerOnce>
                <Title>MISSION</Title>
            </Fade>
            <Fade direction="down" duration={4500} delay={1000} triggerOnce>
                <ThinLineTop />
            </Fade>
            <Fade duration={3000} delay={2000} triggerOnce>
                <ThickLine />
            </Fade>

            <Fade direction="right" delay={2000} duration={2500} triggerOnce>
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
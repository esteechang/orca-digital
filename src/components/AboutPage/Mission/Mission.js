import React from 'react';
import { Container, Subtitle, Title, ThickLine } from './styles';
import { Fade } from 'react-awesome-reveal';
import './styles.css';

const Mission = () => {
    return (
        <>
            <Container>
                <Fade direction="left" delay={1500} duration={2500} triggerOnce>
                    <Title>MISSION</Title>
                </Fade>
                {/* <Fade direction="down" duration={5500} triggerOnce>
                <ThinLineTop />
                
            </Fade> */}
                <div id="thinline"></div>
                <Fade duration={1500} delay={1000} triggerOnce>
                    <ThickLine />
                </Fade>

                <Fade
                    direction="right"
                    delay={2000}
                    duration={2500}
                    triggerOnce
                >
                    <Subtitle>
                        Redefining brands in a digital arena, we aim to use
                        creative strategy, analytics and activation to connect
                        and interact.
                        <br />
                        <br />
                        <br />
                        To redefine the Asian digital arena.
                        <br />
                        <br />
                        <br />
                        Hyper accelerating the growth of our clients through the
                        use of Innovative and Creative strategies to secure the
                        hunt.
                    </Subtitle>
                </Fade>
            </Container>
        </>
    );
};

export default Mission;

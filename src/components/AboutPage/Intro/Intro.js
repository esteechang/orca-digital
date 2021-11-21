import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, ThickLine, Title, Subtitle } from './styles';

import './styles.css';

const Intro = () => {
    return (
        <Container>
            <Fade direction="left" duration={1000} delay={1000} triggerOnce>
                <Title>ABOUT</Title>
            </Fade>

            <Fade triggerOnce  duration={1000}>
                <div className="here"></div>
                <ThickLine />
            </Fade>
            <Fade direction="right" duration={2000} delay={1500} triggerOnce>
                <Subtitle>
                    ORCA Digital was conceived when a group of Singaporean sons
                    came together and decided to create a unit to call their
                    own. Driven and skilled, the founding team found their
                    specific sets of skills could make a business soar.
                    <br />
                    <br />
                    At ORCA Digital, our in-house team expects to be the leading
                    marketing partner of SMEs to help you soar too.
                </Subtitle>
            </Fade>
        </Container>
    );
};

export default Intro;

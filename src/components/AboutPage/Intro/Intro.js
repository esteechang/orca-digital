import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
    Container,
    DividerContainer,
    ThickLine,
    Title,
    ThinLine,
    Subtitle,
} from './styles';

const Intro = () => {
    return (
        <Container>
            <Fade direction="left" duration={1000} delay={1000} triggerOnce>
                <Title>ABOUT</Title>
            </Fade>
            <Fade duration={1500} delay={500} triggerOnce>
                <DividerContainer>
                    <ThickLine />
                    <ThinLine />
                </DividerContainer>
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

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
    Container,
    Divider,
    Subtitle,
    SubtitleContainer,
    Title,
} from './styles';

const Intro = () => {
    return (
        <Container>
            <Fade direction="left" duration={2500} delay={1500} triggerOnce>
                <Title>CREATING WAVES FOR BUSINESSES </Title>
            </Fade>
            <SubtitleContainer>
                <Fade direction="up" delay={1000} triggerOnce >
                    <Divider />
                </Fade>
                <Fade direction="right" duration={3000} delay={1500} triggerOnce>
                    <Subtitle>
                        Highly intelligent and social, the charismatic orcas
                        embody who we are. Make waves in your industry now and
                        stand-out from the competition. Be the big whales of the
                        ocean today.
                    </Subtitle>
                </Fade>
            </SubtitleContainer>
        </Container>
    );
};

export default Intro;

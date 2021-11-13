import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
    BottomText,
    Container,
    Divider,
    Subtitle,
    SubtitleContainer,
    Title,
    TitleContainer,
    WhiteTitle,
    WhiteTitleForBusiness,
} from './styles';

const Intro = () => {
    return (
        <Container>
            <Fade direction="left" duration={2500} delay={1500} triggerOnce>
                <TitleContainer>
                    <Title>CREATING </Title> <Title>WAVES </Title>{' '}
                    <WhiteTitle>FOR</WhiteTitle>{' '}
                    <WhiteTitle>BUSINESSES</WhiteTitle>
                </TitleContainer>
            </Fade>
            <Fade direction="right" duration={2500}  triggerOnce>
                <WhiteTitleForBusiness> BUSINESSES</WhiteTitleForBusiness>
            </Fade>
            <SubtitleContainer>
                <Fade direction="up" delay={1000} triggerOnce>
                    <Divider />
                </Fade>
                <Fade
                    direction="right"
                    duration={2000}
                    delay={1500}
                    triggerOnce
                >
                    <Subtitle>
                        Highly intelligent and social, the charismatic orcas
                        embody who we are. Make waves in your industry now and
                        stand-out from the competition. <br/><br/>Be the big whales of the
                        ocean today.
                    </Subtitle>
                </Fade>
            </SubtitleContainer>
            <BottomText>Find out more. </BottomText>
        </Container>
    );
};

export default Intro;

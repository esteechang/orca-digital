import React, { useState } from 'react';
import {
    Container,
    ContentContainer,
    Subtitle,
    Title,
    Button,
    SmallText,
} from './styles';
import { DividerContainer, ThickLine, ThinLine } from '../Intro/styles';
import { Fade } from 'react-awesome-reveal';
import ContactModal from '../../ContactModal';

const Vision = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <Container>
            <ContentContainer>
                <Fade direction="left" delay={1000} duration={1500} triggerOnce>
                    <Title>VISION</Title>
                </Fade>
                <Fade direction="down" duration={1500} triggerOnce>
                    <DividerContainer style={{ marginTop: 8 }}>
                        <ThinLine style={{ height: 210 }} />
                        <ThickLine style={{ marginTop: -90, height: 250 }} />
                        <ThinLine />
                    </DividerContainer>
                </Fade>
                <Fade
                    direction="right"
                    delay={1500}
                    duration={2000}
                    triggerOnce
                >
                    <Subtitle>
                        The apex predators of the ocean, we want to ensure our
                        clients are at the top of their game with the Orca
                        family pod.
                    </Subtitle>
                </Fade>
            </ContentContainer>
            <Fade duration={2000} delay={2500} triggerOnce>
                <Button onClick={openModal}>Contact us</Button>
            </Fade>

            <Fade direction="left" duration={2000} delay={4000} triggerOnce>
                <SmallText>to find out even more. </SmallText>
            </Fade>

            <ContactModal showModal={showModal} setShowModal={setShowModal} />
        </Container>
    );
};

export default Vision;

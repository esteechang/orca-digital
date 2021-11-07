import React, { useState } from 'react';
import {
    Container,
    ContentContainer,
    Subtitle,
    Title,
    Button,
    SmallText,
    ThickLine,
    ThinLine,
} from './styles';

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
                    <ThinLine />
                    <ThickLine />
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

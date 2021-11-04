import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ContactModal from '../../ContactModal';

import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';

import {
    Button,
    Container,
    Subtitle,
    Title,
    BottomText,
    IconsContainer,
    SocialIconLink,
} from './styles';

const PhoneVision = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <Container>
            <Fade direction="left" duration={1000} triggerOnce>
                <Title>VISION</Title>
            </Fade>
            <Fade direction="right" duration={2000} triggerOnce>
                <Subtitle>
                    The apex predators of the ocean, we want to ensure our
                    clients are at the top of their game with the Orca family
                    pod.
                </Subtitle>
            </Fade>

            <Fade duration={2000} delay={2000} triggerOnce>
                <Button onClick={openModal}>CONTACT US</Button>
                <BottomText>to find out even more.</BottomText>
            </Fade>

            <Fade duration={2000} delay={3000} triggerOnce>
                <IconsContainer>
                    <SocialIconLink href="mailto:orcadigitalsg@orcadigital.online">
                        <BsEnvelope />
                    </SocialIconLink>
                    <SocialIconLink
                        href="//www.instagram.com/orcadigitalsg"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink
                        href="https://www.facebook.com/Orca-Digital-100552852435775/"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink
                        href="//www.linkedin.com/company/orca-digital-sg/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink
                        href="https://linktr.ee/orcadigital48"
                        target="_blank"
                        aria-label="LinkedTree"
                    >
                        <SiLinktree />
                    </SocialIconLink>
                </IconsContainer>
            </Fade>
            <ContactModal showModal={showModal} setShowModal={setShowModal} />
        </Container>
    );
};

export default PhoneVision;

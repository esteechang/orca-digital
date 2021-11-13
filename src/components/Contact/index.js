import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';

import {
    Container,
    TitleContainer,
    Title,
    WhiteTitle,
    Button,
    Subtitle,
    IconsContainer,
    SocialIconLink,
    SmallText,
    WhiteTitleForPhone,
    DividerPhone,
    SubtitleContainer,
    SubtitlePhone,
} from './styles';
import ContactModal from '../ContactModal';

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <Container id="contact">
            <SmallText>So now,</SmallText>
            <TitleContainer>
                <WhiteTitle>LETS</WhiteTitle>
                <WhiteTitle>CREATE</WhiteTitle>
                <WhiteTitleForPhone>LETS CREATE</WhiteTitleForPhone>
                <Title>WAVES.</Title>
                <Fade  duration={2000} triggerOnce>
                    <Title>TOGETHER.</Title>
                </Fade>
                <DividerPhone />
            </TitleContainer>

            <SubtitleContainer>
                {/* <Fade direction="up" delay={1000} triggerOnce> */}
                {/* </Fade> */}
                <Fade
                    direction="right"
                    duration={2000}
                    delay={1500}
                    triggerOnce
                >
                    {/* <Divider /> */}
                    <SubtitlePhone>
                        Interested in connecting with us? <br /> Reach out today
                        and we'll discuss your vision for your business. <br />
                        <br />
                        Hit us up and coffee's on us!
                    </SubtitlePhone>
                </Fade>
            </SubtitleContainer>

            <Fade duration={2000} delay={2000} triggerOnce>
                <Button onClick={openModal}>CONTACT US</Button>
            </Fade>

            <Fade
                direction="right"
                delay={2000}
                duration={2000}
                style={{ marginTop: 60 }}
                triggerOnce
            >
                <Subtitle>
                    Interested in connecting with us? <br /> Reach out today and
                    we'll discuss your vision for your business. Hit us up and
                    coffee's on us!
                </Subtitle>
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

export default ContactPage;

import React, { useCallback, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import {
    Container,
    ModalText,
    ModalWrapper,
    CloseModalButton,
    ModalInnerWrapper,
    Button,
    SocialContainer,
    SocialIconLink,
    SocialIcons,
    StalkUs,
} from './styles';

const ContactModal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <Container onClick={closeModal} ref={modalRef}>
            {showModal ? (
                <ModalWrapper showModal={showModal}>
                    <Fade
                        duration={1000}
                        style={{ display: 'flex', margin: 'auto auto' }}
                    >
                        <ModalInnerWrapper>
                            <Fade direction="up" cascade duration={2000}>
                                <ModalText>Lets skip the many boxes.</ModalText>
                                <a
                                    href="mailto:orcadigitalsg@orcadigital.online"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button>
                                        orcadigitalsg@orcadigital.online
                                    </Button>
                                </a>
                                <SocialContainer>
                                    <StalkUs> stalk us here.</StalkUs>
                                    <SocialIcons>
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
                                    </SocialIcons>
                                </SocialContainer>
                            </Fade>
                        </ModalInnerWrapper>
                    </Fade>
                    <Fade
                        direction="up"
                        duration={2000}
                        delay={1000}
                        style={{
                            alignSelf: 'flex-start',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <CloseModalButton
                            aria-label="Close modal"
                            onClick={() => setShowModal((prev) => !prev)}
                        />
                    </Fade>
                </ModalWrapper>
            ) : null}
        </Container>
    );
};

export default ContactModal;

import React, { useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar/';
import { Button } from '../Button/ButtonElement';

import {
    Container,
    MainContent,
    Title,
    WhiteTitle,
    Subtitle,
    BtnContainer,
    Divider,
    SubtitleContainer,
    TitleContainer,
} from './styles';

import { Fade } from 'react-awesome-reveal';
import ContactModal from '../ContactModal';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Container>
                <>
                    <div>
                        <Sidebar isOpen={isOpen} toggle={toggle} />
                        <Navbar toggle={toggle} />
                    </div>
                    <MainContent>
                        <Fade direction={'left'} duration={2000} triggerOnce>
                            <TitleContainer>
                                <Title>MARKETING MADE </Title>{' '}
                                <WhiteTitle> EASY.</WhiteTitle>
                            </TitleContainer>
                        </Fade>
                        <Fade
                            direction={'right'}
                            duration={2000}
                            delay={1000}
                            triggerOnce
                            style={{
                                marginLeft: 'auto',
                            }}
                        >
                            <SubtitleContainer>
                                <Divider />
                                <Subtitle>
                                    Hunting in a competitive market can mean
                                    lots of man hours. We have prepared for just
                                    this mission. At ORCA digital, we strive to
                                    offer developed strategies to aid you in
                                    your journey to success.
                                </Subtitle>
                            </SubtitleContainer>
                        </Fade>
                        <Fade
                            duration={2000}
                            delay={3000}
                            style={{
                                marginLeft: 'auto',
                            }}
                            triggerOnce
                        >
                            <BtnContainer>
                                <Button
                                    primary="true"
                                    dark="true"
                                    onClick={openModal}
                                >
                                    Get started
                                </Button>
                            </BtnContainer>
                        </Fade>
                        <ContactModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    </MainContent>
                </>
            </Container>
        </>
    );
};

export default Main;

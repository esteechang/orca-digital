import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar/';
import { Button } from '../Button/ButtonElement';
import LoadingScreen from '../LoadingScreen';

import {
    Container,
    BgImageContainer,
    ImageBg,
    MainContent,
    Title,
    WhiteTitle,
    Subtitle,
    BtnContainer,
    Divider,
    SubtitleContainer,
    TitleContainer,
} from './styles';

import MainImageV2 from '../../assets/images/MainscreenV2.jpeg';
import Intro from '../Intro';
import { Fade } from 'react-awesome-reveal';

const Main = () => {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* <BgImageContainer>
                <ImageBg src={MainImageV2} />
            </BgImageContainer> */}
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
                                <Button primary dark>
                                    Get started
                                </Button>
                            </BtnContainer>
                        </Fade>
                    </MainContent>
                </>
                {/* {loading ? (
                    <div style={{ backgroundColor: 'black' }}>
                        <LoadingScreen />
                    </div>
                ) : (
                    <>
                        <div>
                            <Sidebar isOpen={isOpen} toggle={toggle} />
                            <Navbar toggle={toggle} />
                        </div>
                        <MainContent>
                            <TitleContainer>
                                <Title>MARKETING MADE </Title>{' '}
                                <WhiteTitle> EASY.</WhiteTitle>
                            </TitleContainer>
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

                            <BtnContainer>
                                <Button primary dark>
                                    Get started
                                </Button>
                            </BtnContainer>
                        </MainContent>
                        
                    </>
                )} */}
            </Container>
        </>
    );
};

export default Main;

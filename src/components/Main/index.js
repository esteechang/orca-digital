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
} from './styles';

import MainImageV2 from '../../assets/images/MainscreenV2.jpeg';

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
            <BgImageContainer>
                <ImageBg src={MainImageV2} />
            </BgImageContainer>
            <Container>
                {loading ? (
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
                            <Title>
                                MARKETING MADE <WhiteTitle> EASY.</WhiteTitle>
                            </Title>
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
                                    {' '}
                                    Get started{' '}
                                </Button>
                            </BtnContainer>
                        </MainContent>
                    </>
                )}
            </Container>
        </>
    );
};

export default Main;

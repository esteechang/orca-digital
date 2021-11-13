import React, { useState } from 'react';
import SpinningCircle from '../SpinningCircle';
import {
    Container,
    Title,
    SubtitleContainer,
    Subtitle,
    Button,
    MoreServicesContainer,
    TitlePhone,
} from './styles';
import { Fade } from 'react-awesome-reveal';
import MoreServices from '../MoreServices';

const Services = () => {
    const [showMoreServices, setShowMoreServices] = useState(false);

    const onServicesButtonClick = () => {
        setShowMoreServices(!showMoreServices);
    };

    return (
        <>
            <Container id="services">
                <Fade
                    direction="left"
                    duration={2000}
                    delay={1500}
                    triggerOnce
                    style={{ marginTop: 60, marginBottom: 40 }}
                >
                    <Title>OUR SERVICES</Title>
                    <TitlePhone>SERVICES</TitlePhone>
                </Fade>
                <Fade duration={2000} delay={2000} triggerOnce cascade>
                    <SpinningCircle />
                    <SubtitleContainer>
                        <Subtitle>Branding</Subtitle>
                        <Subtitle>Digital Marketing</Subtitle>
                        <Subtitle>Ideation</Subtitle>
                    </SubtitleContainer>
                </Fade>

                <Fade duration={2000} delay={3000} triggerOnce>
                    <Button onClick={onServicesButtonClick}>
                        More Services
                    </Button>
                </Fade>
            </Container>

            {showMoreServices ? (
                <MoreServicesContainer>
                    <MoreServices />
                </MoreServicesContainer>
            ) : (
                ''
            )}
        </>
    );
};

export default Services;

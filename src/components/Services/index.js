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
import { HashLink } from 'react-router-hash-link';

const Services = () => {
    const [showMoreServices, setShowMoreServices] = useState(false);

    const onServicesButtonClick = () => {
        setShowMoreServices(!showMoreServices);
    };
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
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
                        <Subtitle>Web Development</Subtitle>
                    </SubtitleContainer>
                </Fade>

                <Fade duration={2000} delay={3000} triggerOnce>
                    <HashLink
                        to="/#more-services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        style={{ textDecoration: 'none' }}
                        scroll={(el) => scrollWithOffset(el)}
                    >
                        <Button onClick={onServicesButtonClick}>
                            More Services
                        </Button>
                    </HashLink>
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

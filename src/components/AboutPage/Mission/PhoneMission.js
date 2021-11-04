import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
    Container,
    Title,
    SubtextContainer,
    TextContainer,
    Text,
} from './styles';
import './styles.css';

const PhoneMission = () => {
    return (
        <Container>
            <Title>MISSION</Title>
            <Fade direction="right" duration={2000} triggerOnce>
                <SubtextContainer>
                    <ul class="progress-bar">
                        <li></li>
                        <li></li>
                        <li class="stop"></li>
                    </ul>

                    <TextContainer>
                        <Fade duration={2000} delay={1500} triggerOnce cascade>
                            <Text>
                                Redefining brands in a digital arena, we aim to
                                use creative strategy, analytics and activation
                                to connect and interact
                            </Text>
                            <Text style={{ marginTop: 75 }}>
                                To redefine the Asian digital arena.
                            </Text>
                            <Text style={{ marginTop: 90 }}>
                                Hyper accelerating the growth of our clients
                                through the use of Innovative and Creative
                                strategies to secure the hunt.
                            </Text>
                        </Fade>
                    </TextContainer>
                </SubtextContainer>
            </Fade>
        </Container>
    );
};

export default PhoneMission;

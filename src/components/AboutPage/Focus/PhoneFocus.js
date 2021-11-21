import React from 'react';
import { Fade } from 'react-awesome-reveal';
import icons from '../../../icons';
import {
    Container,
    Title,
    TitleContainer,
    SubtextContainer,
    IconsContainer,
    IconsRow,
    ElementContainer,
    Icon,
    Subtitle,
} from './PhoneStyles';
import './styles.css';

const PhoneFocus = () => {
    return (
        <Container>
            <Title style={{ marginRight: 80, marginTop: -100 }}>FOCUS</Title>
            <TitleContainer>
                <Title style={{ color: '#fff', marginRight: 20 }}>+</Title>
                <Title>VALUES</Title>
            </TitleContainer>

            <Fade>
                <SubtextContainer>
                    <IconsContainer>
                        <Fade duration={3000} delay={1500} triggerOnce>
                            <IconsRow>
                                <ElementContainer>
                                    <Icon src={icons[15]} />
                                    <Subtitle>Creative Firepower</Subtitle>
                                </ElementContainer>
                                <ElementContainer>
                                    <Icon src={icons[16]} />
                                    <Subtitle>Making Waves</Subtitle>
                                </ElementContainer>
                            </IconsRow>
                            <IconsRow>
                                <ElementContainer>
                                    <Icon src={icons[14]} />
                                    <Subtitle>Reliability</Subtitle>
                                </ElementContainer>
                                <ElementContainer>
                                    <Icon src={icons[19]} />
                                    <Subtitle>Unforgettable</Subtitle>
                                    <Subtitle style={{ marginTop: 0 }}>
                                        branding
                                    </Subtitle>
                                </ElementContainer>
                            </IconsRow>
                            <IconsRow>
                                <ElementContainer>
                                    <Icon src={icons[18]} />
                                    <Subtitle>Insights</Subtitle>
                                </ElementContainer>
                                <ElementContainer>
                                    <Icon src={icons[17]} />
                                    <Subtitle>Data driven</Subtitle>
                                    <Subtitle style={{ marginTop: 0 }}>
                                        execution
                                    </Subtitle>
                                </ElementContainer>
                            </IconsRow>
                        </Fade>
                    </IconsContainer>
                    <ul class="progress-bar-longer">
                        <Fade>
                            <li></li>
                            <li></li>
                            <li class="stop"></li>
                        </Fade>
                    </ul>
                </SubtextContainer>
            </Fade>
        </Container>
    );
};

export default PhoneFocus;

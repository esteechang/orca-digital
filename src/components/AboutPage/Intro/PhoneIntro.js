import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
    Container,
    Title,
    HorizontalDivider,
    Subtitle,
    BottomText,
} from './PhoneStyles';

const PhoneIntro = () => {
    return (
        <Container>
            <Title>ABOUT US</Title>
            <HorizontalDivider />
            <Fade
                duration={2000}
                delay={1000}
                triggerOnce
                // style={{ width: '100%', marginLeft: 150 }}
            >
                <Subtitle>
                    ORCA Digital was conceived when a group of Singaporean sons
                    came together and decided to create a unit to call their
                    own. Driven and skilled, the founding team found their
                    specific sets of skills could make a business soar.
                    <br />
                    <br />
                    At ORCA Digital, our in-house team expects to be the leading
                    marketing partner of SMEs to help you soar too.
                </Subtitle>
            </Fade>
            <Fade direction="up" duration={2000}>
                <BottomText>Keep scrolling.</BottomText>
            </Fade>
        </Container>
    );
};

export default PhoneIntro;

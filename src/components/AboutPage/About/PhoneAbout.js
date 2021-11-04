import React, { useState } from 'react';
import {
    Container,
    Title,
    LargerTitle,
    FoundersContainer,
    NameContainer,
    Name,
    Role,
    Arrow,
    BottomText,
} from './styles';
import founders from '../founders';
import FounderModal from './FounderModal';
import { Fade } from 'react-awesome-reveal';

const PhoneAbout = () => {
    const [showJJModal, setShowJJModal] = useState(false);
    const [showDModal, setShowDModal] = useState(false);
    const [showSModal, setShowSModal] = useState(false);
    const [showJHModal, setShowJHModal] = useState(false);
    const [showRHModal, setShowRHModal] = useState(false);

    const openJJModal = () => {
        setShowJJModal((prev) => !prev);
    };
    const openDModal = () => {
        setShowDModal((prev) => !prev);
    };
    const openSModal = () => {
        setShowSModal((prev) => !prev);
    };
    const openJHModal = () => {
        setShowJHModal((prev) => !prev);
    };
    const openRHModal = () => {
        setShowRHModal((prev) => !prev);
    };

    return (
        <Container id="us">
            <Title>THE</Title>
            <LargerTitle>ORCA POD</LargerTitle>

            <FoundersContainer onClick={openJJModal}>
                <Fade duration={1500} delay={1000} triggerOnce>
                    <NameContainer>
                        <Name>{founders[0].name} </Name>
                        <Role>{founders[0].designation} </Role>
                    </NameContainer>
                    <Arrow img src={founders[0].arrow} />
                </Fade>
            </FoundersContainer>
            <FoundersContainer onClick={openDModal}>
                <Fade duration={1500} delay={1500} triggerOnce>
                    <NameContainer>
                        <Name>{founders[1].name} </Name>
                        <Role>{founders[1].designation} </Role>
                    </NameContainer>
                    <Arrow img src={founders[1].arrow} />
                </Fade>
            </FoundersContainer>
            <FoundersContainer onClick={openSModal}>
                <Fade duration={1500} delay={2000} triggerOnce>
                    <NameContainer>
                        <Name>{founders[2].name} </Name>
                        <Role>{founders[2].designation} </Role>
                    </NameContainer>
                    <Arrow img src={founders[2].arrow} />
                </Fade>
            </FoundersContainer>
            <FoundersContainer onClick={openJHModal}>
                <Fade duration={1500} delay={2500} triggerOnce>
                    <NameContainer>
                        <Name>{founders[3].name} </Name>
                        <Role>{founders[3].designation} </Role>
                    </NameContainer>
                    <Arrow img src={founders[3].arrow} />
                </Fade>
            </FoundersContainer>
            <FoundersContainer onClick={openRHModal}>
                <NameContainer>
                    <Fade duration={1500} delay={3000} triggerOnce>
                        <Name>{founders[4].name} </Name>
                        <Role>{founders[4].designation} </Role>
                    </Fade>
                </NameContainer>
                <Fade duration={1500} delay={3000} triggerOnce>
                    <Arrow img src={founders[4].arrow} />
                </Fade>
            </FoundersContainer>
            <Fade direction="up" duration={1000} delay={4000}>
                <BottomText>Find out what keeps us going.</BottomText>
            </Fade>

            <FounderModal
                showJJModal={showJJModal}
                setShowJJModal={setShowJJModal}
                showDModal={showDModal}
                setShowDModal={setShowDModal}
                showSModal={showSModal}
                setShowSModal={setShowSModal}
                showJHModal={showJHModal}
                setShowJHModal={setShowJHModal}
                showRHModal={showRHModal}
                setShowRHModal={setShowRHModal}
            />
        </Container>
    );
};

export default PhoneAbout;

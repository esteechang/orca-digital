import React, { useCallback, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import founders from '../founders';

import {
    ModalContainer,
    ModalWrapper,
    CloseModalButton,
    FounderImage,
    Name,
    Role,
    DescriptionContainer,
    Description,
    InterestImg,
    InterestDescription,
    QuoteOpening,
    QuoteClosing,
    SocialContainer,
    SocialImg,
    OtherFoundersContainer,
    OwnFounder,
    OtherFounder,
    OtherFoundersContainerBottom,
} from './modalStyles';

const FounderModal = ({
    showJJModal,
    setShowJJModal,
    showDModal,
    setShowDModal,
    showSModal,
    setShowSModal,
    showJHModal,
    setShowJHModal,
    showRHModal,
    setShowRHModal,
}) => {
    const closeJJModal = (e) => {
        setShowJJModal(false);
    };
    const closeDModal = (e) => {
        setShowDModal(false);
    };
    const closeSModal = (e) => {
        setShowSModal(false);
    };
    const closeJHModal = (e) => {
        setShowJHModal(false);
    };
    const closeRHModal = (e) => {
        setShowRHModal(false);
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showJJModal) {
                setShowJJModal(false);
                // <HashLink to="us" />
            }
            if (e.key === 'Escape' && showDModal) {
                setShowDModal(false);
            }
            if (e.key === 'Escape' && showSModal) {
                setShowSModal(false);
            }
            if (e.key === 'Escape' && showJHModal) {
                setShowJHModal(false);
            }
            if (e.key === 'Escape' && showRHModal) {
                setShowRHModal(false);
            }
        },
        [
            setShowDModal,
            setShowJHModal,
            setShowJJModal,
            setShowRHModal,
            setShowSModal,
            showDModal,
            showJHModal,
            showJJModal,
            showRHModal,
            showSModal,
        ]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            <ModalContainer>
                {showJJModal ? (
                    <>
                        <ModalWrapper showModal={showJJModal}>
                            <CloseModalButton onClick={closeJJModal} />
                            <div>
                                <FounderImage src={founders[0].picture} />
                                <Name>{founders[0].name}</Name>
                                <Role>{founders[0].designation}</Role>
                                <DescriptionContainer>
                                    <Fade duration={2000}>
                                        <Description>
                                            {founders[0].description}
                                        </Description>
                                    </Fade>

                                    <Fade duration={1500} delay={1000}>
                                        <InterestImg
                                            src={founders[0].interest}
                                        />
                                        <InterestDescription
                                            style={{ fontSize: 10 }}
                                        >
                                            <QuoteOpening /> NICO ROSBERG
                                        </InterestDescription>
                                        <InterestDescription
                                            style={{ fontSize: 10 }}
                                        >
                                            FOR THE WIN.
                                            <QuoteClosing />
                                        </InterestDescription>
                                    </Fade>
                                </DescriptionContainer>
                                <Fade delay={1500}>
                                    <SocialContainer>
                                        <a href="mailto:leowjianjie@orcadigital.online">
                                            <SocialImg
                                                src={founders[0].email}
                                            />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/leowjianjie"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <SocialImg
                                                src={founders[0].linkedIn}
                                            />
                                        </a>
                                        <SocialImg src={founders[0].linkTree} />
                                    </SocialContainer>
                                </Fade>
                                <Fade direction="up" delay={2000}>
                                    <OtherFoundersContainer>
                                        <OwnFounder>
                                            {founders[0].name}
                                        </OwnFounder>
                                        <OtherFounder
                                            onClick={() => {
                                                setShowDModal(true);
                                                closeJJModal();
                                            }}
                                        >
                                            {founders[1].name}
                                        </OtherFounder>
                                        <OtherFounder
                                            onClick={() => {
                                                setShowSModal(true);
                                                closeJJModal();
                                            }}
                                        >
                                            {founders[2].name}
                                        </OtherFounder>
                                    </OtherFoundersContainer>
                                    <OtherFoundersContainerBottom>
                                        <OtherFounder
                                            onClick={() => {
                                                setShowJHModal(true);
                                                closeJJModal();
                                            }}
                                        >
                                            {founders[3].name}
                                        </OtherFounder>
                                        <OtherFounder
                                            onClick={() => {
                                                setShowRHModal(true);
                                                closeJJModal();
                                            }}
                                        >
                                            {founders[4].name}
                                        </OtherFounder>
                                    </OtherFoundersContainerBottom>
                                </Fade>
                            </div>
                        </ModalWrapper>
                    </>
                ) : null}

                {showDModal ? (
                    <ModalWrapper showModal={showDModal}>
                        <CloseModalButton onClick={closeDModal} />
                        <div>
                            <FounderImage src={founders[1].picture} />
                            <Name>{founders[1].name}</Name>
                            <Role>{founders[1].designation}</Role>
                            <DescriptionContainer
                                style={{
                                    borderTop: '2px solid hotpink',
                                    borderBottom: '1px solid hotpink',
                                }}
                            >
                                <Fade duration={2000}>
                                    <Description>
                                        {founders[1].description}
                                    </Description>
                                </Fade>
                                <Fade duration={1500} delay={1000}>
                                    <InterestImg
                                        src={founders[1].interest}
                                        style={{
                                            height: 90,
                                            width: 60,
                                            marginTop: 0,
                                            marginLeft: 120,
                                        }}
                                    />
                                    <InterestDescription
                                        style={{ fontSize: 10 }}
                                    >
                                        <QuoteOpening /> MAMBA
                                    </InterestDescription>
                                    <InterestDescription
                                        style={{ fontSize: 10 }}
                                    >
                                        MENTALITY.
                                    </InterestDescription>
                                    <InterestDescription
                                        style={{ fontSize: 10 }}
                                    >
                                        KOBE FOREVER.
                                        <QuoteClosing />
                                    </InterestDescription>
                                </Fade>
                            </DescriptionContainer>
                            <Fade delay={1500}>
                                <SocialContainer>
                                    <a href="mailto:deonquek@orcadigital.online">
                                        <SocialImg src={founders[1].email} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/deon-quek-3b34991b6"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[1].linkedIn} />
                                    </a>
                                    <SocialImg src={founders[1].linkTree} />
                                </SocialContainer>
                            </Fade>
                            <Fade direction="up" delay={2000}>
                                <OtherFoundersContainer>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJJModal(true);
                                            closeDModal();
                                        }}
                                    >
                                        {founders[0].name}
                                    </OtherFounder>
                                    <OwnFounder>{founders[1].name}</OwnFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowSModal(true);
                                            closeDModal();
                                        }}
                                    >
                                        {founders[2].name}
                                    </OtherFounder>
                                </OtherFoundersContainer>
                                <OtherFoundersContainerBottom>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJHModal(true);
                                            closeDModal();
                                        }}
                                    >
                                        {founders[3].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowRHModal(true);
                                            closeDModal();
                                        }}
                                    >
                                        {founders[4].name}
                                    </OtherFounder>
                                </OtherFoundersContainerBottom>
                            </Fade>
                        </div>
                    </ModalWrapper>
                ) : null}

                {showSModal ? (
                    <ModalWrapper showModal={showSModal}>
                        <CloseModalButton onClick={closeSModal} />
                        <div>
                            <FounderImage src={founders[2].picture} />
                            <Name>{founders[2].name}</Name>
                            <Role>{founders[2].designation}</Role>
                            <DescriptionContainer
                                style={{
                                    borderTop: '2px solid blue',
                                    borderBottom: '1px solid blue',
                                }}
                            >
                                <Fade duration={2000}>
                                    <Description>
                                        {founders[2].description}
                                    </Description>
                                </Fade>
                                <Fade duration={1500} delay={1000}>
                                    <InterestImg
                                        src={founders[2].interest}
                                        style={{
                                            width: 130,
                                            marginTop: 10,
                                            marginLeft: 80,
                                        }}
                                    />
                                    <InterestDescription
                                        style={{ fontSize: 10 }}
                                    >
                                        <QuoteOpening /> HARDWORK AND
                                    </InterestDescription>

                                    <InterestDescription
                                        style={{ fontSize: 10 }}
                                    >
                                        DEDICATION.
                                        <QuoteClosing />
                                    </InterestDescription>
                                </Fade>
                            </DescriptionContainer>
                            <Fade delay={1500}>
                                <SocialContainer>
                                    <a href="mailto:shanontang@orcadigital.online">
                                        <SocialImg src={founders[2].email} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/shanontang/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[2].linkedIn} />
                                    </a>
                                    <a
                                        href="https://linktr.ee/shanontang"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[2].linkTree} />
                                    </a>
                                </SocialContainer>
                            </Fade>
                            <Fade direction="up" delay={2000}>
                                <OtherFoundersContainer>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJJModal(true);
                                            closeSModal();
                                        }}
                                    >
                                        {founders[0].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowDModal(true);
                                            closeSModal();
                                        }}
                                    >
                                        {founders[1].name}
                                    </OtherFounder>
                                    <OwnFounder>{founders[2].name}</OwnFounder>
                                </OtherFoundersContainer>
                                <OtherFoundersContainerBottom>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJHModal(true);
                                            closeSModal();
                                        }}
                                    >
                                        {founders[3].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowRHModal(true);
                                            closeSModal();
                                        }}
                                    >
                                        {founders[4].name}
                                    </OtherFounder>
                                </OtherFoundersContainerBottom>
                            </Fade>
                        </div>
                    </ModalWrapper>
                ) : null}

                {showRHModal ? (
                    <ModalWrapper showModal={showRHModal}>
                        <CloseModalButton onClick={closeRHModal} />
                        <div>
                            <FounderImage src={founders[4].picture} />
                            <Name>{founders[4].name}</Name>
                            <Role>{founders[4].designation}</Role>
                            <DescriptionContainer
                                style={{
                                    borderTop: '2px solid darkgreen',
                                    borderBottom: '1px solid darkgreen',
                                }}
                            >
                                <Fade duration={2000}>
                                    <Description>
                                        {founders[4].description}
                                    </Description>
                                </Fade>
                                <Fade duration={1500} delay={1000}>
                                    <InterestImg
                                        src={founders[4].interest}
                                        style={{
                                            width: 130,
                                        }}
                                    />
                                    <InterestDescription
                                        style={{ marginLeft: 25, fontSize: 10 }}
                                    >
                                        <QuoteOpening /> MANLY TOYS{' '}
                                        <QuoteClosing />
                                    </InterestDescription>
                                </Fade>
                            </DescriptionContainer>
                            <Fade delay={1500}>
                                <SocialContainer>
                                    <a href="mailto:tohrenhe@orcadigital.online">
                                        <SocialImg src={founders[4].email} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/javier-toh-812720224"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[4].linkedIn} />
                                    </a>
                                    <a
                                        href="https://linktr.ee/tohrenhe"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[4].linkTree} />
                                    </a>
                                </SocialContainer>
                            </Fade>
                            <Fade direction="up" delay={2000}>
                                <OtherFoundersContainer>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJJModal(true);
                                            closeRHModal();
                                        }}
                                    >
                                        {founders[0].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowDModal(true);
                                            closeRHModal();
                                        }}
                                    >
                                        {founders[1].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowSModal(true);
                                            closeRHModal();
                                        }}
                                    >
                                        {founders[2].name}
                                    </OtherFounder>
                                </OtherFoundersContainer>
                                <OtherFoundersContainerBottom>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJHModal(true);
                                            closeRHModal();
                                        }}
                                    >
                                        {founders[3].name}
                                    </OtherFounder>
                                    <OwnFounder>{founders[4].name}</OwnFounder>
                                </OtherFoundersContainerBottom>
                            </Fade>
                        </div>
                    </ModalWrapper>
                ) : null}

                {showJHModal ? (
                    <ModalWrapper showModal={showJHModal}>
                        <CloseModalButton onClick={closeJHModal} />
                        <div>
                            <FounderImage src={founders[3].picture} />
                            <Name>{founders[3].name}</Name>
                            <Role>{founders[3].designation}</Role>
                            <DescriptionContainer
                                style={{
                                    borderTop: '2px solid maroon',
                                    borderBottom: '1px solid maroon',
                                }}
                            >
                                <Fade duration={2000}>
                                    <Description>
                                        {founders[3].description}
                                    </Description>
                                </Fade>
                                <Fade duration={1500} delay={1000}>
                                    <InterestImg
                                        src={founders[3].interest}
                                        style={{
                                            width: 80,
                                            marginTop: 10,
                                            marginLeft: 110,
                                        }}
                                    />
                                    <InterestDescription
                                        style={{ marginLeft: 15, fontSize: 10 }}
                                    >
                                        <QuoteOpening /> KNOCK KNOCK{' '}
                                        <QuoteClosing />
                                    </InterestDescription>
                                </Fade>
                            </DescriptionContainer>

                            <Fade delay={1500}>
                                <SocialContainer>
                                    <a href="mailto:jinhong@orcadigital.online">
                                        <SocialImg src={founders[3].email} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/jin-hong-phang-1b412121b/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[3].linkedIn} />
                                    </a>
                                    <a
                                        href="https://linktr.ee/phangjinhong"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <SocialImg src={founders[3].linkTree} />
                                    </a>
                                </SocialContainer>
                            </Fade>

                            <Fade direction="up" delay={2000}>
                                <OtherFoundersContainer
                                    style={{ marginTop: 30 }}
                                >
                                    <OtherFounder
                                        onClick={() => {
                                            setShowJJModal(true);
                                            closeJHModal();
                                        }}
                                    >
                                        {founders[0].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowDModal(true);
                                            closeJHModal();
                                        }}
                                    >
                                        {founders[1].name}
                                    </OtherFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowSModal(true);
                                            closeJHModal();
                                        }}
                                    >
                                        {founders[2].name}
                                    </OtherFounder>
                                </OtherFoundersContainer>
                                <OtherFoundersContainerBottom>
                                    <OwnFounder>{founders[3].name}</OwnFounder>
                                    <OtherFounder
                                        onClick={() => {
                                            setShowRHModal(true);
                                            closeJHModal();
                                        }}
                                    >
                                        {founders[4].name}
                                    </OtherFounder>
                                </OtherFoundersContainerBottom>
                            </Fade>
                        </div>
                    </ModalWrapper>
                ) : null}
            </ModalContainer>
        </>
    );
};

export default FounderModal;

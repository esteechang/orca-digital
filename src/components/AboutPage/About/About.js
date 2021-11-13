import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
    Container,
    DeonInterest,
    Description,
    DescriptionContainer,
    Founder,
    FounderImg,
    FounderName,
    FounderRole,
    FoundersContainer,
    InterestDescription,
    InterestImg,
    JinhongInterest,
    LinkedInIcon,
    QuoteClosing,
    QuoteOpening,
    ShanonInterest,
    SocialContainer,
    SocialImg,
    Title,
} from './styles';

import founders from '../founders';

const About = () => {
    return (
        <Container>
            <Fade duration={1500} triggerOnce>
                <Title>THE ORCA POD</Title>
            </Fade>
            <Fade delay={1000} duration={2000} triggerOnce>
                <FoundersContainer>
                    {/* JJ */}
                    <Founder style={{ marginTop: 30, marginLeft: 60 }}>
                        <FounderImg src={founders[0].picture} />
                        <FounderName>{founders[0].name}</FounderName>
                        <FounderRole>{founders[0].designation}</FounderRole>
                        <DescriptionContainer>
                            <Description>{founders[0].description}</Description>
                            <InterestImg src={founders[0].interest} />
                            <InterestDescription>
                                <QuoteOpening /> 
                                NICO ROSBERG <br /> FOR THE WIN.{' '}
                                <QuoteClosing />
                            </InterestDescription>
                        </DescriptionContainer>
                        <SocialContainer>
                            <a href="mailto:leowjianjie@orcadigital.online">
                                <SocialImg src={founders[0].email} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/leowjianjie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon src={founders[0].linkedIn} />
                            </a>
                            <SocialImg
                                src={founders[0].linkTree}
                                style={{ marginBottom: 5, marginLeft: -5 }}
                            />
                        </SocialContainer>
                    </Founder>

                    {/* DEON */}
                    <Founder>
                        <FounderImg src={founders[1].picture} />
                        <FounderName>{founders[1].name}</FounderName>
                        <FounderRole>{founders[1].designation}</FounderRole>
                        <DescriptionContainer
                            style={{
                                borderTop: '2px solid hotpink',
                                borderBottom: '1px solid hotpink',
                            }}
                        >
                            <Description>{founders[1].description}</Description>
                            <DeonInterest src={founders[1].interest} />
                            <InterestDescription>
                                <QuoteOpening />
                                MAMBA <br /> MENTALITY. <br /> KOBE FOREVER.{' '}
                                <QuoteClosing />
                            </InterestDescription>
                        </DescriptionContainer>
                        <SocialContainer>
                            <a href="mailto:deonquek@orcadigital.online">
                                <SocialImg src={founders[1].email} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/deon-quek-3b34991b6"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon src={founders[1].linkedIn} />
                            </a>
                            <SocialImg
                                src={founders[1].linkTree}
                                style={{ marginBottom: 5, marginLeft: -5 }}
                            />
                        </SocialContainer>
                    </Founder>

                    {/* SHANON */}
                    <Founder style={{ marginTop: 30 }}>
                        <FounderImg src={founders[2].picture} />
                        <FounderName>{founders[2].name}</FounderName>
                        <FounderRole>{founders[2].designation}</FounderRole>
                        <DescriptionContainer
                            style={{
                                borderTop: '2px solid blue',
                                borderBottom: '1px solid blue',
                            }}
                        >
                            <Description>{founders[2].description}</Description>
                            <ShanonInterest src={founders[2].interest} />
                            <InterestDescription>
                                <QuoteOpening />
                                HARDWORK AND <br /> DEDICATION. <QuoteClosing />
                            </InterestDescription>
                        </DescriptionContainer>
                        <SocialContainer>
                            <a href="mailto:shanontang@orcadigital.online">
                                <SocialImg src={founders[2].email} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shanontang/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon src={founders[2].linkedIn} />
                            </a>
                            <a
                                href="https://linktr.ee/shanontang"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SocialImg src={founders[2].linkTree} />
                            </a>
                        </SocialContainer>
                    </Founder>

                    {/* JINHONG */}
                    <Founder>
                        <FounderImg src={founders[3].picture} />
                        <FounderName>{founders[3].name}</FounderName>
                        <FounderRole>{founders[3].designation}</FounderRole>
                        <DescriptionContainer
                            style={{
                                borderTop: '2px solid maroon',
                                borderBottom: '1px solid maroon',
                                marginLeft: 10,
                            }}
                        >
                            <Description>{founders[3].description}</Description>
                            <JinhongInterest src={founders[3].interest} />
                            <InterestDescription>
                                <QuoteOpening />
                                KNOCK KNOCK
                                <QuoteClosing style={{ marginLeft: 2 }} />
                            </InterestDescription>
                        </DescriptionContainer>
                        <SocialContainer>
                            <a href="mailto:jinhong@orcadigital.online">
                                <SocialImg src={founders[3].email} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jin-hong-phang-1b412121b/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon src={founders[3].linkedIn} />
                            </a>
                            <a
                                href="https://linktr.ee/phangjinhong"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SocialImg src={founders[3].linkTree} />
                            </a>
                        </SocialContainer>
                    </Founder>

                    {/* REN HE */}
                    <Founder style={{ marginTop: 30 }}>
                        <FounderImg src={founders[4].picture} />
                        <FounderName>{founders[4].name}</FounderName>
                        <FounderRole>{founders[4].designation}</FounderRole>
                        <DescriptionContainer
                            style={{
                                borderTop: '2px solid darkgreen',
                                borderBottom: '1px solid darkgreen',
                            }}
                        >
                            <Description>{founders[4].description}</Description>
                            <InterestImg src={founders[4].interest} />
                            <InterestDescription>
                                <QuoteOpening />
                                MANLY TOYS
                                <QuoteClosing style={{ marginLeft: 1 }} />
                            </InterestDescription>
                        </DescriptionContainer>
                        <SocialContainer>
                            <a href="mailto:tohrenhe@orcadigital.online">
                                <SocialImg src={founders[4].email} />
                            </a>
                            <a
                                href="https://linkedin.com/in/javier-toh-812720224"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon src={founders[4].linkedIn} />
                            </a>
                            <a
                                href="https://linktr.ee/tohrenhe"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SocialImg src={founders[4].linkTree} />
                            </a>
                        </SocialContainer>
                    </Founder>
                </FoundersContainer>
            </Fade>
        </Container>
    );
};

export default About;

import React from 'react';

import Video from '../../assets/videos/career.mp4';
import InfluencerPic from '../../assets/images/influencer.jpeg';
import PersonalAssistant from '../../assets/images/personal-assistant.jpeg';
import Driver from '../../assets/images/driver.jpeg';
import Videographer from '../../assets/images/videographer.jpeg';
import Writer from '../../assets/images/writer.jpeg';
import AccountsManager from '../../assets/images/accounting.jpeg';

import {
    HeroBg,
    HeroContainer,
    VideoBg,
    HeroContent,
} from '../HeroSection/styles';

import {
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
    CareerBtnWrapper,
} from './careersCardStyles';

const HeroSection = () => {
    return (
        <>
            <HeroContainer id="careers"> 
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={InfluencerPic} />
                            <ServicesH2>Influencer</ServicesH2>
                            <ServicesP>
                                We are searching for a well-connected social
                                media influencer to serve as our esteemed
                                supporter. The social media influencer should
                                review all sponsorship requirements before
                                proceeding to devise highly appealing content.
                                Upon publication thereof, you should also
                                monitor viewers' feedback.
                            </ServicesP>
                            <CareerBtnWrapper>
                                <a href="mailto:orcadigital48@orcadigital.online?subject=Application%20for%20Influencer">
                                    Apply Now
                                </a>
                            </CareerBtnWrapper>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={PersonalAssistant} />
                            <ServicesH2>Personal Assistant</ServicesH2>
                            <ServicesP>
                                We are looking for a versatile and
                                highly-organized personal assistant to perform
                                personalized administrative duties for senior
                                management. In this role, you will be
                                responsible for scheduling meetings, taking
                                notes, and handling correspondence on behalf of
                                managers. You may also be required to make
                                travel arrangements and assist with other duties
                                when required. We are looking for a versatile
                                and highly-organized personal assistant to
                                perform personalized administrative duties for
                                senior management. In this role, you will be
                                responsible for scheduling meetings, taking
                                notes, and handling correspondence on behalf of
                                managers. You may also be required to make
                                travel arrangements and assist with other duties
                                when required. We are looking for a versatile
                                and highly-organized personal assistant to
                                perform personalized administrative duties for
                                senior management. In this role, you will be
                                responsible for scheduling meetings, taking
                                notes, and handling correspondence on behalf of
                                managers. You may also be required to make
                                travel arrangements and assist with other duties
                                when required.
                            </ServicesP>
                            <CareerBtnWrapper>
                                <a href="mailto:orcadigital48@orcadigital.online?subject=Application%20for%Personal Assistant">
                                    Apply Now
                                </a>
                            </CareerBtnWrapper>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Driver} />
                            <ServicesH2>Driver</ServicesH2>
                            <ServicesP>
                                We are looking for punctual candidates with good
                                time management skills for the position of
                                driver. Drivers are responsible for delivering
                                packages to clients in a timely manner, working
                                on nights and weekends and ensuring that
                                vehicles are always ready for use, among other
                                duties. Drivers will need to lift heavy objects
                                and load them into their vehicles, requiring
                                upper body strength and physical stamina.
                            </ServicesP>
                            <CareerBtnWrapper>
                                <a href="mailto:orcadigital48@orcadigital.online?subject=Application%20for%20Driver">
                                    Apply Now
                                </a>
                            </CareerBtnWrapper>
                        </ServicesCard>
                    </ServicesWrapper>
                </HeroContent>
            </HeroContainer>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={Videographer} />
                            <ServicesH2>Videographer</ServicesH2>
                            <ServicesP>
                                We are looking for an organized and creative
                                videographer to work with our creative team to
                                plan, film, and edit video content according to
                                client briefs. The videographer's
                                responsibilities include ensuring that the
                                necessary filming equipment is available for
                                use, directing other camera operators on set,
                                and editing film footage.
                            </ServicesP>
                            <CareerBtnWrapper>
                                <a href="mailto:orcadigital48@orcadigital.online?subject=Application%20for%20Videographer">
                                    Apply Now
                                </a>
                            </CareerBtnWrapper>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Writer} />
                            <ServicesH2>Writer</ServicesH2>
                            <ServicesP>
                                We are looking for a talented blogger to
                                generate engaging, original content for our
                                website. The blogger will research topics and
                                develop interesting posts that will appeal to
                                our target audience and promote the blog using
                                social media, direct email, and other methods to
                                alert and expand our readership. You should be a
                                skilled, tech-savvy writer who can create
                                appealing, insightful posts that will reach and
                                grow our audience.
                            </ServicesP>
                            <CareerBtnWrapper>
                                <a href="mailto:orcadigital48@orcadigital.online?subject=Application%20for%20Writer">
                                    Apply Now
                                </a>
                            </CareerBtnWrapper>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={AccountsManager} />
                            <ServicesH2>Accounts Manager</ServicesH2>
                            <ServicesP>
                                We are searching for communicative candidates
                                who are proactive and passionate about company
                                products and the clients they serve. Account
                                managers will act as a point of contact for
                                their clients. They also aid internal
                                departments by collecting information, such as
                                sales leads or testimonials, assisting in the
                                processing and analysis of client data and
                                complaints, and identifying industry trends.
                            </ServicesP>
                            <CareerBtnWrapper>
                                <a href="mailto:orcadigital48@orcadigital.online?subject=Application%20for%20Accounts%20Manager">
                                    Apply Now
                                </a>
                            </CareerBtnWrapper>
                        </ServicesCard>
                    </ServicesWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default HeroSection;

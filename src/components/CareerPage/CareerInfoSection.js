import React from 'react';
import InfluencerPic from '../../assets/images/influencer.jpeg';
import PersonalAssistant from '../../assets/images/personal-assistant.jpeg';
import Driver from '../../assets/images/driver-van.jpeg';
import Videographer from '../../assets/images/videographer.jpeg';
import Writer from '../../assets/images/writer.jpeg';
import AccountsManager from '../../assets/images/accounting.jpeg';

import {
    CareersTopContainer,
    CareersWrapper,
    CareersCard,
    Img,
    CareerTitle,
    CareerDescription,
    CareerBtnWrapper,
    CareersBottomContainer,
} from './CareerStyles';

const HeroSection = () => {
    return (
        <>
            <CareersTopContainer id="careers">
                {/* <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg> */}
                <CareersWrapper>
                    <CareersCard>
                        <Img src={InfluencerPic} />
                        <CareerTitle>Influencer</CareerTitle>
                        <CareerDescription>
                            Influencers are passionate and consistent with their
                            work on various social media platforms. These are
                            practices we value. Influencers are the face of
                            businesses and our goal is to accurately cast you
                            with our clients, fulfilling both the needs of our
                            clients in promoting their operations and yours in
                            promoting your hard earned social media presence.
                            Consider an organisation where your wants are heard
                            with the right production opportunities introduced
                            to you.
                        </CareerDescription>
                        <br />
                        <CareerDescription>
                            Orca Digital strives to achieve just that, speak to
                            us today to find out just how genuine and ambitious
                            we are and how you can be a part of that.
                        </CareerDescription>
                        <CareerBtnWrapper>
                            <a href="mailto:orcadigitalsg@orcadigital.online?subject=Application%20for%20Influencer">
                                Apply Now
                            </a>
                        </CareerBtnWrapper>
                    </CareersCard>
                    <CareersCard>
                        <Img src={PersonalAssistant} />
                        <CareerTitle>Personal Assistant</CareerTitle>
                        <CareerDescription>
                            Office functions are hectic with the projects Orca
                            Digital is embarking on. Our leaders and corporate
                            partners require the invaluable aid of PAs to
                            streamline our corporate processes and function as
                            efficiently as can be. Passionate and conviction are
                            values expected of our PAs to support us in
                            fulfilling our company mission and goals.
                            <br />
                            <br />
                            Get in contact with us today to find out more about
                            how you can be part of this exciting venture.
                        </CareerDescription>
                        <CareerBtnWrapper>
                            <a href="mailto:orcadigitalsg@orcadigital.online?subject=Application%20for%Personal Assistant">
                                Apply Now
                            </a>
                        </CareerBtnWrapper>
                    </CareersCard>
                    <CareersCard>
                        <div
                            style={{
                                height: 200,
                                width: 200,
                                marginBottom: 10,
                            }}
                        >
                            <Img src={Driver} />
                        </div>
                        <CareerTitle>Driver</CareerTitle>
                        <CareerDescription>
                            We are looking for punctual candidates with good
                            time management skills for the position of driver.
                            Drivers are responsible for delivering packages to
                            clients in a timely manner, working on nights and
                            weekends and ensuring that vehicles are always ready
                            for use, among other duties. Drivers will need to
                            lift heavy objects and load them into their
                            vehicles, requiring upper body strength and physical
                            stamina.
                        </CareerDescription>
                        <CareerBtnWrapper>
                            <a href="mailto:orcadigitalsg@orcadigital.online?subject=Application%20for%20Driver">
                                Apply Now
                            </a>
                        </CareerBtnWrapper>
                    </CareersCard>
                </CareersWrapper>
                {/* <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg> */}
            </CareersTopContainer>

            {/* 2nd row */}
            <CareersBottomContainer>
                <CareersWrapper>
                    <CareersCard>
                        <Img src={Videographer} />
                        <CareerTitle>Videographer</CareerTitle>
                        <CareerDescription>
                            Creative freedom is hard to come by today. If you
                            are an artistic and creative individual who can
                            bring out the best of our productions, we are
                            interested to speak with you.
                            <br /> <br />
                            At Orca Digital, we aim to provide you with the
                            platform and opportunity to express your artistic
                            flare. Be a part of a new concept in digital
                            marketing here.
                        </CareerDescription>
                        <CareerBtnWrapper>
                            <a href="mailto:orcadigitalsg@orcadigital.online?subject=Application%20for%20Videographer">
                                Apply Now
                            </a>
                        </CareerBtnWrapper>
                    </CareersCard>
                    <CareersCard>
                        <div
                            style={{
                                height: 200,
                                width: 200,
                                marginBottom: 10,
                            }}
                        >
                            <Img src={Writer} />
                        </div>
                        <CareerTitle>Writer</CareerTitle>
                        <CareerDescription>
                            We believe words can be the factor that transforms
                            every decision. We are looking for a team member to
                            do just that for us and our clients. If you believe
                            in the importance of meticulous phrasing and word
                            use, we want you with us at Orca Digital. <br />
                            <br />
                            Here, we believe in elevating digital marketing to
                            the next phase, a new frontier where every word used
                            to convey our client’s businesses is considered with
                            deep thought to manifest the largest impact we can.
                            Speak to us to be part of this team of change makers
                            at Orca Digital.
                        </CareerDescription>
                        <CareerBtnWrapper>
                            <a href="mailto:orcadigitalsg@orcadigital.online?subject=Application%20for%Personal Assistant">
                                Apply Now
                            </a>
                        </CareerBtnWrapper>
                    </CareersCard>
                    <CareersCard>
                        <div>
                            <Img src={AccountsManager} />
                        </div>
                        <CareerTitle>Accounts Manager</CareerTitle>
                        <CareerDescription>
                            Efficiency and efficacy are valued here at Orca
                            Digital. Hence, the very same level of service for
                            our clients is expected of our Accounts Managers.
                            AMs are required to manage our client’s social media
                            presence with the passion and diligence of an
                            entrepreneur.
                            <br />
                            <br />
                            If you believe you possess these traits, speak to us
                            to find out how you can join this business of
                            passion and progression. We look forward to knowing
                            you and having you onboard with Orca Digital.
                        </CareerDescription>
                        <CareerBtnWrapper>
                            <a href="mailto:orcadigitalsg@orcadigital.online?subject=Application%20for%20Accounts%20Manager">
                                Apply Now
                            </a>
                        </CareerBtnWrapper>
                    </CareersCard>
                </CareersWrapper>
            </CareersBottomContainer>
        </>
    );
};

export default HeroSection;

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaTelegramPlane,
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinkScroll,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './styles';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLinkScroll
                                to="careers"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Careers
                            </FooterLinkScroll>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            {/* <FooterLink to="/">Support</FooterLink> */}
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>People</FooterLinkTitle>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">LinkedIn</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            ORCA
                        </SocialLogo>
                        <WebsiteRights>
                            ORCA © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.instagram.com/orcadigital48"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//t.me/orcadigital"
                                target="_blank"
                                aria-label="Telegram"
                            >
                                <FaTelegramPlane />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.linkedin.com/company/orca-digital-sg/"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//t.me/orcadigital"
                                target="_blank"
                                aria-label="Telegram"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;

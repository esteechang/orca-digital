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
    FooterSocialLinks,
} from './styles';

import OrcaLogoGold from '../../assets/images/orca-logo-gold.png';

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
                            <FooterLinkScroll
                                to="testimonials"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Testimonials
                            </FooterLinkScroll>
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
                            <FooterLinkScroll
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Contact
                            </FooterLinkScroll>
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
                            <FooterSocialLinks
                                href="//www.instagram.com/orcadigitalsg"
                                target="_blank"
                            >
                                Instagram
                            </FooterSocialLinks>
                            <FooterSocialLinks
                                href="//t.me/orcadigital"
                                target="_blank"
                            >
                                Telegram
                            </FooterSocialLinks>
                            <FooterSocialLinks
                                href="//www.linkedin.com/company/orca-digital-sg/"
                                target="_blank"
                            >
                                LinkedIn
                            </FooterSocialLinks>
                            <FooterSocialLinks
                                href="https://www.facebook.com/Orca-Digital-100552852435775/"
                                target="_blank"
                            >
                                Facebook
                            </FooterSocialLinks>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            <img
                                src={OrcaLogoGold}
                                alt="logo"
                                style={{ width: 100 }}
                            />
                        </SocialLogo>
                        <WebsiteRights>
                            Orca Digital © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.instagram.com/orcadigitalsg"
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
                                href="https://www.facebook.com/Orca-Digital-100552852435775/"
                                target="_blank"
                                aria-label="Facebook"
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

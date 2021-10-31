import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #000;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fbbd14;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const FooterLink = styled(LinkR)`
    color: #fbbd14;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: #fff;
        transition: 0.3s ease-out;
    }
`;

export const FooterSocialLinks = styled.a`
    color: #fbbd14;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: #fff;
        transition: 0.3s ease-out;
    }
`;

export const FooterLinkScroll = styled(LinkScroll)`
    color: #fbbd14;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: #fff;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(LinkR)`
    color: #fbbd14;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #fff;
    }
`;

export const WebsiteRights = styled.small`
    color: #fbbd14;
    margin-bottom: 16px;
    font-family: 'LTAmberRegular';
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fbbd14;
    font-size: 24px;

    &:hover {
        color: #fff;
    }
`;

export const OrcaIcon = styled.img`
    margin-right: 0.5rem;
    height: 150px;
    width: 150px;
`;

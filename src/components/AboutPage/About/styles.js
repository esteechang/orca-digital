import styled from 'styled-components';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export const Container = styled.div`
    background-color: #fbbd14;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 65pt;
    font-family: 'PalosecoMedium';
    color: #000;
    margin-top: 20px;
    @media screen and (min-width: 1441px) {
        font-size: 75pt;
        margin-bottom: 40px;
    }
`;

export const FoundersContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Founder = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 80px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        margin-right: 40px;
    }
`;

export const FounderImg = styled.img`
    width: 140px;
    align-self: center;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        width: 100px;
    }

    @media screen and (min-width: 1441px) {
        width: 160px;
    }
`;

export const FounderName = styled.p`
    font-size: 13pt;
    font-family: 'PalosecoMedium';
    color: #000;
    margin-top: 15px;
    margin-bottom: 12px;

    @media screen and (min-width: 769px) and (max-width: 950px) {
        font-size: 10pt;
    }

    @media screen and (min-width: 1441px) {
        font-size: 15pt;
    }
`;

export const FounderRole = styled.p`
    font-size: 8pt;
    font-family: 'PalosecoLight';
    color: #000;

    @media screen and (min-width: 769px) and (max-width: 950px) {
        font-size: 6pt;
    }

    @media screen and (min-width: 1441px) {
        font-size: 10pt;
    }
`;

export const DescriptionContainer = styled.div`
    width: 180px;
    margin-top: 10px;
    border-top: 2px solid #8a00ff;
    border-bottom: 1px solid purple;

    @media screen and (min-width: 769px) and (max-width: 950px) {
        width: 100px;
    }

    @media screen and (min-width: 951px) and (max-width: 1349px) {
        width: 150px;
    }

    @media screen and (min-width: 1441px) {
        width: 200px;
    }
`;

export const Description = styled.p`
    color: #000;
    font-size: 9pt;
    margin-top: 10px;
    font-family: 'LTAmberLight';
    text-align: justify;
    text-align-last: center;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        font-size: 7.5pt;
    }

    @media screen and (min-width: 1441px) {
        font-size: 11pt;
    }
`;

export const InterestImg = styled.img`
    width: 90px;
    margin-top: 10px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        width: 60px;
    }

    @media screen and (min-width: 1441px) {
        width: 100px;
    }
`;

export const DeonInterest = styled.img`
    height: 90px;
    width: 60px;
    margin-top: 10px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        width: 40px;
        height: 70px;
    }

    @media screen and (min-width: 1441px) {
        height: 100px;
        width: 70px;
    }
`;

export const ShanonInterest = styled.img`
    width: 120px;
    margin-top: 10px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        width: 80px;
    }

    @media screen and (min-width: 1441px) {
        width: 130px;
    }
`;

export const JinhongInterest = styled.img`
    width: 60px;
    margin-top: 20px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        width: 50px;
    }

    @media screen and (min-width: 1441px) {
        width: 80px;
    }
`;

export const QuoteOpening = styled(RiDoubleQuotesL)`
    width: 8px;
    margin-right: 1px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        width: 6px;
    }
`;

export const QuoteClosing = styled(RiDoubleQuotesR)`
    width: 8px;
    margin-left: -5px;
`;

export const InterestDescription = styled.p`
    color: #000;
    font-family: 'MontserratRegular';
    text-align: center;
    font-size: 8pt;
    letter-spacing: 1.5px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (min-width: 769px) and (max-width: 1350px) {
        font-size: 6pt;
    }

    @media screen and (min-width: 1441px) {
        font-size: 9pt;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    /* border-top: 1px solid #8a00ff; */
`;

export const SocialImg = styled.img`
    width: 20px;
    margin-top: 15px;

    @media screen and (min-width: 1441px) {
        width: 25px;
    }
`;

export const LinkedInIcon = styled.img`
    width: 16px;
    margin-top: 15px;

    @media screen and (min-width: 1441px) {
        width: 20px;
    }
`;

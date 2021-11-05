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
`;

export const FounderImg = styled.img`
    width: 140px;
    align-self: center;
`;

export const FounderName = styled.p`
    font-size: 13pt;
    font-family: 'PalosecoMedium';
    color: #000;
    margin-top: 15px;
    margin-bottom: 12px;
`;

export const FounderRole = styled.p`
    font-size: 8pt;
    font-family: 'PalosecoLight';
    color: #000;
`;

export const DescriptionContainer = styled.div`
    width: 180px;
    margin-top: 10px;
    border-top: 2px solid #8a00ff;
    border-bottom: 1px solid purple;
`;

export const Description = styled.p`
    color: #000;
    font-size: 9pt;
    margin-top: 20px;
    font-family: 'LTAmberLight';
    text-align: justify;
    text-align-last: center;
`;

export const InterestImg = styled.img`
    width: 90px;
    margin-top: 20px;
`;

export const QuoteOpening = styled(RiDoubleQuotesL)`
    width: 8px;
    display: block;
    margin-left: 12px;
    margin-bottom: -20px;
    margin-top: -5px;
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
    margin-bottom: 20px;
`;

export const SocialContainer = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    /* border-top: 1px solid #8a00ff; */
`;

export const SocialImg = styled.img`
    width: 20px;
    margin-top: 25px;
`;

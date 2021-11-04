import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fbbd14;
`;

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #fbbd14;
    z-index: 10;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const CloseModalButton = styled(IoIosArrowBack)`
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;

    margin-top: 30px;
    margin-left: 10px;
    width: 35px;
    height: 35px;
    /* padding: 0; */
    z-index: 100;
    color: #fff;
`;

export const FounderImage = styled.img`
    width: 170px;
    height: 170px;
    margin-top: 40px;
    margin-left: 70px;
`;

export const Name = styled.p`
    color: #000;
    font-size: 16pt;
    font-family: 'PalosecoMedium';
    margin-top: 20px;
    text-align: center;
`;

export const Role = styled.p`
    color: #1b1b1b;
    font-size: 10pt;
    margin-top: 10px;
    font-family: 'PalosecoLight';
    text-align: center;
`;

export const DescriptionContainer = styled.div`
    width: 300px;
    margin-top: 10px;
    border-top: 2px solid #8a00ff;
    border-bottom: 1px solid purple;
`;

export const Description = styled.p`
    color: #000;
    font-size: 10pt;
    margin-top: 20px;
    font-family: 'LTAmberLight';
    text-align: justify;
`;

export const InterestImg = styled.img`
    width: 100px;
    margin-left: 100px;
    margin-top: 20px;
`;

export const QuoteOpening = styled(RiDoubleQuotesL)`
    width: 10px;
    margin-top: 15px;
    margin-left: -8px;
`;

export const QuoteClosing = styled(RiDoubleQuotesR)`
    width: 10px;
`;

export const InterestDescription = styled.p`
    color: #000;
    font-family: 'PalosecoLight';
    text-align: center;
    font-size: 10pt;
    line-height: 30px;
    letter-spacing: 1.5px;
`;

export const SocialContainer = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    /* border-top: 1px solid #8a00ff; */
`;

export const SocialImg = styled.img`
    width: 22px;
    margin-top: 15px;
`;

export const OtherFoundersContainer = styled.div`
    justify-content: space-between;
    display: flex;
    width: 320px;
    margin-top: 40px;
`;

export const OwnFounder = styled.p`
    color: #fff;
    font-size: 9pt;
    font-family: 'PalosecoLight';
`;

export const OtherFounder = styled.p`
    color: #000;
    font-size: 9pt;
    font-family: 'PalosecoLight';
    cursor: pointer;
`;

export const OtherFoundersContainerBottom = styled.div`
    justify-content: space-between;
    display: flex;
    width: 250px;
    margin-top: 25px;
    margin-left: 20px;
`;

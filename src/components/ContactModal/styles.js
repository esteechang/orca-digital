import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

export const Container = styled.div`
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

    @media screen and (max-width: 768px) {
        background: #000;
        justify-content: center;
        align-items: center;
    }
`;

export const ModalInnerWrapper = styled.div`
    width: 1300px;
    height: 600px;
    background: #000;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        width: 1000px;
        height: 600px;
    }

    @media only screen and (min-width: 1441px) {
        width: 1700px;
        height: 800px;
    }
`;

export const ModalContent = styled.div``;

export const ModalText = styled.p`
    font-family: 'LTAmberRegular';
    font-size: 16pt;

    @media screen and (max-width: 768px) {
        font-size: 12pt;
    }
`;

export const Button = styled.button`
    color: #000;
    background-color: #fbbd14;
    margin-top: 35px;
    padding: 12px 70px;
    border-radius: 50px;
    font-size: 30pt;
    font-family: 'MontserratMedium';
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fff;
        color: #000;
    }

    @media screen and (max-width: 768px) {
        font-size: 12pt;
        width: 300px;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    width: 300px;
    position: absolute;
    margin-top: 170px;
    margin-left: 200px;
    justify-content: space-between;
    align-items: center;
    font-size: 12pt;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 50;
        margin-left: -90px;
        /* margin-right: 50px; */
    }
`;

export const SocialIcons = styled.div`
    width: 100%;
    justify-content: space-between;
`;

export const SocialIconLink = styled.a`
    color: #fbbd14;
    font-size: 20px;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
        color: #fff;
    }
`;

export const CloseModalButton = styled(IoIosArrowBack)`
    cursor: pointer;
    position: absolute;
    top: 100px;
    left: 100px;
    width: 60px;
    height: 60px;
    padding: 0;
    z-index: 100;
    color: #fbbd14;

    @media screen and (max-width: 768px) {
        top: 20;
        left: 0;
    }

    @media only screen and (min-width: 1500px) {
        top: 200px;
        left: 200px;
    }
    @media screen and (min-width: 769px) and (max-width: 1300px) {
        top: 150px;
        left: 100px;
    }
`;

export const StalkUs = styled.p`
    font-size: 12pt;
    width: 200px;
    margin-right: -70px;

    @media screen and (max-width: 768px) {
        margin-right: 10px;
        margin-bottom: 15px;
    }
`;

import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export const ModalContainer = styled.div`
    z-index: 10;
`;

export const ModalWrapper = styled.div`
    background: #122a4b;
    width: 100%;
    height: 100%;

    z-index: 10;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TopText = styled.h1`
    color: #feb700;
    font-size: 35pt;
    font-family: 'Optima';
    font-weight: 100;
`;

export const BottomText = styled.h1`
    color: white;
    font-size: 35pt;
    font-family: 'Optima';
    font-weight: 100;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;

    @media screen and (max-width: 768px) {
        font-size: 30pt;
    }
`;

export const PoweredBy = styled.h1`
    color: white;
    font-size: 12pt;
`;

export const CloseModalButton = styled(IoIosClose)`
    cursor: pointer;
    position: absolute;
    top: 100px;
    right: 100px;
    width: 80px;
    height: 80px;
    padding: 0;
    z-index: 100;
    color: white;

    @media screen and (max-width: 768px) {
        top: 20px;
        right: 5px;
    }

    @media only screen and (min-width: 1500px) {
        top: 200px;
        right: 200px;
    }
    @media screen and (min-width: 769px) and (max-width: 1300px) {
        top: 150px;
        right: 100px;
    }
`;

export const ModalText = styled.p`
    font-family: 'Optima';
    font-size: 12pt;
    margin-top: 20px;
    font-weight: 100;
    text-align: center;
`;

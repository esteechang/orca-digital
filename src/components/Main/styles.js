import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInLeft } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.div`
    height: 100vh;
    background-color: #fbbd14;
    display: flex;
    justify-content: center;
    align-items: center;

    animation: 1s ${fadeInAnimation};
`;

export const Title = styled.h1`
    font-size: 130pt;
    color: white;
    letter-spacing: 50pt;
    animation: 2s ${fadeInLeftAnimation};

    @media screen and (max-width: 768px) {
        font-size: 80pt;
        letter-spacing: 15pt;
    }
`;

import styled, { keyframes } from 'styled-components';
import { pulse, fadeOut } from 'react-animations';

const fadeOutAnimation = keyframes`${fadeOut}`;
const pulseAnimation = keyframes`${pulse}`;

export const Container = styled.div`
    height: 100vh;
    background-color: #fbbd14;
    display: flex;
    justify-content: center;
    align-items: center;

    animation: 2s ${fadeOutAnimation} linear;
    /* transition: background-color linear 2s; */
    /* animation: ${fadeOutAnimation} 3s linear ; */
    animation-delay: 1s;
`;

export const PulseDiv = styled.div`
    animation: 1s ${pulseAnimation} infinite;
`;

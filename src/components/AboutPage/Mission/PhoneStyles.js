import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const Title = styled.h1`
    margin-top: 20px;
    font-size: 40pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    align-self: flex-start;
    margin-left: 50px;
`;

export const SubtextContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin-left: 20px;
    margin-top: 20px;
`;

export const Text = styled.p`
    font-size: 10pt;
    font-family: 'LTAmberLight';
    
`;

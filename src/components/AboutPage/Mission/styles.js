import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 65pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    margin-right: 30px;
    margin-bottom: 145px;
    margin-top: -90px;
`;

export const Subtitle = styled.p`
    margin-left: 30px;
    font-size: 15pt;
    font-family: 'LTAmberLight';
    width: 650px;
    margin-top: 80px;
    margin-right: -20px;
`;
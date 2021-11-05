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
    font-size: 15pt;
    font-family: 'LTAmberLight';
    color: #fbbd14;
    margin-top: 12px;
    text-align: center;
`;

export const IconsContainer = styled.div`
    width: 650px;
    display: flex;
    flex-direction: row;
    margin-right: -72px;
    margin-top: 150px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
`;

export const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.img`
    height: 50pt;
    margin-right: 50px;
    margin-left: 50px;
`;

import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    height: calc(100vh - 80px);
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
`;

export const HorizontalDivider = styled.div`
    width: 68%;
    background-color: #fbbd14;
    height: 2px;
    margin-top: 20px;
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 11pt;
    width: 68%;
    margin-top: 10px;
    font-family: 'LTAmberLight';
`;

export const BottomText = styled.p`
    color: #fff;
    font-size: 11pt;
    margin-top: 200px;
    font-family: 'LTAmberLight';
`;

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

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    margin-right: 80px;
`;

export const Title = styled.h1`
    font-size: 40pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    align-self: flex-end;
`;

export const SubtextContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const IconsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 70px;
`;

export const Icon = styled.img`
    height: 30pt;
    margin-right: 50px;
    margin-left: 50px;
`;

export const Subtitle = styled.p`
    font-size: 10pt;
    font-family: 'LTAmberLight';
    color: #fbbd14;
    margin-top: 12px;
    text-align: center;
`;

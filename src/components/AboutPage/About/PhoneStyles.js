import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fbbd14;
    height: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const Title = styled.h1`
    margin-top: 50px;
    font-size: 35pt;
    font-family: 'PalosecoMedium';
    color: #000;
    margin-right: 190px;
`;

export const LargerTitle = styled.h1`
    font-size: 35pt;
    font-family: 'PalosecoMedium';
    color: #000;
    margin-right: 20px;
    border-bottom: 2px solid black;
    margin-bottom: 75px;
`;

export const HorizontalDivider = styled.div`
    width: 250px;
    background-color: #000;
    height: 20px;
    margin-bottom: 75px;
    margin-right: 20px;
    display: block;
`;

export const FoundersContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 350px;
    margin-bottom: 65px;
    align-self: flex-end;
    margin-right: 60px;
    cursor: pointer;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;

export const Name = styled.p`
    color: #000;
    font-size: 17pt;
    font-family: 'PalosecoMedium';
`;

export const Role = styled.p`
    color: #1b1b1b;
    font-size: 8pt;
    margin-top: 10px;
    font-family: 'PalosecoLight';
`;

export const Arrow = styled.img`
    width: 19px;
    height: 29px;
    margin-right: -5px;
    margin-left: 15px;
`;

export const BottomText = styled.p`
    color: #fff;
    font-size: 11pt;
    font-family: 'LTAmberLight';
`;


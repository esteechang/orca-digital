import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 65pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    margin-right: 30px;
    margin-bottom: 145px;
    margin-top: -110px;
`;

export const Subtitle = styled.p`
    margin-left: 30px;
    font-size: 15pt;
    font-family: 'LTAmberLight';
    width: 620px;
    margin-top: 120px;
    margin-right: -65px;
`;

export const Button = styled.button`
    color: #000;
    background-color: #fbbd14;
    width: 200px;
    padding: 10px 60px;
    border-radius: 50px;
    font-size: 15pt;
    font-family: 'MontserratMedium';
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: none;
    margin-top: -45px;
    margin-right: 250px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fff;
        color: #000;
    }
`;

export const SmallText = styled.p`
    font-size: 18pt;
    font-family: 'LTAmberLight';
    color: #fbbd14;
    margin-top: -35px;
    margin-left: 150px;
`;

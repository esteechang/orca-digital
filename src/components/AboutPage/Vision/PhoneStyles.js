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
    font-size: 40pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    line-height: 120px;
    border-bottom: 2px solid #fbbd14;
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 10pt;
    width: 190px;
    margin-top: 10px;
    font-family: 'LTAmberLight';
    text-align: justify;
`;

export const Button = styled.button`
    color: #000;
    background-color: #fbbd14;
    width: 200px;
    padding: 10px 80px;
    border-radius: 50px;
    margin-top: 200px;
    font-size: 15pt;
    font-family: 'MontserratMedium';
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fff;
        color: #000;
    }
`;

export const BottomText = styled.p`
    color: #fbbd14;
    font-size: 11pt;
    font-family: 'LTAmberLight';
    margin-top: 20px;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-top: 50px;
`;

export const SocialIconLink = styled.a`
    color: #fbbd14;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

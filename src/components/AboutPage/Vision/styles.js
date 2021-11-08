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
    margin-top: 0px;

    @media screen and (min-width: 1441px) {
        margin-left: 2px;
    }
`;

export const Title = styled.h1`
    font-size: 65pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    margin-right: 30px;

    @media screen and (min-width: 1441px) {
        font-size: 75pt;
    }

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        font-size: 40pt;
    }
`;

export const Subtitle = styled.p`
    margin-left: 30px;
    font-size: 15pt;
    font-family: 'LTAmberLight';
    width: 620px;
    margin-top: 120px;
    margin-right: -65px;

    @media screen and (min-width: 769px) and (max-width: 950px) {
        font-size: 12pt;
        width: 450px;
        margin-right: -1px;
    }

    @media screen and (min-width: 951px) and (max-width: 1067px) {
        font-size: 13pt;
        width: 460px;
        margin-right: -21px;
    }

    @media screen and (min-width: 1441px) {
        font-size: 18pt;
        width: 680px;
        margin-right: -50px;
    }
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

    margin-right: 250px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fff;
        color: #000;
    }

    @media screen and (min-width: 1441px) {
        margin-right: 290px;
    }
`;

export const SmallText = styled.p`
    font-size: 18pt;
    font-family: 'LTAmberLight';
    color: #fbbd14;
    margin-top: -35px;
    margin-left: 180px;

    @media screen and (min-width: 1441px) {
        margin-left: 130px;
    }
`;

export const ThickLine = styled.div`
    width: 5px;
    background-color: #fff;
    height: 125px;

    position: relative;
    bottom: -18px;
    right: 3px;

    @media screen and (min-width: 1441px) {
        height: 130px;
    }

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        height: 100px;
        bottom: -25px;
    }
`;

export const ThinLine = styled.div`
    width: 1px;
    background-color: #fff;
    height: 80vh;
    opacity: 0.5;

    /* position: fixed; */
    /* bottom: 20px; */
    margin-left: 5px;

    @media screen and (min-width: 1441px) {
        bottom: -362px;
        height: 75vh;
    }
`;

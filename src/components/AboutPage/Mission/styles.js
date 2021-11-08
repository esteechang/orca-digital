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
    margin-bottom: 165px;
    margin-top: -100px;

    @media screen and (min-width: 1441px) {
        font-size: 75pt;
    }

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        font-size: 40pt;
        margin-left: -25px;
    }
`;

export const Subtitle = styled.p`
    margin-left: 30px;
    font-size: 15pt;
    font-family: 'LTAmberLight';
    width: 650px;
    margin-top: 190px;
    margin-right: -20px;

    @media screen and (min-width: 1441px) {
        font-size: 18pt;
        width: 680px;
        margin-right: 35px;
    }

    @media screen and (min-width: 769px) and (max-width: 950px) {
        font-size: 12pt;
        width: 450px;
        margin-right: 20px;
    }

    @media screen and (min-width: 951px) and (max-width: 1067px) {
        font-size: 13pt;
        width: 460px;
        margin-right: 0px;
    }
`;

export const ThickLine = styled.div`
    width: 5px;
    background-color: #fff;
    height: 370px;

    position: relative;
    bottom: -10px;
    right: 3px;
    z-index: 1;

    @media screen and (min-width: 1441px) {
        height: 400px;
        bottom: -18px;
    }

    @media screen and (min-width: 769px) and (max-width: 950px) {
        height: 330px;
        bottom: -172px;
    }
`;

export const ThinLineTop = styled.div`
    width: 1px;
    background-color: #fff;
    height: 100vh;
    opacity: 0.5;

    /* position: fixed; */
    bottom: -365px;
    margin-left: 5px;
    @media screen and (min-width: 1441px) {
        bottom: -490px;
    }
`;

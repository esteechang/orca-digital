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

    @media screen and (min-width: 1441px) {
        font-size: 75pt;
    }

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        font-size: 40pt;
    }
`;

export const Subtitle = styled.p`
    font-size: 15pt;
    font-family: 'LTAmberLight';
    color: #fbbd14;
    margin-top: 12px;
    text-align: center;

    @media screen and (min-width: 1441px) {
        font-size: 19pt;
    }
`;

export const IconsContainer = styled.div`
    width: 650px;
    display: flex;
    flex-direction: row;
    margin-right: -71px;
    margin-top: 150px;

    @media screen and (min-width: 1441px) {
        width: 680px;
        margin-right: -27px;
    }

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        width: 600px;
        margin-right: -137px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        margin-right: 20px;
    }
`;

export const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.img`
    height: 50pt;
    margin-right: 50px;
    margin-left: 50px;

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        height: 40pt;
        margin-right: 40px;
        margin-left: 40px;
    }

    @media screen and (min-width: 1441px) {
        height: 55pt;
    }
`;

export const MakingWavesIcon = styled.img`
    height: 50pt;
    width: 40px;
    margin-left: 65px;

    @media screen and (min-width: 769px) and (max-width: 1067px) {
        height: 40pt;
        width: 30px;
        margin-left: 55px;
    }

    @media screen and (min-width: 1441px) {
        height: 55pt;
        width: 45px;
    }
`;

export const ThickLine = styled.div`
    width: 5px;
    background-color: #fff;
    height: 370px;

    position: relative;
    bottom: -25px;
    right: 3px;

    @media screen and (min-width: 1441px) {
        height: 400px;
        bottom: -35px;
    }

    @media screen and (min-width: 769px) and (max-width: 950px) {
        height: 340px;
        bottom: -28px;
        right: 6px;
    }
`;

export const ThinLineTop = styled.div`
    width: 1px;
    background-color: #fff;
    height: 100vh;
    opacity: 0.5;

    bottom: -365px;
    margin-left: 5px;

    @media screen and (min-width: 1441px) {
        bottom: -487px;
        margin-left: 7px;
    }

    @media screen and (min-width: 769px) and (max-width: 950px) {
        margin-left: -4px;
    }
`;

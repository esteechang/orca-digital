import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 130px;
    margin-right: 120px;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 45px;
    }


    @media screen and (min-width: 769px) and (max-width: 1300px) {
        margin-left: 180px;
    }

    @media only screen and (min-width: 1441px) {
        margin-right: 170px;
    }
`;

export const Title = styled.h1`
    font-size: 77pt;
    color: #fbbd14;
    margin-right: 30px;

    font-family: 'PalosecoMedium';

    @media screen and (max-width: 768px) {
        font-size: 40pt;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        font-size: 55pt;
        text-align: right;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 85pt;
    }
`;

export const WhiteTitle = styled.h1`
    font-size: 77pt;
    color: #fff;
    font-family: 'PalosecoMedium';
    text-align: right;

    :last-child {
        display: none;
    }

    @media screen and (max-width: 1100px) {
        font-size: 40pt;
        :last-child {
            display: block;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        font-size: 55pt;
        text-align: right;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 85pt;
    }
`;

export const WhiteTitleForBusiness = styled.h1`
    font-size: 77pt;
    color: #fff;
    font-family: 'PalosecoMedium';
    text-align: right;
    margin-right: 120px;

    @media screen and (max-width: 1100px) {
        display: none;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        font-size: 55pt;
        text-align: right;
        
    }

    @media only screen and (min-width: 1441px) {
        font-size: 85pt;
        margin-right: 170px;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    margin-top: 100px;
    margin-left: 170px;

    @media screen and (max-width: 768px) {
        margin-top: 60px;
        align-self: center;
        margin-left: 10px;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        margin-left: 170px;
    }
    

    @media only screen and (min-width: 1441px) {
        margin-left: 200px;
    }
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 15pt;
    width: 530px;
    align-self: flex-end;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 11pt;
        width: 320px;

        text-align: left;
    }

    

    @media only screen and (min-width: 1441px) {
        font-size: 18pt;
        width: 650px;
    }
`;

export const Divider = styled.div`
    display: inline-block;
    width: 2px;
    background-color: #fbbd14;
    margin: 0 20px;
    height: 83px;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
        height: 105px;
        /* margin-top: 5px; */
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        height: 110px;
    }
    @media only screen and (min-width: 1441px) {
        height: 100px;
        margin-bottom: 5px;
    }
`;

export const BottomText = styled.p`
    display: none;
    color: #fff;
    align-self: center;
    margin-top: auto;
    margin-bottom: 70px;
    font-size: 12pt;

    @media screen and (max-width: 768px) {
        display: unset;
    }
`;

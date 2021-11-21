import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        height: 86vh;
    }
`;

export const BgImageContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        background: #000;
    }
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    background-size: 0 0;

    @media screen and (max-width: 768px) {
        width: 0;
        height: 0;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-end;
    }

    @media only screen and (min-width: 1230px) {
        flex-direction: row;
    }
`;

export const Title = styled.h1`
    font-size: 77pt;
    color: #fbbd14;
    font-family: 'PalosecoMedium';
    margin-right: 20px;

    @media screen and (max-width: 768px) {
        font-size: 40pt;
        text-align: right;
        margin-right: 45px;
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 57pt;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 100pt;
    }
`;

export const WhiteTitle = styled.h1`
    font-size: 77pt;
    display: inline;
    color: #fff;
    font-family: 'PalosecoMedium';

    @media screen and (max-width: 768px) {
        font-size: 40pt;
        margin-right: 45px;
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 57pt;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 100pt;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    z-index: 1;

    @media screen and (max-width: 768px) {
        margin-top: 150px;
    }
`;

export const SubtitleFade = styled(Fade)`
    margin-left: auto;

    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    margin-top: 30px;
    margin-left: auto;

    @media only screen and (min-width: 1441px) {
        margin-top: 50px;
    }
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 15pt;
    width: 550px;
    align-self: flex-end;
    margin-right: 120px;
    border-left: 2px solid #fbbd14;
    padding-left: 20px;

    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 12pt;
        width: 320px;
        margin: auto;
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 12pt;
        width: 440px;
        margin-right: 110px;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 18pt;
        width: 720px;
        margin-right: 170px;
    }
`;

export const BtnContainer = styled.div`
    margin-top: 50px;

    align-self: flex-end;
    margin-right: 120px;

    @media screen and (max-width: 768px) {
        align-self: center;
        margin-right: 100px;
    }

    @media only screen and (min-width: 1441px) {
        margin-right: 170px;
    }
`;

// export const Divider = styled.div`
//     display: inline-block;
//     width: 2px;
//     background-color: #fbbd14;

//     margin-right: 20px;
//     margin-bottom: 5px;
//     height: 60px;

//     @media screen and (max-width: 768px) {
//         /* height: 90px;
//         margin-left: 0px;
//         margin-bottom: 5px; */
//         display: none;
//     }
//     @media screen and (min-width: 769px) and (max-width: 1200px) {
//         height: 50px;
//     }

//     @media only screen and (min-width: 1441px) {
//         height: 75px;
//         margin-bottom: 5px;
//     }
// `;

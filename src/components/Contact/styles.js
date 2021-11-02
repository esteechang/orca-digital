import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 120px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

`;

export const Title = styled.h1`
    font-size: 50pt;
    color: #fbbd14;
    margin-right: 20px;
    font-family: 'PalosecoMedium';

    @media screen and (max-width: 900px) {
        font-size: 35pt;
        margin-right: 0px;
        :last-of-type {
            margin-top: 40px;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        font-size: 40pt;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 65pt;
    }
`;

export const WhiteTitle = styled.h1`
    font-size: 50pt;
    color: #fff;
    margin-right: 20px;
    font-family: 'PalosecoMedium';

    @media screen and (max-width: 900px) {
        display: none;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        font-size: 40pt;
    }

    @media only screen and (min-width: 1441px) {
        font-size: 65pt;
    }
`;

export const Button = styled.button`
    color: #000;
    background-color: #fbbd14;
    width: 350px;
    padding: 10px 80px;
    border-radius: 50px;
    margin-top: 100px;
    font-size: 25pt;
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

    @media screen and (max-width: 768px) {
        width: 200px;
        font-size: 15pt;
    }
`;

export const Subtitle = styled.p`
    color: #fff;
    font-family: 'LTAmberRegular';
    font-size: 15pt;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
    @media only screen and (min-width: 1441px) {
        font-size: 18pt;
        margin-top: 10px;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin-top: 60px;

    @media screen and (max-width: 768px) {
        width: 200px;
        margin-top: 20px;
    }

    @media only screen and (min-width: 1441px) {
        width: 550px;
    }
`;

export const SocialIconLink = styled.a`
    color: #fbbd14;
    font-size: 30px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1441px) {
        font-size: 35px;
    }
`;

export const SmallText = styled.p`
    font-size: 12pt;
    display: none;
    color: #fff;
    align-self: center;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        display: unset;
    }
`;

export const WhiteTitleForPhone = styled.h1`
    display: none;
    color: #fff;
    align-self: center;

    font-family: 'PalosecoMedium';
    font-size: 35pt;
    margin-right: 15px;

    @media screen and (max-width: 900px) {
        display: unset;
        font-size: 40pt;
        margin-right: 20px;
    }
`;

export const DividerPhone = styled.div`
    display: none;

    width: 100%;
    background-color: #fff;
    height: 1px;

    @media screen and (max-width: 768px) {
        display: unset;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;

    align-items: center;
    justify-content: center;

    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        display: unset;
    }
    width: 320px;
    height: 80px;
`;

export const SubtitlePhone = styled.p`
    display: none;
    color: #fff;
    font-size: 11pt;
    width: 320px;
    /* margin-right: 120px; */
    text-align: left;
    /* margin-top: -150px; */
    /* margin-left: 20px; */

    @media screen and (max-width: 768px) {
        /* display: unset; */
        display: inline-block;
    }
`;

export const Divider = styled.div`
    display: none;
    width: 2px;
    background-color: #fbbd14;
    color: #fbbd14;
    height: 80px;

    justify-self: center;
    align-self: center;

    @media screen and (max-width: 768px) {
        display: block;
        /* margin-top: 5px; */
    }
`;

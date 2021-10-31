import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: #000; */
    display: flex;
    flex-direction: column;
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
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    background-size: 0 0;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.h1`
    font-size: 77pt;
    color: #fbbd14;

    @media screen and (max-width: 768px) {
        font-size: 40pt;
        margin: 0 20px;
    }

    font-family: 'PalosecoMedium';
`;

export const WhiteTitle = styled.h1`
    margin-left: 30px;
    font-size: 77pt;
    display: inline;
    color: #fff;
    font-family: 'PalosecoMedium';

    @media screen and (max-width: 768px) {
        font-size: 40pt;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    z-index: 1;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
        align-self: center;
    }
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 15pt;
    width: 550px;
    align-self: flex-end;
    margin-right: 120px;

    text-align: justify;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
        width: 300px;
    }
`;

export const BtnContainer = styled.div`
    margin-top: 50px;

    align-self: flex-end;
    margin-right: 120px;

    @media screen and (max-width: 768px) {
        align-self: center;
        margin-right: 0px;
    }
`;

export const Divider = styled.div`
    display: inline-block;
    width: 2px;
    background-color: #fbbd14;
    margin: 0 20px;
    height: 60px;

    @media screen and (max-width: 768px) {
        height: 130px;
    }
`;

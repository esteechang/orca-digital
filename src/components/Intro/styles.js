import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 80pt;
    color: #fbbd14;

    @media screen and (max-width: 768px) {
        font-size: 40pt;
        margin: 0 20px;
    }

    font-family: 'PalosecoMedium';

    text-align: right;
    margin-top: 130px;
    margin-right: 120px;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    margin-top: 100px;
    margin-left: 130px;

    @media screen and (max-width: 768px) {
        align-self: center;
    }
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 15pt;
    width: 530px;
    align-self: flex-end;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
        width: 300px;
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

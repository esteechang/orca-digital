import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
`;

// export const Title = styled.h1`
//     font-size: 80pt;
//     color: #fbbd14;

//     @media screen and (max-width: 768px) {
//         font-size: 40pt;
//         text-align: right;
//         margin-right: 45px;
//     }

//     font-family: 'PalosecoMedium';

//     text-align: right;
//     margin-top: 130px;
//     margin-right: 120px;
// `;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 130px;
    margin-right: 120px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 45px;
    }
`;

export const Title = styled.h1`
    font-size: 77pt;
    color: #fbbd14;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
        font-size: 40pt;
        text-align: right;
        margin-right: 45px;
    }

    font-family: 'PalosecoMedium';
`;

export const WhiteTitle = styled.h1`
    font-size: 77pt;
    color: #fff;
    font-family: 'PalosecoMedium';
    text-align: right;

    :last-child {
        display: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 40pt;
        :last-child {
            display: block;
        }
    }
`;

export const WhiteTitleForBusiness = styled.h1`
    font-size: 77pt;
    color: #fff;
    font-family: 'PalosecoMedium';
    text-align: right;
    margin-right: 120px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    margin-top: 100px;
    margin-left: 130px;

    @media screen and (max-width: 768px) {
        margin-top: 60px;
        align-self: center;
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
        margin-right: 120px;
        text-align: left;
    }
`;

export const Divider = styled.div`
    display: inline-block;
    width: 2px;
    background-color: #fbbd14;
    margin: 0 20px;
    height: 83px;

    @media screen and (max-width: 768px) {
        height: 105px;
        /* margin-top: 5px; */
    }
`;

export const BottomText = styled.p`
    display: none;
    color: #fff;
    align-self: center;
    margin-top: auto;
    margin-bottom: 70px;

    @media screen and (max-width: 768px) {
        display: unset;
    }
`;

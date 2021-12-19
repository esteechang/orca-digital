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

export const Title = styled.h1`
    font-size: 65pt;
    color: #fbbd14;

    @media screen and (max-width: 768px) {
        display: none;
    }

    font-family: 'PalosecoMedium';
`;

export const TitlePhone = styled.h1`
    display: none;
    font-size: 40pt;

    color: #fbbd14;
    font-family: 'PalosecoMedium';

    @media screen and (max-width: 768px) {
        display: unset;
    }
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 30px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Subtitle = styled.p`
    font-family: 'PalosecoMedium';
    text-transform: uppercase;
    font-size: 15pt;
font-weight: 100;
    
    :first-child {
        margin-left: 50px;
        margin-right: 150px;
    }

    :last-child {
        margin-left: 100px;
    }
`;

export const Button = styled.button`
    color: #fbbd14;
    background-color: #000;
    width: 220px;
    padding: 8px 50px;
    border: 1px solid #fbbd14;
    border-radius: 50px;
    margin-top: 80px;
    font-size: 14pt;
    font-family: 'MontserratMedium';
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fbbd14;
        color: #000;
    }

    @media screen and (max-width: 768px) {
        width: 200px;
        padding: 8px 40px;
        margin-top: 50px;
    }
`;

export const MoreServicesContainer = styled.div`
    height: 60vh;
    background-color: #fbbd14;
    color: #fff;

    @media screen and (max-width: 768px) {
        height: 40vh;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        height: 45vh;
    }
`;

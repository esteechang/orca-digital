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
    margin-top: 100px;
    margin-bottom: 75px;
    @media screen and (max-width: 768px) {
        font-size: 40pt;
        margin: 0 20px;
    }

    font-family: 'PalosecoMedium';
`;

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 25px;
    font-size: 25pt;
`;

export const Subtitle = styled.p`
    :first-child {
        margin-right: 150px;
    }

    :last-child {
        margin-left: 150px;
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
`;

export const MoreServicesContainer = styled.div`
    height: 60vh;
    background-color: #fbbd14;
    color: #fff;
`;

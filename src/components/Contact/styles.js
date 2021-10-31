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
`;

export const Title = styled.h1`
    font-size: 50pt;
    color: #fbbd14;
    margin-right: 20px;
    font-family: 'PalosecoMedium';
`;

export const WhiteTitle = styled.h1`
    font-size: 50pt;
    color: #fff;
    margin-right: 20px;
    font-family: 'PalosecoMedium';
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
`;

export const Subtitle = styled.p`
    color: #fff;
    font-family: 'LTAmberRegular';
    font-size: 15pt;
    text-align: center;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin-top: 60px;
`;

export const SocialIconLink = styled.a`
    color: #fbbd14;
    font-size: 30px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

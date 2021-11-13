import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-left: 15px;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        margin-left: 70px;
        width: 90%;
        /* margin-right: 30px; */
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 30px;

    :first-child {
        margin-top: 20px;
    }
    @media screen and (min-width: 769px) and (max-width: 1300px) {
        margin-right: 40px;
    }
`;

export const IconContainer = styled.div`
    margin-bottom: 50px;
    margin-right: 15px;
    width: 50px;

    @media screen and (max-width: 768px) {
        width: 30px;
        margin-bottom: 0px;
    }
    @media screen and (min-width: 769px) and (max-width: 1300px) {
        width: 40px;
    }
`;

export const Icon = styled.img`
    height: 25pt;

    @media screen and (max-width: 768px) {
        height: 15pt;
        margin-left: 10px;
    }
    @media screen and (min-width: 769px) and (max-width: 1300px) {
        height: 20pt;
        margin-top: 5px;
    }
`;

export const IconText = styled.p`
    color: #000;
    font-family: 'LTAmberLight';
    font-size: 20pt;
    margin-top: 5px;

    @media screen and (max-width: 768px) {
        font-size: 9pt;
        text-align: center;
    }

    @media screen and (min-width: 769px) and (max-width: 1300px) {
        font-size: 16pt;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        margin-bottom: 15px;
    }
`;

export const Blank = styled.div`
    height: 180px;
    opacity: 0;
`;

import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
`;

export const IconContainer = styled.div`
    margin-bottom: 50px;
    margin-right: 15px;
    width: 50px;
`;

export const Icon = styled.img`
    height: 25pt;
`;

export const IconText = styled.p`
    color: #000;
    font-family: 'LTAmberRegular';
    font-size: 20pt;
    margin-top: 5px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Blank = styled.div`
    height: 180px;
    opacity: 0;
`;

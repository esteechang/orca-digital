import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-top: 1px solid white;
`;

export const Title = styled.h1`

    font-size: 65pt;
    color: #fbbd14;
    margin-top: 50px;
    margin-bottom: 75px;
    @media screen and (max-width: 768px) {
        font-size: 40pt;
        margin: 0 20px;
    }

    font-family: 'PalosecoMedium';
`;

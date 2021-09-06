import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;

    margin-bottom: 64px;
    margin-top: 30px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Content = styled.div`
    /* background-image: url(${(props) => props.img}); */
    background: #fff;

    overflow: hidden;

    width: 100%;
    height: 100%;

    background-size: cover; /* or contain depending on what you want */
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    margin: auto;
    padding: 0;
`;

export const Input = styled.input`
    font-size: 14px;
    padding: 10px 10px;
    border: 1px solid black;
    width: 600px;
    margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
    font-size: 14px;
    padding: 10px 10px;
    border: 1px solid black;
    height: 10em;
    width: 600px;
    margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
    color: red;
    margin-bottom: 10px;
`;

export const SubmitButton = styled.input`
    padding: 10px 10px;
`
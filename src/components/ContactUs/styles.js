import styled from 'styled-components';

export const ContactUsContainer = styled.div`
    background: #f9f9f9;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ContactUsH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;

    margin-bottom: 64px;
    margin-top: 30px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Input = styled.input`
    font-size: 16px;
    padding: 10px 10px;
    border: 1px solid black;
    width: 600px;
    margin-bottom: 10px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
    }
    font-family: 'LTAmberRegular';
`;

export const TextArea = styled.textarea`
    font-size: 16px;
    padding: 10px 10px;
    border: 1px solid black;
    height: 10em;
    width: 600px;
    margin-bottom: 10px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
    }
    font-family: 'LTAmberRegular';
`;

export const ErrorMessage = styled.p`
    color: red;
    margin-bottom: 10px;
`;

export const SubmitButton = styled.input`
    padding: 10px 10px;
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

export const Underline = styled.div`
    height: 0.25rem;
    width: 7rem;
    background: #ffd700;
    margin-left: auto;
    margin-right: auto;
`;
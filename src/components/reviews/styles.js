import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #122a4b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`;

export const Logo = styled.img`
    @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
        align-self: flex-start;
        margin-left: 10px;
    }

    width: 500px;
    height: 500px;
    align-self: center;
    object-fit: contain;
`;

export const HorizontalDivider = styled.div`
    border-bottom: 1px solid #feb700;
    width: 500px;
    margin-top: -200px;
    opacity: 0.2;
    align-self: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        margin-top: -100px;
        margin-left: 10%;
        width: 80%;
        align-self: flex-start;
    }
`;

export const Title = styled.h1`
    font-size: 35pt;
    color: #feb700;
    font-family: 'Optima';
    margin-left: 10%;
    font-weight: 200;
`;

export const NameQuestion = styled.h1`
    color: white;
    font-family: 'Optima';
    border-left: 1px solid white;
    font-size: 18pt;
    font-weight: 100;
    margin-bottom: 30px;
    padding-left: 20px;
    align-self: center;
    margin-right: 120px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        align-self: flex-start;
        margin-left: 10%;
        margin-right: 0px;
    }
`;

export const GetStartedContainer = styled.div`
    width: 320px;
    height: 120px;
    align-self: center;
    border: 1px solid #feb700;
    border-radius: 10px;
    margin-top: 100px;
    text-align: center;
    padding: 50px;
    cursor: pointer;
`;

export const GetStartedText = styled.p`
    font-weight: 100;
    font-family: 'Optima';
    font-size: 18pt;
    color: white;
`;

export const QuestionNumber = styled.h1`
    font-size: 30pt;
    color: white;
    font-family: 'Optima';
    margin-left: 10%;
`;

export const QuestionTitle = styled.p`
    color: white;
    font-family: 'Optima';
    border-left: 1px solid white;
    padding-left: 20px;
    margin-left: 10%;
    margin-top: 20px;
    font-size: 18pt;
    font-weight: 100;
    margin-bottom: 30px;
    margin-right: 5%;
`;

export const Options = styled.div`
    border-radius: 20px;
    border: 1px solid #feb700;
    color: white;
    padding: 10px;
    width: 70%;
    margin: 0px auto;
    margin-top: 20px;
    text-align: center;
    font-size: 18pt;
    font-weight: 100;
    font-family: 'Optima';
    cursor: pointer;
`;

export const OptionsSelected = styled.div`
    border-radius: 20px;
    border: 1px solid #feb700;
    color: white;
    padding: 10px;
    width: 70%;
    margin: 0px auto;
    margin-top: 20px;
    text-align: center;
    font-size: 18pt;
    font-weight: 100;
    font-family: 'Optima';
    background-color: #feb700;
    cursor: pointer;
`;

export const OthersTextAreaSmall = styled.textarea`
    border: solid 1px #feb700;
    border-radius: 10px;
    resize: none;
    height: 100px;
    width: 70%;
    margin-left: 15%;
    padding: 10px;
    margin-top: 30px;
    background-color: transparent;
    color: white;
    font-family: 'Optima';
    font-size: 12pt;

    ::placeholder {
        color: white;
        opacity: 0.7;
    }
`;

export const OthersTextArea = styled.textarea`
    border: solid 1px #feb700;
    border-radius: 10px;
    resize: none;
    height: 150px;
    width: 80%;
    margin-left: 10%;
    padding: 10px;
    margin-top: 30px;
    background-color: transparent;
    color: white;
    font-family: 'Optima';
    font-size: 12pt;

    ::placeholder {
        color: white;
        opacity: 0.7;
    }
`;

export const DownArrow = styled(IoIosArrowDown)`
    color: white;
    position: absolute;
    bottom: 10px;
    right: 30px;
    opacity: 0.5;
    width: 60px;
    height: 60px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        bottom: -50px;
        right: 20px;
    }
`;

export const UpArrow = styled(IoIosArrowUp)`
    cursor: pointer;
    color: white;
    opacity: 0.5;
    position: absolute;
    right: 30px;
    top: 120px;
    width: 60px;
    height: 60px;

    @media screen and (max-width: 768px) {
        right: 20px;
    }
`;

export const ErrorMsg = styled.p`
    font-family: 'Optima';
    color: red;
    align-self: center;
    margin-top: 20px;
    font-size: 12pt;
`;

export const EmptyStar = styled(BsStar)`
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        height: 30px;
        width: 30px;

        margin-right: 30px;
    }
`;

export const HalfStar = styled(BsStarHalf)`
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        height: 30px;
        width: 30px;

        margin-right: 30px;
    }
`;

export const FilledStar = styled(BsStarFill)`
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        height: 30px;
        width: 30px;

        margin-right: 30px;
    }
`;

export const Subtext = styled.p`
    font-family: 'Optima';
    font-size: 12pt;
    font-weight: 100;
    margin-top: 15px;
`;

export const NameInput = styled.input`
    border: 1px solid #feb700;
    border-radius: 10px;
    height: 50px;
    width: 320px;
    padding: 10px;
    background-color: transparent;
    color: white;
    font-family: 'Optima';
    font-size: 12pt;
    align-self: center;

    ::placeholder {
        color: white;
        opacity: 0.7;
    }
`;

export const SubmitButton = styled.input`
    width: 300px;
    height: 80px;

    text-align: center;
    border: 1px solid #feb700;
    font-family: 'Optima';
    font-size: 18pt;
    padding: 25px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    align-content: center;
    align-self: center;

    margin-top: 20px;
    background-color: transparent;
`;

export const TNCtext = styled.p`
    font-family: 'Optima';
    font-size: 12pt;
    width: 80%;
    align-self: center;
    margin-top: 10px;
`;

export const termsText = styled.li`
    font-family: 'Optima';
    font-size: 10pt;
`;

export const fullTNCText = styled.p`
    font-family: 'Optima';
    font-size: 12pt;
    width: 80%;
    color: white;
    margin-top: 15px;
`;

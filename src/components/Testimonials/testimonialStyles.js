import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
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

export const ReviewArticle = styled.article`
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    text-align: center;
    width: 800px;

    &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 768px) {
        width: 600px;
    }

    @media screen and (max-width: 480px) {
        width: 350px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;


    // this is for the "decoration behind the profile pic"
    /* :before {
        content: '';
        width: 100%;
        height: 100%;
        background: #000;
        position: absolute;
        top: -0.23rem;
        right: -0.5rem;
        border-radius: 50%;
    } */
`;

export const Image = styled.img`
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
`;

export const QuoteIconContainer = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: #000;
    color: #fff;
`;

export const Name = styled.h4`
    margin-bottom: 5px;
`;

export const JobTitle = styled.p`
    margin-bottom: 10px;
    font-family: 'LTAmberRegular';
`;

export const Message = styled.p`
    margin-bottom: 0.75rem;
    font-family: 'LTAmberRegular';
`;

export const PrevNextButton = styled.button`
    color: grey;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;

    :hover {
        color: #ffd700;
    }
`;

import React, { useState } from 'react';
import data from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import {
    TestimonialsContainer,
    TitleContainer,
    Underline,
    ReviewArticle,
    ImageContainer,
    Image,
    QuoteIconContainer,
    Name,
    JobTitle,
    Message,
    PrevNextButton,
} from './testimonialStyles';

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = data[index];

    const checkNumber = (number) => {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return (
        <>
            <TestimonialsContainer id="testimonials">
                <TitleContainer>
                    <h1 >Our Testimonials</h1>
                    <Underline />
                </TitleContainer>
                <ReviewArticle>
                    <ImageContainer>
                        <Image src={image} alt={name} />
                        <QuoteIconContainer>
                            <FaQuoteRight />
                        </QuoteIconContainer>
                    </ImageContainer>

                    <Name>{name}</Name>
                    <JobTitle>{job}</JobTitle>
                    <Message>{text}</Message>

                    <div>
                        <PrevNextButton>
                            <FaChevronLeft onClick={prevPerson} />
                        </PrevNextButton>
                        <PrevNextButton>
                            <FaChevronRight onClick={nextPerson} />
                        </PrevNextButton>
                    </div>
                </ReviewArticle>
            </TestimonialsContainer>
        </>
    );
};

export default Testimonials;

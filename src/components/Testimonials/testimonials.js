import React, { useState } from 'react';
import Icon1 from '../../assets/images/orca.jpeg';
import Video from '../../assets/videos/testimony-background.mp4';
import OrcaLogo from '../../assets/images/orca-logo-new.png';
import data from './data';

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
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
                    <h2 style={{fontSize: '2rem'}}>Our Testimonials</h2>
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

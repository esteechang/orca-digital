import React, { useState } from 'react';

import {
    ServicesContainer,
    ServicesH1,
    Content,
    Input,
    TextArea,
    ErrorMessage,
    SubmitButton,
} from './styles';

import banner from '../../assets/images/orca-banner.jpeg';

const About = () => {
    return (
        <ServicesContainer id="">
            {/* <Content img={banner}></Content> */}
            <img src={banner} style={{ width: '100%', height: '800px' }} />;
        </ServicesContainer>
    );
};

export default About;

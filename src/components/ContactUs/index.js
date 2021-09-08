import React from 'react';
import useForm from './useForm';
import validate from './validateForm';

import {
    ContactUsContainer,
    ContactUsH1,
    Input,
    TextArea,
    ErrorMessage,
    SubmitButton,
} from './styles';

const Result = () => {
    return (
        <>
            <p>Your message has been successfully submitted!</p>
            <p>We will get back to you soon.</p>
        </>
    );
};

const ContactUs = () => {
    // const [result, showResult] = useState(false);

    const { handleChange, values, handleSubmit, errors, isSubmitted } =
        useForm(validate);

    return (
        <ContactUsContainer id="contact">
            {/* <Content> */}
            <ContactUsH1>Contact Us</ContactUsH1>
            <div>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <ErrorMessage>{errors.name}</ErrorMessage>
                                )}
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <Input
                                    // type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <ErrorMessage>{errors.email}</ErrorMessage>
                                )}
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                />
                                {errors.subject && (
                                    <ErrorMessage>
                                        {errors.subject}
                                    </ErrorMessage>
                                )}
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <TextArea
                                    className="form-control"
                                    id=""
                                    cols="30"
                                    rows="8"
                                    placeholder="Your message"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                ></TextArea>
                                {errors.message && (
                                    <ErrorMessage>
                                        {errors.message}
                                    </ErrorMessage>
                                )}
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <SubmitButton
                                    type="submit"
                                    className="btn btn-info"
                                    value="Send Message"
                                ></SubmitButton>
                            </div>
                        </div>
                        <div className="row">
                            {isSubmitted && !errors ? <Result /> : null}
                        </div>
                    </form>
                </div>
            </div>
            {/* </Content> */}
        </ContactUsContainer>
    );
};

export default ContactUs;

import React from 'react';
import useForm from './useForm';
import validate from './validateForm';

import {
    ContactUsContainer,
    // ContactUsH1,
    Input,
    TextArea,
    ErrorMessage,
    SubmitButton,
    TitleContainer,
    Underline,
} from './styles';

const Result = () => {
    return (
        <div style={{ marginTop: 15 }}>
            <p>Your message has been successfully submitted!</p>
            <p>
                Thank you for enquiring with{' '}
                <p style={{ display: 'inline', color: 'gold' }}>Orca Digital</p>
                , we will get back to you soon.
            </p>
        </div>
    );
};
const FailedResult = () => {
    return (
        <div style={{ marginTop: 15 }}>
            <p>
                Sorry! An error has occurred with the system. Please try again.
            </p>
            <p>
                If this problem persists, you may choose to email us directly{' '}
                <a href="mailto:orcadigitalsg@orcadigital.online">here</a>.
            </p>
        </div>
    );
};

const ContactUs = () => {
    const {
        handleChange,
        values,
        handleSubmit,
        errors,
        isSubmitted,
        apiError,
    } = useForm(validate);

    return (
        <ContactUsContainer id="contact">
            <TitleContainer>
                <h1> Contact Us</h1>
                <Underline />
            </TitleContainer>
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
                                    value="Take action!"
                                />
                            </div>
                        </div>
                        <div className="row">
                            {isSubmitted ? <Result /> : null}
                        </div>

                        <div className="row">
                            {apiError ? <Result /> : null}
                        </div>

                        <div>{apiError ? <FailedResult /> : null}</div>
                    </form>
                </div>
            </div>
        </ContactUsContainer>
    );
};

export default ContactUs;

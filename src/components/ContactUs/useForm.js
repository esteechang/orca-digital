import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import emailjs from 'emailjs-com';

const useForm = (validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(errors);
        // console.log(isEmpty(errors));

        setErrors(validate(values));

        if (isEmpty(errors)) {
            emailjs
                .sendForm(
                    'orca-gmail',
                    'orca-contact-form',
                    e.target,
                    'user_b6crgEYtKgRbl2caV6b5h'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            setIsSubmitted(true);
        }

        // setIsSubmitting(true);
    };

    return { handleChange, values, handleSubmit, errors, isSubmitted };
};

export default useForm;

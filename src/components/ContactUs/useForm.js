import { useState } from 'react';
import emailjs from 'emailjs-com';

const useForm = (validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const validateForm = () => {
        if (!values.name.trim()) {
            errors.name = 'Name is required';
            return true;
        }

        // email
        if (!values.email) {
            errors.email = 'Email is required';
            return true;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Email address is invalid';
            return true;
        }

        // subject
        if (!values.subject) {
            errors.subject = 'Subject is required';
            return true;
        }

        // message
        if (!values.message) {
            errors.message = 'Message is required';
            return true;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [apiError, setApiError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));

        if (!validateForm()) {
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
                        setApiError(true);
                    }
                );
            console.log('ok email sent');
            setIsSubmitted(true);
        } else {
            console.log('check again');
        }
    };

    return {
        handleChange,
        values,
        handleSubmit,
        errors,
        isSubmitted,
        apiError,
    };
};

export default useForm;

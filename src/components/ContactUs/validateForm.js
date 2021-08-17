import React from 'react';

const validateForm = (values) => {
    let errors = {};
    // name
    if (!values.name.trim()) {
        errors.name = 'Name required';
    }

    // email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // subject
    if (!values.subject) {
        errors.subject = 'Subject is required';
    }

    // message
    if (!values.message) {
        errors.message = 'Message is required';
    }

    return errors;
};

export default validateForm;

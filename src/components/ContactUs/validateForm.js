const validateForm = (values) => {
    let errors = {};
    // name
    if (!values.name.trim()) {
        errors.name = 'Name is required';
    }

    // email
    if (!values.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // subject
    if (!values.subject.trim()) {
        errors.subject = 'Subject is required';
    }

    // message
    if (!values.message.trim()) {
        errors.message = 'Message is required';
    }
    
    return errors;
};

export default validateForm;

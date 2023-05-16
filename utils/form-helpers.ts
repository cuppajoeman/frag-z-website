function validateEmail(value: string) {
    let error;

    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateUsername(value: string) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    } else if (!value) {
        error = 'Required';
    } else if (value.length < 3) {
        error = 'Must be 3 characters or more';
    } else if (value.length > 15) {
        error = 'Must be 15 characters or less';
    }
    return error;
}

function validatePassword(value: string) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 8) {
        error = 'Must be 8 characters or more';
    }
    return error;
}

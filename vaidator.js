const validateName = (name) => {
    return /^[A-Z][a-zA-Z]*$/.test(name);
};

const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
};

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10,}$/.test(phoneNumber);
};

module.exports = (req, res, next) => {
    const { firstName, lastName, password, email, phoneNumber } = req.body;

    if (!validateName(firstName)) {
        return res.status(400).json({ error: 'First name must start with a capital letter and contain only letters.' });
    }

    if (!validateName(lastName)) {
        return res.status(400).json({ error: 'Last name must start with a capital letter and contain only letters.' });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long, contain at least one special character, one uppercase letter, and one numeric character.' });
    }

    if (!validateEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    if (!validatePhoneNumber(phoneNumber)) {
        return res.status(400).json({ error: 'Phone number must be at least 10 digits long.' });
    }

    next();
};

const { check } = require('express-validator');

// needed validators for login services
const loginValidation = [
    check('username').notEmpty().withMessage('Username is required'),
    check('password').isLength({min: 6}).withMessage("Passwords must be at least 6 characters long"),
    check('email').isEmail().withMessage('Invalid email format'),
];

// exports the functions
module.exports = {
    loginValidation
}
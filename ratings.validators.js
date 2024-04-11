const { check } = require('express-validator');

// needed validation for rating services
const ratingValidation = [
    check('value')
        .isIn([1, 2, 3, 4, 5]).withMessage('Rating value must be either 1, 2, 3, 4, or 5')
        .isInt().withMessage('Rating value must be an integer'),
    check('userID')
        .notEmpty().withMessage('User ID is required')
        .isInt().withMessage('User ID must be an integer'),
    check('recipeID')
        .notEmpty().withMessage('Recipe ID is required')
        .isInt().withMessage('Recipe ID must be an integer')
];

// exports the functions
module.exports = {
    ratingValidation,
};
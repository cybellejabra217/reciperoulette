const { check } = require('express-validator');

// needed validators for review services
const reviewValidation = [
    check('content')
        .notEmpty().withMessage('Review content is required'),
    check('recipeID')
        .notEmpty().withMessage('Recipe ID is required')
        .isInt({ min: 1 }).withMessage('Invalid recipe ID'),
    check('userID')
        .notEmpty().withMessage('User ID is required')
        .isInt({ min: 1 }).withMessage('Invalid user ID')
];

// exports the functions
module.exports = {
    reviewValidation,
};
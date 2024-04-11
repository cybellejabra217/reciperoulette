const { check } = require('express-validator');

// needed validators for recipe services
const recipeValidation = [
    check('title')
        .notEmpty().withMessage('Title is required'),
    check('description')
        .notEmpty().withMessage('Description is required'),
    check('ingredients')
        .notEmpty().withMessage('Ingredients are required'),
    check('instructions')
        .notEmpty().withMessage('Instructions are required'),
    check('difficultyLevel')
        .isIn(['Easy', 'Moderate', 'Hard']).withMessage('Invalid difficulty level'),
    check('cuisineID')
        .notEmpty().withMessage('Cuisine ID is required')
        .isInt({ min: 1 }).withMessage('Invalid cuisine ID'),
    check('calories')
        .isInt({ min: 0 }).withMessage('Calories must be a non-negative integer'),
    check('userID')
        .notEmpty().withMessage('User ID is required')
        .isInt({ min: 1 }).withMessage('Invalid user ID')
];

// exports the functions
module.exports = {
    recipeValidation,
};
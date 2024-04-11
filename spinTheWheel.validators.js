const { check } = require('express-validator');

// needed validators for spinTheWheel services
const spinTheWheelValidation = [
    check('dietaryPreferences')
        .notEmpty().withMessage('Dietary preferences are required'),
    check('calorieLimitPerMeal')
        .notEmpty().withMessage('Calorie limit per meal is required'),
    check('preferredCuisine')
        .notEmpty().withMessage('Preferred cuisine is required')
        .isIn(['Mexican', 'Italian', 'Lebanese', 'American', 'Japanese'])
        .withMessage('Invalid preferred cuisine')
];

// exports the functions
module.exports = {
    spinTheWheelValidation,
};
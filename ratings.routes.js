const express = require('express');
const router = express.Router();
const { createRatingController, getRatingsByRecipeIdController, getRatingsByUserIdController } = require('../controllers/ratings.controller');
const { ratingValidation } = require('../validation/ratings.validators');

// route for createRating function
router.post('/createRating', ratingValidation, createRatingController);
// route for getRatingsByRecipe function
router.get('/getRatingsByRecipe/:recipeId', ratingValidation, getRatingsByRecipeIdController);
// route for getRatingsByUser function
router.get('/getRatingsByUser/:userId', ratingValidation, getRatingsByUserIdController);

module.exports = router;
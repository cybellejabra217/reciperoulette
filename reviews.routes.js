const express = require('express');
const router = express.Router();
const { 
    createReviewController,
    getReviewsByRecipeIdController,
    getReviewsByUserIdController
} = require('../controllers/reviews.controller');
const { reviewValidation } = require('../Validation/reviews.validators');

// route for createReview function
router.post('/createReview', reviewValidation, createReviewController);
// route for getReviewsByRecipe function
router.get('/getReviewsByRecipe/:recipeId', getReviewsByRecipeIdController);
// route for getReviewsByUser function
router.get('/getReviewsByUser/:userId', getReviewsByUserIdController);

module.exports = router;
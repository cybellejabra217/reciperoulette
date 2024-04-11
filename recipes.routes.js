const express = require('express');
const router = express.Router();
const { 
    createRecipeController,
    getRecipesByCuisineController,
    getRecipesByIngredientsController,
    getRecipesByDietaryPreferencesController,
    getPictureByRecipeIDController,
    getRecipesByCriteriaController
} = require('../controllers/recipes.controllers');
const { recipeValidation } = require('../validation/recipes.validators');

// route for createRecipe function
router.post('/createRecipe', recipeValidation, createRecipeController);
// route for getRecipesByCuisine function
router.get('/getRecipesByCuisine/:cuisineName', recipeValidation, getRecipesByCuisineController);
// route for getRecipesByIngredients function
router.get('/getRecipesByIngredients/:ingredientName', recipeValidation, getRecipesByIngredientsController);
// route for getRecipesByDietaryPreferences function
router.get('/getRecipesByDietaryPreferences/:dietaryPreferences', recipeValidation, getRecipesByDietaryPreferencesController);
// route for getPicturesByRecipe function
router.get('/getPictureByRecipe/:recipeId', recipeValidation, getPictureByRecipeIDController);
// route for getRecipesByCriteria function
router.get('/getRecipesByCriteria', recipeValidation, getRecipesByCriteriaController);

module.exports = router;
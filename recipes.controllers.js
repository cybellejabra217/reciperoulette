// imports the needed services file
const { createRecipe, getRecipesByCuisine, getRecipesByIngredients, getRecipesByDietaryPreferences, getPictureByRecipeID, getRecipesByCriteria } = require("../Services/recipes.services");

// controller for createRecipe service to receive and handle requests
const createRecipeController = async(req, res) => {
    const recipeData = req.body;

    try {
        const result = await createRecipe(recipeData);
        res.status(201).json({message: "Recipe created successfully!", recipe_id: result.recipe_id});
    }
    catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// controller for getRecipesByCuisine service to receive and handle requests
const getRecipesByCuisineController = async (req, res) => {
    const { cuisineName} = req.params;

    try {
        const recipes = await getRecipesByCuisine(cuisineName);
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// controller for getRecipesByIngredients service to receive and handle requests
const getRecipesByIngredientsController = async (req, res) => {
    const {ingredientName} = req.params.body
    
    try {
        const recipes = await getRecipesByIngredients(ingredientName);
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// controller for getRecipesByDietaryPreferences service to receive and handle requests
const getRecipesByDietaryPreferencesController = async (req, res) => {
    const {dietaryPreferences} = req.params;

    try {
        const recipes = await getRecipesByDietaryPreferences(dietaryPreferences);
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// controller for getPictureByRecipeID service to receive and handle requests
const getPictureByRecipeIDController = async (req, res) => {
    const { recipeID} = req.params;

    try {
        const pictures = await getPictureByRecipeID(recipeID);
        res.status(200).json(pictures);
    }
    catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// controller for getRecipesByCriteria service to receive and handle requests
const getRecipesByCriteriaController = async(req, res) => {
    const {dietaryPreferences, calorieLimitPerMeal, preferredCuisine} = req.body;
    
    try {
        const recipes = await getRecipesByCriteria(dietaryPreferences, calorieLimitPerMeal, preferredCuisine);
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(500).json({ error: error.message});
    }
}

// exports the functions
module.exports = {
    createRecipeController,
    getRecipesByCuisineController,
    getRecipesByIngredientsController,
    getRecipesByDietaryPreferencesController,
    getPictureByRecipeIDController,
    getRecipesByCriteriaController
};
const { query } = require('../Database/database');

// service to create a recipe
const createRecipe = async (recipeData) => {
    try {
        // sql query to insert into recipe all required attributes
        let sql = `INSERT INTO recipe (title, description, ingredients, instructions, difficultyLevel, averageRating, cuisineID, calories, userID, dietaryPreferences, recipePictures) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [
            recipeData.title,
            recipeData.description,
            recipeData.ingredients,
            recipeData.instructions,
            recipeData.difficultyLevel,
            recipeData.averageRating,
            recipeData.cuisineID,
            recipeData.calories,
            recipeData.userID,
            recipeData.dietaryPreferences,
            recipeData.recipePictures
        ];
        const result = await query(sql, values);
        return { recipe_id: result.insertId };
    } catch (error) {
        throw new Error(error);
    }
};

// service to get recipes by cuisine
const getRecipesByCuisine = async (cuisineName) => {
    try {
        // sql query to retrieve all recipes belonging to a certain cuisineName
        let sql = `SELECT * FROM recipe WHERE cuisineID IN (SELECT cuisineID FROM cuisine WHERE cuisineName = ?)`;
        const recipes = await query(sql, [cuisineName]);
        return recipes;
    } catch (error) {
        throw new Error(error);
    }
};

// service to get recipes by ingredients
const getRecipesByIngredients = async (ingredientName) => {
    try {
        // sql query to retrieve all recipes that include a certain ingredient
        let sql = `SELECT * FROM recipe WHERE ingredients LIKE ?`;
        const recipes = await query(sql, [`%${ingredientName}%`]);
        return recipes;
    } catch (error) {
        throw new Error(error);
    }
};

// service to get recipes by dietary preferences
const getRecipesByDietaryPreferences = async (dietaryPreferences) => {
    try {
        // sql query to retrieve all recipes belonging to certain dietaryPreferences
        let sql = `SELECT * FROM recipe WHERE dietaryPreferences = ?`;
        const recipes = await query(sql, [dietaryPreferences]);
        return recipes;
    } catch (error) {
        throw new Error(error);
    }
};

// service to get picture by recipeID
const getPictureByRecipeID = async (recipeID) => {
    try {
        // sql query to select the recipePictures that belongs to a specific recipeID
        let sql = `SELECT recipePictures FROM recipe WHERE recipeID = ?`;
        const pictures = await query(sql, [recipeID]);
        return pictures;
    } catch (error) {
        throw new Error(error);
    }
};

// service to get recipes according to criteria (used by spinTheWheel service)
const getRecipesByCriteria = async (dietaryPreferences, calorieLimitPerMeal, preferredCuisine) => {
    try {
        // sql query to get all recipes that fit the specified dietaryPreferences, calorieLimit and cuisine
        let sql = `SELECT * FROM recipe 
                   JOIN cuisine ON recipe.cuisineID = cuisine.cuisineID 
                   WHERE dietaryPreferences = ? 
                   AND calories <= ? 
                   AND cuisine.cuisineName = ?`;
        const values = [
            dietaryPreferences,
            calorieLimitPerMeal,
            preferredCuisine
        ];

        const recipes = await query(sql, values);

        return recipes;
    } catch (error) {
        throw new Error(`Error retrieving recipes by criteria: ${error.message}`);
    }
};

// exports the functions
module.exports = {
    createRecipe,
    getRecipesByCuisine,
    getRecipesByIngredients,
    getRecipesByDietaryPreferences,
    getPictureByRecipeID,
    getRecipesByCriteria
};
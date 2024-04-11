const RecipeService = require('./recipes.services');

// service to spin the wheel (roulette)
const spinTheWheel = async (dietaryPreferences, calorieLimitPerMeal, preferredCuisine) => {
        try {
            // calls the getRecipesbyCriteria function from the recipes.services
            const recipes = await RecipeService.getRecipesByCriteria(dietaryPreferences, calorieLimitPerMeal, preferredCuisine);

            // checks if there are any recipes found with this criteria
            if (recipes.length === 0) {
                throw new Error('No recipe found at this time');
            }
            // uses the Math.random() function to choose a specific index
            const randomIndex = Math.floor(Math.random() * recipes.length);
            const randomRecipe = recipes[randomIndex];

            return randomRecipe;
        } catch (error) {
            throw new Error('Error spinning the wheel');
        }
    };

// exports the functions
module.exports = {spinTheWheel};
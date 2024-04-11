// imports the needed services file
const SpinService = require("../Services/spinTheWheel.services");

// controller for spinTheWheel service to receive and handle requests
const spinTheWheelController = async (req, res) => {
    const { dietaryPreferences, calorieLimitPerMeal, preferredCuisine } = req.body;

    try {
        const randomRecipe = await SpinService.spinTheWheel(dietaryPreferences, calorieLimitPerMeal, preferredCuisine);
        res.status(200).json(randomRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports the functions
module.exports = {
    spinTheWheelController
};
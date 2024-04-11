// imports the needed services file
const { createRating, getRatingsByRecipeId, getRatingsByUserId } = require("../services/ratings.services");

// controller for createRating service to receive and handle requests
const createRatingController = async (req, res) => {

    const ratingData = req.body;

    try {
        const result = await createRating(ratingData);
        res.status(201).json({ message: "Rating created successfully!", rating_id: result.rating_id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// controller for getRatingsByRecipeID service to handle and receive requests
const getRatingsByRecipeIdController = async (req, res) => {

    const { recipeId } = req.params;

    try {
        const ratings = await getRatingsByRecipeId(recipeId);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// controller for getRatingsByUserID service to handle and receive requests
const getRatingsByUserIdController = async (req, res) => {

    const { userId } = req.params;

    try {
        const ratings = await getRatingsByUserId(userId);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// export the functions
module.exports = {
    createRatingController,
    getRatingsByRecipeIdController,
    getRatingsByUserIdController
};
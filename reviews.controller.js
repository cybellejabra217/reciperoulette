// imports the needed services file
const { createReview, getReviewsByRecipeId, getReviewsByUserId } = require("../services/reviews.services");

// controller for createReview service to receive and handle requests
const createReviewController = async (req, res) => {
    const reviewData = req.body;

    try {
        const result = await createReview(reviewData);
        res.status(201).json({ message: "Review created successfully!", review_id: result.review_id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// controller for getReviewsByRecipeId service to receive and handle requests
const getReviewsByRecipeIdController = async (req, res) => {
    const { recipeId } = req.params;

    try {
        const reviews = await getReviewsByRecipeId(recipeId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// controller for getReviewsByUserId service to receive and handle requests
const getReviewsByUserIdController = async (req, res) => {
    const { userId } = req.params;

    try {
        const reviews = await getReviewsByUserId(userId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// exports the functions
module.exports = {
    createReviewController,
    getReviewsByRecipeIdController,
    getReviewsByUserIdController
};
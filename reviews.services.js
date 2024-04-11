const { query } = require('../Database/database');

// service to create review
const createReview = async (reviewData) => {
    try {
        // sql query to insert into review the content, reviewDate, recipeID, and userID
        let sql = `INSERT INTO review (content, reviewDate, recipeID, userID) VALUES (?, ?, ?, ?)`;
        const values = [
            reviewData.content,
            reviewData.reviewDate || new Date(),
            reviewData.recipeID,
            reviewData.userID
        ];
        const result = await query(sql, values);
        return { review_id: result.insertId };
    } catch (error) {
        throw new Error(error);
    }
}

// service to get reviews according to recipeID
const getReviewsByRecipeId = async (recipeId) => {
    try {
        // sql query to retrieve all reviews belonging to a specific recipeID
        let sql = `SELECT * FROM review WHERE recipeID = ?`;
        const reviews = await query(sql, [recipeId]);
        return reviews;
    } catch (error) {
        throw new Error(error);
    }
}

// service to get reviews by userID
const getReviewsByUserId = async (userId) => {
    try {
        // sql query to retrieve all reviews belonging to a specific userID
        let sql = `SELECT * FROM review WHERE userID = ?`;
        const reviews = await query(sql, [userId]);
        return reviews;
    } catch (error) {
        throw new Error(error);
    }
}

// exports the functions
module.exports = {
    createReview,
    getReviewsByRecipeId,
    getReviewsByUserId
};
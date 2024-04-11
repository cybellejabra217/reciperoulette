const { query } = require('../Database/database');

// service to create a rating
const createRating = async (ratingData) => {
    try {
        // sql query to insert into database the value, userID and recipeID inputted
        let sql = `INSERT INTO rating (value, userID, recipeID) VALUES (?, ?, ?)`;
        const values = [
            ratingData.value,
            ratingData.userID,
            ratingData.recipeID
        ];
        const result = await query(sql, values);

        await updateAverageRating(ratingData.recipeID);

        return { rating_id: result.insertId };
    } catch (error) {
        throw new Error(error);
    }
}

// service to get ratings by recipeID
const getRatingsByRecipeId = async (recipeId) => {
    try {
        // sql query to retrieve all ratings belonging to the inputted recipeID
        let sql = `SELECT * FROM rating WHERE recipeID = ?`;
        const ratings = await query(sql, [recipeId]);
        return ratings;
    } catch (error) {
        throw new Error(error);
    }
}

// service to get ratings by userID
const getRatingsByUserId = async (userId) => {
    try {
        // sql query to retreive all ratings belonging to the inputted userID
        let sql = `SELECT * FROM rating WHERE userID = ?`;
        const ratings = await query(sql, [userId]);
        return ratings;
    } catch (error) {
        throw new Error(error);
    }
}

// service to update average rating
const updateAverageRating = async (recipeId) => {
    try {
        // sql query to calculate the average of the values of the ratings belonging to the inputted recipeID
        let sql = `SELECT AVG(value) AS avgRating FROM rating WHERE recipeID = ?`;
        const result = await query(sql, [recipeId]);

        let avgRating = result[0].avgRating || 0;
        let updateSql = `UPDATE recipe SET averageRating = ? WHERE recipeID = ?`;
        await query(updateSql, [avgRating, recipeId]);
    } catch (error) {
        throw new Error(error);
    }
}

// exports the functions
module.exports = {
    createRating,
    getRatingsByRecipeId,
    getRatingsByUserId,
    updateAverageRating
};
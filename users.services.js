const { query } = require('../Database/database');

// service to update user bio
const updateUserBio = async (userId, newBio) => {
    try {
        // sql query to update the bio of the user with the specified userID
        let sql = `UPDATE User SET bio = ? WHERE UserID = ?`;
        const values = [
            newBio,
            userId
        ];
        await query(sql, values);
        return { user_id: userId };
    } catch (error) {
        throw new Error(error);
    }
}

// exports the functions
module.exports = {
    updateUserBio
};
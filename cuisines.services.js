const { query } = require('../Database/database');

// service to get all cuisines
const getCuisines = async () => {
    try {
        // sql query to select all from cuisine
        const sql = `SELECT * FROM cuisine`;
        const cuisines = await query(sql);
        return cuisines;
    } catch (error) {
        throw new Error('Error fetching cuisines');
    }
}

// exports the functions
module.exports = {
    getCuisines
};
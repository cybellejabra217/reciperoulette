// imports the needed services file
const { getCuisines } = require("../services/cuisines.services");

// controller for the getCuisines service to receive and handle requests
const getCuisinesController = async (req, res) => {
    try {
        const cuisines = await getCuisines();
        res.send(cuisines);
    } catch (error) {
        res.status(500).send("Error fetching cuisines");
    }
};

// exports the functions
module.exports = {
    getCuisinesController
};
// imports the needed services file
const UserService = require("../services/users.services");

// controller for updateUserBio service to receive and handle requests
async function updateUserBioController (req, res) {
    const { userId } = req.body;
    const { newBio } = req.body;

    try {
        const result = await UserService.updateUserBio(userId, newBio);
        res.status(200).json({ message: "User bio updated successfully!", user_id: result.user_id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// exports the functions
module.exports = {
    updateUserBioController
};
// imports the needed services file
const { registerUser, loginUser } = require("../services/login.services");
const { validationResult } = require('express-validator');

// controller for registerUser service to receive and handle requests
async function registerUserController (req, res) {

    // checks validation and returns if any errors were found
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 

    const { username, password, confirmPassword, email } = req.body;

    try {
        const userId = await registerUser(username, password, confirmPassword, email);
        res.status(201).json({ message: "User registered successfully!", userId });
    } catch (error) {
        console.error("Error registering user: ", error);
        res.status(500).json({ message: "Error registering user", error: error.message});
    }
};


// controller for loginUser service to receive and handle requests
async function loginUserController (req, res) {

    // checks validation and returns if any errors were found
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status()
    }

    const { username, password } = req.body;

    try {
        const loginResult = await loginUser(username, password);
        res.json(loginResult);
    } catch (error) {
        console.error("Error loggin in: ", error);
        res.status(500).json({ message: "Error loggin in", error: error.message});
    }
};

// exports the functions
module.exports = {
    registerUserController,
    loginUserController
};
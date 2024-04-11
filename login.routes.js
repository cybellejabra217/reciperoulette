const express = require('express');
const router = express.Router();
const { registerUserController, loginUserController } = require('../Controllers/login.controller');
const { loginValidation } = require('../validation/login.validators');

// route for register function
router.post('/register', loginValidation, registerUserController);
// route for login function
router.post('/login', loginValidation, loginUserController);

module.exports = router; 
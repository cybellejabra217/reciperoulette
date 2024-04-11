const express = require('express');
const router = express.Router();
const { spinTheWheelController } = require('../controllers/spinTheWheel.controller');
const { spinTheWheelValidation } = require('../Validation/spinTheWheel.validators');

// route for spinTheWheel function
router.get('/spinTheWheel', spinTheWheelValidation, spinTheWheelController);

module.exports = router;
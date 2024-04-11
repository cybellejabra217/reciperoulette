const express = require('express');
const router = express.Router();
const { getCuisinesController } = require('../controllers/cuisines.controller');


// route for getCuisines function
router.get('/getCuisines', getCuisinesController);

module.exports = router;
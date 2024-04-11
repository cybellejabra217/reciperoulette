const express = require('express');
const router = express.Router();
const {updateUserBioController } = require('../Controllers/users.controller');

// route for updateUserBio function
router.post('/updateUserBio', updateUserBioController);

module.exports = router;
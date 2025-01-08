
const express = require('express');
const { getAllTravels } = require('../controllers/main-controller');

const router = express.Router();

// Define the route to get all travel requests
router.get('/', getAllTravels);

module.exports = router;
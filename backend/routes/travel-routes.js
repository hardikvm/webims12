const express = require('express');
const { createTravel } = require('../controllers/travel-controller');

const router = express.Router();

// Route to create travel entry
router.post('/create', createTravel);

module.exports = router;
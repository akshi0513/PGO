const express = require('express');
const router = express.Router();
const { getOwnerPGs, createPG, updatePG, deletePG } = require('../controllers/ownerController');
const { protect } = require('../middleware/authMiddleware'); // Middleware to verify the token

// Routes for managing PG listings (Owner only)
router.get('/mypgs', protect, getOwnerPGs); // Get all PGs for the owner
router.post('/create', protect, createPG); // Create a new PG listing
router.put('/update/:id', protect, updatePG); // Update a PG listing
router.delete('/delete/:id', protect, deletePG); // Delete a PG listing

module.exports = router;

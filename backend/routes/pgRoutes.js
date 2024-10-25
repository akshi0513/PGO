const express = require('express');
const { protect } = require('../middleware/authMiddleware'); // Protect routes
const {
    createPG,
    getAllPGs,
    getPGById,
    updatePG,
    deletePG,
} = require('../controllers/pgController');

const router = express.Router();

router.route('/').post(protect, createPG).get(getAllPGs); // POST for creating a PG, GET for fetching all PGs
router.route('/:id').get(getPGById).put(protect, updatePG).delete(protect, deletePG); // GET, PUT, DELETE for a specific PG

module.exports = router;

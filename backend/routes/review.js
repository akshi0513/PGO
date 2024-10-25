const express = require('express');
const { createReview, getReviews } = require('../controllers/review');
const router = express.Router();

router.post('/', createReview);
router.get('/:pgId', getReviews);

module.exports = router;
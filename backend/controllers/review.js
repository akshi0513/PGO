const Review = require('../models/review');

exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ pgId: req.params.pgId }).populate('userId');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
import React, { useState } from 'react';
import { createReview } from '../api/api';

const ReviewForm = ({ pgId }) => {
    const [review, setReview] = useState({
        pgId: pgId,
        userId: '',  // Fill with actual user ID
        rating: 1,
        message: ''
    });

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReview(review);
            alert('Review submitted!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Rating: </label>
            <select name="rating" value={review.rating} onChange={handleChange} required>
                {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>{star} Star</option>
                ))}
            </select>
            <textarea name="message" value={review.message} onChange={handleChange} required placeholder="Write your review"></textarea>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
const mongoose = require('mongoose');

// Define the schema for the contact query
const contactQuerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
    },
    phone: {
        type: String,
        required: true, // Phone is required
    },
    city: {
        type: String,
        required: true, // City is required
    },
    email: {
        type: String,
        required: true, // Email is required
        match: /.+\@.+\..+/, // Basic email format validation
    },
    message: {
        type: String,
        required: true, // Message is required
    },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

// Export the model based on the schema
module.exports = mongoose.model('ContactQuery', contactQuerySchema);
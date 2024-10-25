const contactQuery = require('../models/contactquery');

// Handle form submission
exports.submitContactForm = async (req, res) => {
    try {
        // Create a new instance of ContactQuery with the request body
        const newQuery = new contactQuery(req.body);

        // Save the new contact query to the database
        await newQuery.save();

        // Send a success response
        res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        
        // Send an error response
        res.status(500).json({ message: 'Error submitting contact form', error: error.message });
    }
};
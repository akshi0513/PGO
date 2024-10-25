const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup
const signup = async (req, res) => {
    const { username, password, email, role } = req.body; 

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'User already exists' });
        }

        // Create new user
        const user = await User.create({ username, password, email, role: role || 'user' }); // Default to 'user' if no role provided
        res.status(201).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Login
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        // Generate a token with user role
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.status(200).json({
            success: true,
            token,
            role: user.role, 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    signup,
    login,
};

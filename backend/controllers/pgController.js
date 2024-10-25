const PG = require('../models/PG');

// Create a new PG listing
const createPG = async (req, res) => {
    const { title, location, stayType, price, description, amenities, sharingType, roomType, photos, availability } = req.body;

    try {
        const pg = await PG.create({
            title,
            location,
            stayType,
            price,
            description,
            amenities,
            sharingType,
            roomType,
            ownerId: req.user.id, // Get the owner's ID from the JWT token
            photos,
            availability,
        });
        res.status(201).json({
            success: true,
            data: pg,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Get all PG listings
const getAllPGs = async (req, res) => {
    try {
        const pgs = await PG.find();
        res.status(200).json({
            success: true,
            data: pgs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Get a single PG listing by ID
const getPGById = async (req, res) => {
    try {
        const pg = await PG.findById(req.params.id);
        if (!pg) {
            return res.status(404).json({ success: false, error: 'PG not found' });
        }
        res.status(200).json({
            success: true,
            data: pg,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Update a PG listing
const updatePG = async (req, res) => {
    try {
        const pg = await PG.findById(req.params.id);
        if (!pg) {
            return res.status(404).json({ success: false, error: 'PG not found' });
        }

        // Ensure the user is the owner of the PG
        if (pg.ownerId.toString() !== req.user.id) {
            return res.status(403).json({ success: false, error: 'Not authorized to update this PG' });
        }

        const updatedPG = await PG.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            data: updatedPG,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Delete a PG listing
const deletePG = async (req, res) => {
    try {
        const pg = await PG.findById(req.params.id);
        if (!pg) {
            return res.status(404).json({ success: false, error: 'PG not found' });
        }

        // Ensure the user is the owner of the PG
        if (pg.ownerId.toString() !== req.user.id) {
            return res.status(403).json({ success: false, error: 'Not authorized to delete this PG' });
        }

        await pg.remove();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    createPG,
    getAllPGs,
    getPGById,
    updatePG,
    deletePG,
};

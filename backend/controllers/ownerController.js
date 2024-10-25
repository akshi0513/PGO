const PG = require('../models/PG');
const User = require('../models/User');

// Get all PG listings for a specific owner
const getOwnerPGs = async (req, res) => {
    try {
        const ownerPGs = await PG.find({ owner: req.user._id });
        res.status(200).json({ success: true, data: ownerPGs });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Create a new PG listing for the owner
const createPG = async (req, res) => {
    const { title, location, price, amenities, description, photos } = req.body;
    try {
        const newPG = new PG({
            owner: req.user._id,
            title,
            location,
            price,
            amenities,
            description,
            photos,
        });
        await newPG.save();
        res.status(201).json({ success: true, data: newPG });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to create PG listing' });
    }
};

// Update a PG listing
const updatePG = async (req, res) => {
    try {
        const pg = await PG.findOne({ _id: req.params.id, owner: req.user._id });
        if (!pg) {
            return res.status(404).json({ success: false, message: 'PG not found' });
        }

        const updatedData = req.body;
        const updatedPG = await PG.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.status(200).json({ success: true, data: updatedPG });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Delete a PG listing
const deletePG = async (req, res) => {
    try {
        const pg = await PG.findOne({ _id: req.params.id, owner: req.user._id });
        if (!pg) {
            return res.status(404).json({ success: false, message: 'PG not found' });
        }

        await PG.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'PG listing deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
    getOwnerPGs,
    createPG,
    updatePG,
    deletePG,
};

const mongoose = require('mongoose');

const pgSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true },
    location: { 
        type: String, 
        required: true },
    stayType: { 
        type: String, 
        enum: ['Entire Place', 'Private Room', 'Shared Room'], 
        required: true },
    price: { 
        type: Number, 
        required: true },
    description: { 
        type: String, 
        required: true },
    amenities: { 
        type: [String], 
        required: true }, // e.g., ["Wi-Fi", "Laundry", "Kitchen"]
    sharingType: { 
        type: String, 
        enum: ['Shared', 'Private'], 
        required: true },
    roomType: { 
        type: String, 
        enum: ['Single', 'Double', 'Suite'], 
        required: true },
    ownerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true },
    photos: { 
        type: [String] }, // Array of image URLs
    availability: { 
        type: [Date] }, // List of available dates
        
}, { timestamps: true });

const PG = mongoose.model('PG', pgSchema);
module.exports = PG;

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    pgId: { type: mongoose.Schema.Types.ObjectId, ref: 'PG', required: true },
    shareType: { type: String, required: true },
    numberOfMonths: { type: Number, required: true },
    numberOfGuests: { type: Number, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
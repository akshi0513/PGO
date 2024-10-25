const Booking = require('../models/booking');

exports.createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('pgId').populate('userId');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
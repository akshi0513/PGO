import React, { useState } from 'react';
import { createBooking } from '../api/api';

const BookingForm = () => {
    const [booking, setBooking] = useState({
        pgId: '',  // Fill with actual PG ID
        shareType: '',
        numberOfMonths: 1,
        numberOfGuests: 1,
        checkInDate: '',
        checkOutDate: '',
        userId: ''  // Fill with actual user ID
    });

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBooking(booking);
            alert('Booking successful!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select name="shareType" onChange={handleChange} required>
                <option value="">Select Share Type</option>
                <option value="private-room, non-AC">Private Room, Non-AC</option>
                <option value="2-share, non-AC">2-Share, Non-AC</option>
                <option value="3-share, non-AC">3-Share, Non-AC</option>
                <option value="private-room, AC">Private Room, AC</option>
                <option value="2-share, AC">2-Share, AC</option>
                <option value="3-share, AC">3-Share, AC</option>
            </select>
            <input type="number" name="numberOfMonths" value={booking.numberOfMonths} onChange={handleChange} required placeholder="Number of Months" />
            <input type="number" name="numberOfGuests" value={booking.numberOfGuests} onChange={handleChange} required placeholder="Number of Guests" />
            <input type="date" name="checkInDate" value={booking.checkInDate} onChange={handleChange} required placeholder="Check-in Date" />
            <input type="date" name="checkOutDate" value={booking.checkOutDate} onChange={handleChange} required placeholder="Check-out Date" />
            <button type="submit">Start Booking</button>
        </form>
    );
};

export default BookingForm;
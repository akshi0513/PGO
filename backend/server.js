const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

const authRoutes = require('./routes/authRoutes');
const pgRoutes = require('./routes/pgRoutes');
const bookingRoutes = require('./routes/booking');
const reviewRoutes = require('./routes/review');
const contactRoutes = require('./routes/contactRoute');
const ownerRoutes = require('./routes/ownerRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pglocations', pgRoutes); // PG listing management routes
app.use('/api/booking', bookingRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api', contactRoutes);
app.use('/api/owner', ownerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

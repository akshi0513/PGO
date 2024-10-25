const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'owner' }, // Set the role as 'owner'
});

module.exports = mongoose.model('Owner', ownerSchema);

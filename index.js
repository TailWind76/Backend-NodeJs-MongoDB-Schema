const mongoose = require('mongoose');

// Define the schema for your data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema without password hashing
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema without password hashing
const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Note', noteSchema);

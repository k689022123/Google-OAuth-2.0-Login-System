const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  googleID: { type: String },
  date: { type: Date, default: Date.now },
  thumbnail: { type: String },
  email: { type: String },
  password: { type: String, minlength: 8, maxlength: 1024 },
});

module.exports = mongoose.model('User', userSchema);

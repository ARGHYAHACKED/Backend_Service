const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Required field
  email: { type: String, required: true, unique: true }, // Required and must be unique
  phone: { type: String, required: true },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'converted'], default: 'new' }, // Limited options
  createdAt: { type: Date, default: Date.now } // Automatically set the date
});

module.exports = mongoose.model('Lead', leadSchema);

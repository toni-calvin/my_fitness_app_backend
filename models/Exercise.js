const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  muscleGroups: [String], 
  notes: { type: String },
});

module.exports = mongoose.model('Exercise', exerciseSchema);
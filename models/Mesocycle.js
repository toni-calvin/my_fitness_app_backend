const mongoose = require('mongoose');

const MesocycleSchema = new mongoose.Schema({
  title: String,
  description: String,
  progress: Number,
});

module.exports = mongoose.model('Mesocycle', MesocycleSchema);
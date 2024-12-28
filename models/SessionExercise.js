const mongoose = require('mongoose');

const sessionExerciseSchema = new mongoose.Schema({
  exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
  sessionDate: { type: Date, default: Date.now },
  comments: { type: String },
  sets: [
    {
      rir: { type: Number },
      reps: { type: Number },
      weight: { type: Number },
      performedReps: { type: Number },
      performedWeight: { type: Number },
    },
  ],
});

module.exports = mongoose.model('SessionExercise', sessionExerciseSchema);
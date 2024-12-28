const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Get all exercises
router.get('/', async (req, res) => {
  console.log('GET /api/exercises');
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new exercise
router.post('/', async (req, res) => {
  console.log('POST /api/exercises');
  const exercise = new Exercise({
    name: req.body.name,
    muscleGroups: req.body.muscleGroups,
    notes: req.body.notes,
  });

  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
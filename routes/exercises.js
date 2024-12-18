const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Get all exercises
router.get('/', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Add a new exercise
router.post('/', async (req, res) => {
  const newExercise = new Exercise(req.body);
  await newExercise.save();
  res.json(newExercise);
});

module.exports = router;
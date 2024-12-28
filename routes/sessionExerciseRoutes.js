const express = require('express');
const router = express.Router();
const SessionExercise = require('../models/SessionExercise');

// Get all session exercises
router.get('/', async (req, res) => {
console.log('GET /api/session-exercises');
  try {
    const sessions = await SessionExercise.find().populate('exerciseId');
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add session exercise log
router.post('/', async (req, res) => {
    console.log('POST /api/session-exercises');
  const session = new SessionExercise({
    exerciseId: req.body.exerciseId,
    comments: req.body.comments,
    sets: req.body.sets,
  });

  try {
    const newSession = await session.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
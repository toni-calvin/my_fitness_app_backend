const express = require('express');
const router = express.Router();
const Mesocycle = require('../models/Mesocycle');

// Get all mesocycles
router.get('/', async (req, res) => {
  const mesocycles = await Mesocycle.find();
  res.json(mesocycles);
});

// Add a new mesocycle
router.post('/', async (req, res) => {
  const newMesocycle = new Mesocycle(req.body);
  await newMesocycle.save();
  res.json(newMesocycle);
});

module.exports = router;
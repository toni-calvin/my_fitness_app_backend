const mongoose = require('mongoose');
const Exercise = require('./models/Exercise');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const exercises = [
  { name: 'Leg Press 45°', muscleGroups: ['Quads', 'Glutes'], notes: 'Focus on depth.' },
  { name: 'Romanian Deadlift', muscleGroups: ['Hamstrings', 'Glutes'], notes: 'Hinge at hips.' },
  { name: 'Bulgarian Split Squat', muscleGroups: ['Quads'], notes: 'Use dumbbells for balance.' },
  { name: 'Leg Curl', muscleGroups: ['Hamstrings'], notes: 'Controlled tempo.' },
];

async function seedData() {
  try {
    await Exercise.deleteMany();
    await Exercise.insertMany(exercises);
    console.log('Database Seeded!');
    mongoose.disconnect();
  } catch (err) {
    console.error('Seeding Error:', err);
    mongoose.disconnect();
  }
}

seedData();
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const exerciseRoutes = require('./routes/exerciseRoutes');
const sessionExerciseRoutes = require('./routes/sessionExerciseRoutes');

app.use('/api/exercises', exerciseRoutes);
app.use('/api/session-exercises', sessionExerciseRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => console.log('MongoDB Connected'));
db.on('error', (err) => console.error('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
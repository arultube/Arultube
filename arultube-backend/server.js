const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes'); // ✅ Route import

// Load environment variables from .env file
dotenv.config();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// ✅ Health check route for Render
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// ✅ Video upload API route
app.use('/api/videos', videoRoutes);

// ✅ Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

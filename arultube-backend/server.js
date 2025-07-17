// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const videoRoutes = require('./routes/videoRoutes');
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());

// ✅ Health check route
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// ✅ Video API route
app.use('/api/videos', videoRoutes);

// ✅ MongoDB connect and server start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

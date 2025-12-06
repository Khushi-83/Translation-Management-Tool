const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const translationsRoute = require('./routes/translations');

const app = express();
app.use(express.json());
app.use(cors());

// API
app.use('/api/translations', translationsRoute);

// simple health
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// Serve frontend in production (if you build the frontend into /dist)
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo connected');
    app.listen(port, () => console.log(`Server running on ${port}`));
  })
  .catch(err => {
    console.error('DB err', err);
  });

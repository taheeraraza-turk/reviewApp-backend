require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(cors({
  origin: 'https://review-app-frontend-kappa.vercel.app', // allowed origin
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/reviews', reviewRoutes);

// health
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/entrepreneur_club', { useNewUrlParser: true, useUnifiedTopology: true });

const entrepreneurSchema = new mongoose.Schema({
  name: String,
  businessType: String,
  offering: String,
  asking: String,
});

const Entrepreneur = mongoose.model('Entrepreneur', entrepreneurSchema);

app.use(cors());
app.use(express.json());

// Registration Route
app.post('/register', async (req, res) => {
  const { name, businessType, offering, asking } = req.body;

  const newEntrepreneur = new Entrepreneur({
    name,
    businessType,
    offering,
    asking
  });

  try {
    await newEntrepreneur.save();
    res.status(201).send({ message: 'Registration Successful', entrepreneur: newEntrepreneur });
  } catch (error) {
    res.status(500).send({ message: 'Registration Failed', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

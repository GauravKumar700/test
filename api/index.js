// api/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../db');
const authRoutes = require('../routes/auth');

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
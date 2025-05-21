// api/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../db.js');
const serverless = require('serverless-http');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

module.exports = serverless(app);

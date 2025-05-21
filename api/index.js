// api/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../db');
const serverless = require('serverless-http'); // ✅ NEW

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// ✅ Export the serverless-compatible handler
module.exports = serverless(app);

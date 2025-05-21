// api/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../db.js');
const hello = require('../routes/hello.js')

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/hello', hello)
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;

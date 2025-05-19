import express from 'express';
import connectDB from '../server/database/db.js';

const app = express();
connectDB()

app.get('/', (req, res) => {
    res.send('Express on Vercel');
});

export default app;

import express from 'express';
import connectDB from '../server/database/db';

connectDB()
const app = express();

app.get('/', (req, res) => {
    res.send('Express on Vercel');
});

export default app;

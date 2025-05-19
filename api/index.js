import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Express on Vercel');
});

// ✅ Do NOT call app.listen() on Vercel

export default app;

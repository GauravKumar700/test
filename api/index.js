import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from '../database/db.js';
import userRoute from '../routes/user.route.js';
import courseRoute from '../routes/course.route.js';
import mediaRoute from '../routes/media.route.js';
import purchaseRoute from '../routes/purchaseCourse.route.js';
import courseProgressRoute from '../routes/courseProgress.route.js';

dotenv.config();

const startServer = async () => {
    try {
        await connectDB();
        console.log("DB connected. Starting server...");
    } catch (err) {
        console.error("Failed to connect to DB", err);
        process.exit(1);
    }
};

startServer();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'https://lms-blue-nine.vercel.app',
    credentials: true,
}));

app.use('/api/v1/media', mediaRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/purchase', purchaseRoute);
app.use('/api/v1/progress', courseProgressRoute);

app.get('/', (req, res) => {
    res.send('Hi from Express on Vercel');
});

export default app;
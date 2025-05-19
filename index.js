// Import the Express library
import express from 'express';

// Create an Express application
const app = express();

// Set a port number
const PORT = 3000;

// Define a route for the root URL (/)
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
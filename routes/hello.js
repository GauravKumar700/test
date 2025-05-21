const express = require('express');
const router = express.Router();

router.get('/register', async (req, res) => {
    try {
        res.send("hello route")
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
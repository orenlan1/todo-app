const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Login route');
});

router.post('/register', (req, res) => {
    res.send('Register route');
});


module.exports = router;

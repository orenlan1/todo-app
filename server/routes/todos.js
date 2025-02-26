const express = require('express');

const router = express.Router(); 

router.get('/', (req, res) => {
    res.send('Get all todos');
});

router.post('/create', (req, res) => {
    res.send('Create a todo');
});

module.exports = router;
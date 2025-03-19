const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/login', userController.postLogin);

router.post('/register', userController.postCreateUser);
  
router.post('/logout', userController.postLogout);

router.get('/session', (req, res) => {
    if (req.session.userId) {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }   
});

module.exports = router;

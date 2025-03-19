const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/login', userController.postLogin);

router.post('/register', userController.postCreateUser);
  
router.post('/logout', userController.postLogout);

module.exports = router;

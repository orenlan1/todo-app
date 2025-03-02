const express = require('express');

const todoController = require('../controllers/TodoController');

const router = express.Router(); 

router.get('/:id', todoController.getAllTodos);

router.post('/create', todoController.postCreateTodo);

router.delete('/:id', todoController.deleteTodo);

router.put('/:id', todoController.updateTodo);

module.exports = router;
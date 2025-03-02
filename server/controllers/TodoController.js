const Todo = require('../models/todo');


exports.getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        next(err);
    }
}
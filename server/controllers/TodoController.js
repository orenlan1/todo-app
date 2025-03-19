const Todo = require('../models/todo');
const mongoose = require('mongoose');

exports.getAllTodos = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    userId = req.session.userId;
    try {
        const count = await Todo.countDocuments({user : userId});
        if (count === 0) {
            return res.status(200).json({ todos: [] });
        }
        else
        {
            const todos = await Todo.find({ user: userId });
            res.json(todos);
        }
    } catch (err) {
        console.log(err);
    }
}

exports.postCreateTodo = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const { title, description} = req.body;
        const userId = req.session.userId;
        const todo = new Todo({
            title: title,
            description: description,
            user: userId,
        });
        await todo.save();
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
    }
}


exports.deleteTodo = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const todoId  = req.params.id;
        const todo = await Todo.findByIdAndDelete(todoId);
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
    }
}

exports.updateTodo = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findById(id);
        todo.title = title;
        todo.description = description;
        todo.completed = completed;
        await todo.save();
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
    }
}
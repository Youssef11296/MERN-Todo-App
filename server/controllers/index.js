// Mongoose
const mongoose = require("mongoose");
// Todo model
const Todo = require("../models/todo");
const User = require("../models/user");
// Get all todos
const getAllTodos = async(req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Add todo
const addTodo = async(req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title });
        // Save the new todo
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// Delete todo
const deleteTodo = async(req, res) => {
    try {
        const { id } = req.params;
        // If the id is not valid send a 404 message
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ message: "No found todo with this id" });
        // If the id is valid delete the todo that has the same id & send the id as a response
        await Todo.findByIdAndDelete(id);
        res.send(id);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Update todo
const updateTodo = async(req, res) => {
    try {
        const { id } = req.params;
        const todo = req.body;
        // If the id is not valid send a 404 message
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ message: "No found todo with this id" });
        const updatedTodo = await Todo.findByIdAndUpdate(id, todo, {
            new: true,
        });
        res.json(updatedTodo);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Get user data
const getUserData = async(req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Export all controllers
module.exports = { getAllTodos, addTodo, deleteTodo, updateTodo, getUserData };
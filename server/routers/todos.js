const express = require("express");
const {
    getAllTodos,
    addTodo,
    deleteTodo,
    updateTodo,
} = require("../controllers");

const router = express.Router();

// Get all todos
router.get("/", getAllTodos);

// Add todo
router.post("/create", addTodo);

// Delete todo
router.delete("/:id", deleteTodo);

// Update toodo
router.patch("/:id", updateTodo);

// Export the router
module.exports = router;
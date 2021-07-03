import axios from "axios";

// Main url
const url = "http://localhost:5000/todos";

// Get all todos
export const fetchTodos = () => axios.get(url);

// Add todo
export const addTodo = (todo) => axios.post(`${url}/create`, todo);

// Delete todo
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
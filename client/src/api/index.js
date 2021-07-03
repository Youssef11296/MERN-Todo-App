import axios from "axios";

// Main url
const url = "http://localhost:5000/todos/";

// Get all todos
export const fetchTodos = () => axios.get(url);
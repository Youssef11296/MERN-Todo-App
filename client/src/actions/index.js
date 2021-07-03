import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

// Action creators
// Fetch all todos
export const fetchTodos = () => async(dispatch) => {
    try {
        const { data } = await api.fetchTodos();
        dispatch({ type: actionTypes.FETCH_TODOS, payload: data });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

// Add todo
export const addTodo = (todoData) => async(dispatch) => {
    try {
        const { data } = await api.addTodo(todoData);
        dispatch({ type: actionTypes.ADD_TODO, payload: data });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

// Delete todo
export const deleteTodo = (id) => async(dispatch) => {
    try {
        const { data } = await api.deleteTodo(id);
        dispatch({ type: actionTypes.DELETE_TODO, payload: data });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
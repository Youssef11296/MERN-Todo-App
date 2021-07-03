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

// Update todo
export const updateTodo = (id, updatedTodo) => async(dispatch) => {
    try {
        const { data } = await api.updateTodo(id, updatedTodo);
        dispatch({ type: actionTypes.UPDATE_TODO, payload: data });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

// Get current todo id
export const getCurrentTodoId = (id) => (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_CURRENT_ID, payload: id });
    } catch (error) {
        console.log("Some error occured");
    }
};

// Set current id to null
export const setCurrentId = () => (dispatch) => {
    try {
        dispatch({ type: actionTypes.SET_CURRENT_ID, payload: null });
    } catch (error) {
        console.log("Some error occured");
    }
};
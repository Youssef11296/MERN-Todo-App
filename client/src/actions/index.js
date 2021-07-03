import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

export const fetchTodos = () => async(dispatch) => {
    try {
        const { data } = await api.fetchTodos();
        dispatch({ type: actionTypes.FETCH_TODOS, payload: data });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
import { combineReducers } from "redux";
import todos from "./todos";
import currentTodoId from "./todo";
// Combine all reducers
export default combineReducers({
    todos,
    currentTodoId,
});
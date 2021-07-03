import { combineReducers } from "redux";
import todos from "./todos";

// Combine all reducers
export default combineReducers({
    todos,
});
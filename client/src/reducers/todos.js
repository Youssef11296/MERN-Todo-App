export default (todos = [], action) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return action.payload;
        case "ADD_TODO":
            return [...todos, action.payload];
        case "DELETE_TODO":
            return todos.filter((todo) => todo._id !== action.payload);
        case "UPDATE_TODO":
            return todos.map((todo) =>
                todo._id === action.payload._id ? action.payload : todo
            );
        default:
            return todos;
    }
};
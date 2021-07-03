export default (todos = [], action) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return action.payload;
        case "ADD_TODO":
            return [...todos, action.payload];
        case "DELETE_TODO":
            return todos.filter((todo) => todo._id !== action.payload);
        default:
            return todos;
    }
};
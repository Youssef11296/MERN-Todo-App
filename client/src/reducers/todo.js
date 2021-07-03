export default (currentTodoId = null, action) => {
    switch (action.type) {
        case "GET_CURRENT_ID":
            return action.payload;
        case "SET_CURRENT_ID":
            return action.payload;
        default:
            return currentTodoId;
    }
};
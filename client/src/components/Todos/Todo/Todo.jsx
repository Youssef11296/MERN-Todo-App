// Redux
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../actions";
// Styles
import "./Todo.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  // Handle delete
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo">
      <div className="todo__title">
        <h4>{todo.title}</h4>
      </div>
      <button className="todo__delBtn" onClick={() => handleDelete(todo._id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;

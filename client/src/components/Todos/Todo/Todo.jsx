// Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getCurrentTodoId, updateTodo } from "../../../actions";
// Styles
import "./Todo.css";

const Todo = ({ todo }) => {
  // Redux
  const dispatch = useDispatch();
  const currentTodoId = useSelector(({ currentTodoId }) => currentTodoId);

  // Handle delete
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // Handle edit
  const handleEdit = (id) => {
    dispatch(getCurrentTodoId(id));
  };

  return (
    <div className="todo">
      <div className="todo__title">
        <h4>{todo.title}</h4>
      </div>
      <div className="todo__btns">
        <button className="todo__delBtn" onClick={() => handleEdit(todo._id)}>
          Edit
        </button>
        <button className="todo__delBtn" onClick={() => handleDelete(todo._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;

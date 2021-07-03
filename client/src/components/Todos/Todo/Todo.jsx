// Styles
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <div className="todo__title">
        <h4>{todo.title}</h4>
      </div>
    </div>
  );
};

export default Todo;

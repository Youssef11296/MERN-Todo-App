// Components
import Todo from "./Todo/Todo";
// Redux
import { useSelector } from "react-redux";
// Styles
import "./Todos.css";

const Todos = () => {
  // Redux
  const todos = useSelector(({ todos }) => todos);

  return (
    <div className="todos__container">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default Todos;

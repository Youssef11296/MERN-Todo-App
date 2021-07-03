// Hooks
import { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setCurrentId } from "../../actions";
import todo from "../../reducers/todo";
// Styles
import "./Form.css";

const Form = () => {
  // States
  const [todoData, setTodoData] = useState({ title: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Redux
  const dispatch = useDispatch();
  const currentTodoId = useSelector(({ currentTodoId }) => currentTodoId);

  // Select the current todo
  const todos = useSelector(({ todos }) => todos);
  const todo = todos.find((todo) => todo._id === currentTodoId);

  // Use effect
  useEffect(() => {
    todo && setTodoData({ title: todo.title });
  }, [todo]);

  // Handle input change
  const handleInputChange = (e) => {
    setTodoData({ ...todoData, title: e.target.value });
    setErrorMessage("");
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // If there is a current todo id
    if (currentTodoId) {
      // If the length of the todo title have more than 3 letters
      if (todoData.title.length >= 3) {
        dispatch(updateTodo(currentTodoId, todoData));
        dispatch(setCurrentId());
        setTodoData({ title: "" });
      } else {
        setErrorMessage("The todo must have 3 characters at least");
      }
    }
    // If there is no current todo id
    else {
      // If the length of the todo title have more than 3 letters
      if (todoData.title.length >= 3) {
        dispatch(addTodo(todoData));
        setTodoData({ title: "" });
      } else {
        setErrorMessage("The todo must have 3 characters at least");
      }
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <div className="form__inputField">
          <input
            placeholder="Add a new todo"
            value={todoData.title}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </div>
        <p className="form__error">{errorMessage}</p>
      </form>
    </div>
  );
};

export default Form;

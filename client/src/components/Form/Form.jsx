// Hooks
import { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
// Styles
import "./Form.css";

const Form = () => {
  // States
  const [todoData, setTodoData] = useState({ title: "" });
  const [errorMessage, setErrorMessage] = useState("");
  // Redux
  const dispatch = useDispatch();
  // Handle input change
  const handleInputChange = (e) => {
    setTodoData({ ...todoData, title: e.target.value });
    setErrorMessage("");
  };
  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoData.title.length >= 3) {
      dispatch(addTodo(todoData));
      setTodoData({ title: "" });
    } else {
      setErrorMessage("The todo must have 3 characters at least");
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

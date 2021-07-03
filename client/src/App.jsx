// Hooks
import { useEffect } from "react";
// Components
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
// Redux
import { useDispatch } from "react-redux";
import { fetchTodos } from "./actions";
// Styles
import "./App.css";

function App() {
  const dispatch = useDispatch();
  // Get all todos
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="app">
      <Form />
      <Todos />
    </div>
  );
}

export default App;

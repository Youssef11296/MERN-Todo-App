// Hooks
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
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
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <div className="app__container">
            <Route path="/">
              <Form />
              <Todos />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Hooks
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import About from "./components/About/About";
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
            <Route exact path="/">
              <Form />
              <Todos />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

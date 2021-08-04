import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

import Home from "./Component/Home";
import About from "./Component/About";
import Author from "./Component/Author";
import AddAuthor from "./Component/AddAuthor";
import Course from "./Component/Course";
import AddCourse from "./Component/AddCourse";
import Login from "./Component/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/author" component={Author} />
        <Route exact path="/author/addauthor" component={AddAuthor} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/course/addcourse" component={AddCourse} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavScreen from "./components/Nav";
import HomeScreen from "./components/Home";
import LoginScreen from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
       {/* <NavScreen /> */}
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

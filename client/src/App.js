import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Venus from './components/Venus';
import Mercury from "./components/Mercury";
import Login from "./components/Login";
import Admin from "./components/Admin";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/earth">Earth</Link>
          <Link to="/mars">Mars</Link>
          <Link to="/venus">Venus</Link>
          <Link to="/mercury">Mercury</Link>
          <Link to="/login">Login</Link>
          <h1>HELLO</h1>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/earth">
            <Earth />
          </Route>
          <Route path="/mars">
            <Mars />
          </Route>
          <Route path="/venus">
            <Venus />
          </Route>
          <Route path="/mercury">
            <Mercury />
          </Route>
          <Route path="/login"><Login /></Route>
          <Route path="/admin"> <Admin /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

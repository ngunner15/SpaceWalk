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

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/earth">Earth</Link>
          <Link to="/mars">Mars</Link>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;

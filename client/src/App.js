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

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/mercury">Mercury</Link>
          <Link to="/venus">Venus</Link>
          <Link to="/earth">Earth</Link>
          <Link to="/mars">Mars</Link>
          <Link to="/jupiter">Jupiter</Link>
          <Link to="/saturn">Saturn</Link>
          <Link to="/uranus">Uranus</Link>
          <Link to="/neptune">Neptune</Link>
          <Link to="/pluto">Pluto</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/mercury">
            <Mercury />
          </Route>
          <Route path="/venus">
            <Venus />
          </Route>
          <Route path="/earth">
            <Earth />
          </Route>
          <Route path="/mars">
            <Mars />
          </Route>
          <Route path="/jupiter">
            <Jupiter />
          </Route>
          <Route path="/saturn">
            <Saturn />
          </Route>
          <Route path="/uranus">
            <Uranus />
          </Route>
          <Route path="/neptune">
            <Neptune />
          </Route>
          <Route path="/pluto">
            <Pluto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

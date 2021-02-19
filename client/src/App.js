import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Admin from "./components/Admin";
import Mercury from "./components/planets/Mercury";
import Venus from './components/planets/Venus';
import Earth from './components/planets/Earth';
import Mars from './components/planets/Mars';
import Jupiter from "./components/planets/Jupiter";
import Saturn from "./components/planets/Saturn";
import Uranus from "./components/planets/Uranus";
import Neptune from "./components/planets/Neptune";
import Pluto from "./components/planets/Pluto";
import Apod from './components/Apod';
import PhotoGallery from './components/PhotoGallery';
import Favourites from './components/Favourites';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/mercury'>
            <Mercury />
          </Route>
          <Route path='/venus'>
            <Venus />
          </Route>
          <Route path='/earth'>
            <Earth />
          </Route>
          <Route path='/mars'>
            <Mars />
          </Route>
          <Route path='/jupiter'>
            <Jupiter />
          </Route>
          <Route path='/saturn'>
            <Saturn />
          </Route>
          <Route path='/uranus'>
            <Uranus />
          </Route>
          <Route path='/neptune'>
            <Neptune />
          </Route>
          <Route path='/pluto'>
            <Pluto />
          </Route>
          <Route path="/apod">
            <Apod />
          </Route>
          <Route path="/photos">
            <PhotoGallery />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/admin'>
            {' '}
            <Admin />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <Route path='/favourites'>
            <Favourites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Admin from "./components/Admin";
import Mercury from "./components/Mercury";
import Venus from './components/Venus';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import Pluto from "./components/Pluto";
import Apod from './components/Apod';
import PhotoGallery from './components/PhotoGallery';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Home />
    </div>
    // <Router>
    //   <div className='App'>
    //     <nav>
    //       <Link to="/">Home</Link>
    //       <Link to="/login">Login</Link>
    //       <Link to="/mercury">Mercury</Link>
    //       <Link to="/venus">Venus</Link>
    //       <Link to="/earth">Earth</Link>
    //       <Link to="/mars">Mars</Link>
    //       <Link to="/jupiter">Jupiter</Link>
    //       <Link to="/saturn">Saturn</Link>
    //       <Link to="/uranus">Uranus</Link>
    //       <Link to="/neptune">Neptune</Link>
    //       <Link to="/pluto">Pluto</Link>
    //       <Link to="/apod">APOD</Link>
    //       <Link to="/photos">Photos</Link>
    //     </nav>
    //     <Switch>
    //       <Route path='/' exact component={Home}>
    //         <Home />
    //       </Route>
    //       <Route path='/mercury'>
    //         <Mercury />
    //       </Route>
    //       <Route path='/venus'>
    //         <Venus />
    //       </Route>
    //       <Route path='/earth'>
    //         <Earth />
    //       </Route>
    //       <Route path='/mars'>
    //         <Mars />
    //       </Route>
    //       <Route path='/jupiter'>
    //         <Jupiter />
    //       </Route>
    //       <Route path='/saturn'>
    //         <Saturn />
    //       </Route>
    //       <Route path='/uranus'>
    //         <Uranus />
    //       </Route>
    //       <Route path='/neptune'>
    //         <Neptune />
    //       </Route>
    //       <Route path='/pluto'>
    //         <Pluto />
    //       </Route>
    //       <Route path="/apod">
    //         <Apod />
    //       </Route>
    //       <Route path="/photos">
    //         <PhotoGallery />
    //       </Route>
    //       <Route path='/login'>
    //         <Login />
    //       </Route>
    //       <Route path='/admin'>
    //         {' '}
    //         <Admin />
    //       </Route>
    //       <Route path='/logout'>
    //         <Logout />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;

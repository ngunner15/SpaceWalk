import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

export default function Navbar(props) {
  return (
    <nav className='navbar-items'>
      <Link to='/login'>Login</Link>
      <Link to='/mercury'>Mercury</Link>
      <Link to='/venus'>Venus</Link>
      <Link to='/earth'>Earth</Link>
      <Link to='/mars'>Mars</Link>
      <Link to='/jupiter'>Jupiter</Link>
      <Link to='/saturn'>Saturn</Link>
      <Link to='/uranus'>Uranus</Link>
      <Link to='/neptune'>Neptune</Link>
      <Link to='/pluto'>Pluto</Link>
      <Link to='/apod'>APOD</Link>
      <Link to='/photos'>Photos</Link>
    </nav>
  );
}

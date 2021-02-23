import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function Navigation(props) {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>SpaceWalk</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey="10" href="/login">Login</Nav.Link>
          <Nav.Link eventKey="11" href="/apod">APOD</Nav.Link>
          <Nav.Link eventKey="12" href="/photos">Photos</Nav.Link>
          <Nav.Link eventKey="13" href="/news">News</Nav.Link>
          <NavDropdown title="Planets" id="basic-nav-dropdown">
            <NavDropdown.Item eventKey="1" href="/mercury">Mercury</NavDropdown.Item>
            <NavDropdown.Item eventKey="2" href="/venus">Venus</NavDropdown.Item>
            <NavDropdown.Item eventKey="3" href="/earth">Earth</NavDropdown.Item>
            <NavDropdown.Item eventKey="4" href="/mars">Mars</NavDropdown.Item>
            <NavDropdown.Item eventKey="5" href="/jupiter">Jupiter</NavDropdown.Item>
            <NavDropdown.Item eventKey="6" href="/saturn">Saturn</NavDropdown.Item>
            <NavDropdown.Item eventKey="7" href="/uranus">Uranus</NavDropdown.Item>
            <NavDropdown.Item eventKey="8" href="/neptune">Neptune</NavDropdown.Item>
            <NavDropdown.Item eventKey="9" href="/pluto">Pluto</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

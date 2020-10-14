import React from "react";

import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";

import "./Navigation.css";

function Navigation() {
  return (
    <header class="header sticky-top">
      <NavBar expand="lg" variant="dark" className="navBar ">
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto">
            <Nav.Link className="NavItem" href="/">INICIO</Nav.Link>
            <Nav.Link className="NavItem" href="/servicios">SERVICIOS</Nav.Link>
            <Nav.Link className="NavItem" href="/citas">CITAS</Nav.Link>
            <Nav.Link className="NavItem" href="/cotizacion">COTIZACIÓN</Nav.Link>
            <Nav.Link className="NavItem" href="/contacto">CONTACTO</Nav.Link>
            <Nav.Link className="NavItem" href="/nosotros">NOSOTROS</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </header>

  );
}
export default Navigation;

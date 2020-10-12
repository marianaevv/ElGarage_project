

import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import "./css/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Navigation() {
  return (

    
    <header className="header sticky-top">
      <NavBar expand="lg" variant="dark" className="navBar">
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto ">
            <Nav.Link className="NavItem" href="/">
              INICIO
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Servicios">
              {" "}
              SERVICIOS{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Citas">
              {" "}
              CITAS{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Cotizacion">
              {" "}
              COTIZACIÓN{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Contacto">
              {" "}
              CONTACTO{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Nosotros">
              {" "}
              NOSOTROS{" "}
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </header>

  );
}
export default Navigation;



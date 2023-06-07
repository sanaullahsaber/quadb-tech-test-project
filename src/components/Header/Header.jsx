import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Link className="navbar-brand" to="/">
          Movies Mania
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/bookings">Bookings</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Collapse, Container } from "react-bootstrap";
import "./index.css";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";

const Navigation = () => {
  const [open, setOpen] = useState(false); // State to track if navbar is open or closed
  const [active, setActive] = useState("home"); // State to track active component

  const handleToggle = () => {
    setOpen(!open); // Toggles navbar open and closed
  };

  const handleSelect = (key) => {
    setActive(key); // Sets active component based on the key passed
    setOpen(false); // Closes navbar after selecting a component
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" as="h2">
            Christian Groselle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About me</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./index.css";

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" bg="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/your-username-here">
              <Icon path={mdiGithub} size={1} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/your-username-here/">
              <Icon path={mdiLinkedin} size={1} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;

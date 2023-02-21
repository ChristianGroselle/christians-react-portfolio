import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiStackOverflow } from "@mdi/js";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./index.css";

const Footer = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "var(--secondary-color)",
        color: "var(--text-color)",
      }}
      fixed="bottom"
      className="footer"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/ChristianGroselle">
            <Icon path={mdiGithub} size={1} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/your-username-here/">
            <Icon path={mdiLinkedin} size={1} />
          </Nav.Link>
          <Nav.Link href="https://stackoverflow.com/users/21258799/christiang">
            <Icon path={mdiStackOverflow} size={1} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;

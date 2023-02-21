import React, { useState, useRef } from "react";
import { Navbar, Nav, Container, Fade, Button } from "react-bootstrap";
import "./index.css";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

const Navigation = (props) => {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(true);
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const [isResumeActive, setIsResumeActive] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (key) => {
    setActive(key);
    setOpen(false);
  };

  const handleOnEnter = () => {
    setIsOpen(true);
    setIsCollapsing(true);
  };

  const handleOnExited = () => {
    setIsCollapsing(false);
    if (active === "about") {
      setIsAboutActive(true);
      setIsPortfolioActive(false);
      setIsResumeActive(false);
    } else if (active === "portfolio") {
      setIsAboutActive(false);
      setIsPortfolioActive(true);
      setIsResumeActive(false);
    } else if (active === "resume") {
      setIsAboutActive(false);
      setIsPortfolioActive(false);
      setIsResumeActive(true);
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--text-color)",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" as="h2">
            Christian Groselle
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={active} onSelect={handleSelect}>
              <Nav.Link eventKey="about">About me</Nav.Link>
              <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
              <Nav.Link eventKey="resume">Resume</Nav.Link>
              <Nav.Link onClick={() => setModalShow(true)}>Contact</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={props.onThemeToggle}>
              Switch to {props.theme === "light" ? "dark" : "light"} mode
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {isAboutActive && (
          <Fade
            in={active === "about"}
            onEnter={handleOnEnter}
            onExited={handleOnExited}
          >
            <div ref={aboutRef}>
              <About className={isOpen ? "open" : ""} />
            </div>
          </Fade>
        )}
        {isPortfolioActive && (
          <Fade
            in={active === "portfolio"}
            onEnter={handleOnEnter}
            onExited={handleOnExited}
          >
            <div ref={portfolioRef}>
              <Portfolio className={isOpen ? "open" : ""} />
            </div>
          </Fade>
        )}
        {isResumeActive && (
          <Fade
            in={active === "resume"}
            onEnter={handleOnEnter}
            onExited={handleOnExited}
          >
            <div>
              <Resume className={isOpen ? "open" : ""} />
            </div>
          </Fade>
        )}
        <Contact show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </>
  );
};

export default Navigation;

import React from "react";
import { Navbar } from "react-bootstrap";
import "./index.css";

const footer = () => {
  return (
    <>
      <Navbar fixed="bottom" bg="light">
        <Navbar.Text>© 2023 My Website</Navbar.Text>
      </Navbar>
    </>
  );
};

export default footer;

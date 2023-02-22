import React from "react";
import "./index.css";
import Navigation from "../Navigation";

const Header = (props) => {
  return (
    <>
      <header>
        <Navigation theme={props.theme} onThemeToggle={props.onThemeToggle} />
      </header>
    </>
  );
};

export default Header;

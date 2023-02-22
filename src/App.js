import { useState, useRef } from "react";
import { Collapse, Button, Container, Fade } from "react-bootstrap";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
  };
  return (
    <div className="App" data-theme={theme}>
      <Header
        theme={theme}
        onThemeToggle={() => {
          const html = document.documentElement;
          html.setAttribute("data-theme", theme === "light" ? "dark" : "light");
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <Footer />
    </div>
  );
};

export default App;

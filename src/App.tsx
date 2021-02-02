import React from "react";
import "../public/scss/style.scss";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import NavBar from "./Navbar";
import Home from "./Home";
import Submit from "./Submit";
import About from "./About";

const App = () => {
  return (
    <div className="fill">
      <NavBar />
      <Router className="flex f_column fill">
        <Home path="/" />
        <Submit path="submit" />
        <About path="about" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

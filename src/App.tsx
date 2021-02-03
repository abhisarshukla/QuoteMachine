import React from "react";
import "../public/scss/style.scss";
import ReactDOM from "react-dom";
import NavBar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <div className="main-app">
      <NavBar />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

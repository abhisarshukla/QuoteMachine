import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <h1 className="bg-red-400">
      Hello React!!
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
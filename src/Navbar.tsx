import React, { FunctionComponent } from "react";
import NavItem from "./NavItem";

const NavBar: FunctionComponent = (props) => {
  return (
    <div className="navbar">
      <NavItem innerHTML="Home" />
      <NavItem innerHTML="Submit" />
      <NavItem innerHTML="About" />
    </div>
  );
};

export default NavBar;
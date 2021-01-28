import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import NavItem from "./NavItem";

const NavBar: FunctionComponent = (props) => {
  return (
    <div className="navbar">
      <Link to="/">
        <NavItem innerHTML="Home" />
      </Link>
      <Link to="submit">
        <NavItem innerHTML="Submit" />
      </Link>
      <Link to="about">
        <NavItem innerHTML="About" />
      </Link>
    </div>
  );
};

export default NavBar;

import React, { FunctionComponent } from "react";

interface IProps {
  innerHTML: string;
}

const NavItem: FunctionComponent<IProps> = ({innerHTML}) => {
  return (
    <span className="navitem">{innerHTML}</span>
  );
};

export default NavItem;
import { Item } from "./NavComponent.styled";
import { NavLink } from "react-router-dom";
import React from "react";

const NavComponent = ({ label, link, isExact, icon }) => (
  <NavLink exact={isExact} to={link}>
    <Item>
      {icon}
      {label}
    </Item>
  </NavLink>
);

export default NavComponent;

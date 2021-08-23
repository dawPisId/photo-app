///<reference path="NavItem.d.ts"/>

import { Item } from "./NavItem.styled";
import { NavLink } from "react-router-dom";
import React from "react";

const NavItem: React.FC<NavItemProps> = ({ label, link, isExact, icon }) => (
  <NavLink exact={isExact} to={link}>
    <Item>
      {icon}
      {label}
    </Item>
  </NavLink>
);

export default NavItem;

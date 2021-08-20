import { Item } from "./NavItem.styled";
import { NavLink } from "react-router-dom";
import React from "react";

const NavItem = ({ label, link, isExact, icon }: NavItemProps) => (
  <NavLink exact={isExact} to={link}>
    <Item>
      {icon}
      {label}
    </Item>
  </NavLink>
);

export default NavItem;

import { Item } from "./NavItem.styled";
import { NavLink } from "react-router-dom";
import React from "react";

interface InputProps {
  label: string;
  link: string;
  isExact: boolean;
  icon: any;
}

const NavItem = ({ label, link, isExact, icon }: InputProps) => (
  <NavLink exact={isExact} to={link}>
    <Item>
      {icon}
      {label}
    </Item>
  </NavLink>
);

export default NavItem;

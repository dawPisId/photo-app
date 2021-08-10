import {Item} from "./NavComponent.styled"
import { NavLink } from "react-router-dom";
import React from "react";

function NavComponent({ label, link, exact, icon}) {
  if (exact) {
    return (
      <NavLink exact to={link}>
        <Item>
          {icon}
          {label}
        </Item>
      </NavLink>
    );
  } else {
    return (
      <NavLink to={link} >
        <Item>
          {icon}
          {label}
        </Item>
      </NavLink>
    );
  }
}

export default NavComponent;

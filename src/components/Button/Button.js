import React from "react";
import { Wrapper } from "./Button.styled";

const performFunction = (e,action) =>{
  e.preventDefault();
  action();
}

const Button = ({ name, action }) => (
  <Wrapper onClick={(e) => {performFunction(e,action)}}>{name}</Wrapper>
);

export default Button;

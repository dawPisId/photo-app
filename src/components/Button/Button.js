import React from "react";
import { Wrapper } from "./Button.styled";

const Button = ({ name, action }) => (
  <Wrapper onClick={() => ({ action })}>{name}</Wrapper>
);

export default Button;

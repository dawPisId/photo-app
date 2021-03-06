import { ButtonProps } from "./Button.d";
import React from "react";
import { Wrapper } from "./Button.styled";

const performFunction = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  action: () => void
) => {
  e.preventDefault();
  action();
};

const Button: React.FC<ButtonProps> = ({ name, action }) => (
  <Wrapper
    onClick={(e) => {
      performFunction(e, action);
    }}
  >
    {name}
  </Wrapper>
);

export default Button;

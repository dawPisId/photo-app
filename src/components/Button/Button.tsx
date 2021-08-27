import React, { FC } from "react";

import { ButtonProps } from "./Button.d";
import { Wrapper } from "./Button.styled";

const performFunction = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  action: () => void
) => {
  e.preventDefault();
  action();
};

/**
 * Button component used mainly for the top search bar.
 */
const Button: FC<ButtonProps> = ({ name, action }) => (
  <Wrapper
    onClick={(e) => {
      performFunction(e, action);
    }}
  >
    {name}
  </Wrapper>
);

export default Button;

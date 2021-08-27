import { Icon, Label, Wrapper } from "./Loader.styled";
import React, { FC } from "react";

/**
 * Loader component displayed before the component fetching is done.
 */
const Loader: FC = () => (
  <Wrapper>
    <Icon />
    <Label>Loading</Label>
  </Wrapper>
);

export default Loader;

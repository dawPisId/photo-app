import { Icon, Label, Wrapper } from "./Loader.styled";

import React from "react";

const Loader: React.FC = () => (
  <Wrapper>
    <Icon />
    <Label>Loading</Label>
  </Wrapper>
);

export default Loader;

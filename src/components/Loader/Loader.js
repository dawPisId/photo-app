import {Icon, Label, Wrapper} from "./Loader.styled"

import React from "react";

const Loader = () => (
  <Wrapper>
    <Icon style={{ fontSize: "10rem", display: "block"}} />
    <Label>Loading</Label>
  </Wrapper>
);

export default Loader;

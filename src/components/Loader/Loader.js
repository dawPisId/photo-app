import CachedIcon from "@material-ui/icons/Cached";
import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(360deg);
    transform-origin:center;
  }

  to {
    transform: rotate(0deg);
    transform-origin:center;
  }
`;

const Icon = styled(CachedIcon)`
  animation: ${rotate} 2s linear infinite;
  margin:auto;
`;

const Label = styled.div`
  font-size: 1.5rem;
  display:block;
  text-align:center;
`;

const Wrapper = styled.div`
  margin:5rem 0rem;
`

const Loader = () => (
  <Wrapper>
    <Icon style={{ fontSize: "10rem", display: "block"}} />
    <Label>Loading</Label>
  </Wrapper>
);

export default Loader;

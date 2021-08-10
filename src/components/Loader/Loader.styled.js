import CachedIcon from "@material-ui/icons/Cached";
import { keyframes } from "styled-components";
import styled from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(360deg);
    transform-origin:center;
  }

  to {
    transform: rotate(0deg);
    transform-origin:center;
  }
`;

export const Icon = styled(CachedIcon)`
  animation: ${rotate} 2s linear infinite;
  margin:auto;
`;

export const Label = styled.div`
  font-size: 1.5rem;
  display:block;
  text-align:center;
`;

export const Wrapper = styled.div`
  margin:5rem 0rem;
`
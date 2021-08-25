import { Colors } from "../../Colors";
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: inline-flex;
  background-color: ${Colors.transparent};
  position: relative;
  align-items: center;
  margin: 0rem 0.5rem;
  padding: 0px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  svg {
    vertical-align: center;
    color: grey;
    margin-left: 0.5rem;
  }
`;
export const InputBox = styled.input`
  font-family: "Roboto", sans-serif;
  background-color: ${Colors.transparent};
  font-size: 1.25rem;
  margin: 0.4rem 0rem;
  padding-left:1rem;
  width:100%;
  border-width: 0px;
  &:focus {
    outline: none;
  }
  @media(max-width:640px){
    font-size:1rem;
  }
  @media(max-width:530px){
    font-size:0.75rem;
  }
`;
export const InputLabel = styled.span`
  position: absolute;
  color: grey;
  background-color:white;
  top: -0.6rem;
  left: 0.6rem;
  font-size: 0.75rem;
`;

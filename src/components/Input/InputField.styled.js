import styled from "styled-components";

export const InputWrapper = styled.div`
  display: inline-flex;
  background-color: rgba(255, 0, 0, 0);
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
  background-color: rgba(255, 0, 0, 0);
  font-size: 1.25rem;
  margin: 0.4rem 0rem;
  width: 10rem;
  border-width: 0px;
  &:focus {
    outline: none;
  }
`;
export const InputLabel = styled.span`
  position: absolute;
  color: grey;
  top: -0.6rem;
  left: 1.2rem;
  font-size: 0.75rem;
`;

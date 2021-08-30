import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  svg {
    &.MuiSvgIcon-root {
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

export const SelectItem = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0.9rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  border-radius: 500px;
  &.active {
    background-color: lightgrey;
  }
  @media (max-width: 470px) {
    margin: 0.25rem;
  }
  @media (max-width: 400px) {
    margin: 0;
  }
  @media (max-width: 350px) {
    padding: 0.3rem 0.7rem;
  }
`;

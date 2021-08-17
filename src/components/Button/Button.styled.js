import styled from "styled-components";

export const Wrapper = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  background-color: #e5e5e5;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 4px 3px #aaaaaa;
  @media (max-width: 620px) {
    margin: 1.5rem 0rem 1rem 0rem;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

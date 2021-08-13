import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
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
  cursor: pointer;
  border-radius: 500px;
  &.active {
    background-color: lightgrey;
  }
`;

export const ItemCountWrapper = styled.div`
  position: relative;
`;

export const ItemCountButton = styled.div`
  display: inline-flex;
  align-self: center;
  align-items: center;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-right: 0.5rem;
  margin-left: 2rem;
  cursor: pointer;
  &:active {
    background-color: #d9d9d9;
  }
`;

export const ItemCountList = styled.div`
  font-size: 0.76rem;
  margin: 0rem;
  position: absolute;
  border: 1px solid lightgrey;
  border-top: none;
  border-radius: 5px;
  right: 0px;
  flex-direction: column;
  &.active {
    display: flex;
  }
  &.hidden {
    display: none;
  }
`;

export const ItemCountListItem = styled.div`
  padding: 0.5rem 1.84rem 0.5rem 1.84rem;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;

export const ItemCountNumber = styled.div`
  display: inline-block;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  font-size: 1rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 2px;
`;

export const ItemCountLabel = styled.span`
  position: absolute;
  color: grey;
  top: -0.65rem;
  left: 1rem;
  font-size: 0.75rem;
`;

import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 5px grey;
  padding: 0.5rem;
  height: auto;
  a {
    text-decoration: none;
    color: black;
    align-self: flex-end;
  }
`;

export const Label = styled.span`
  margin-top: 1rem;
  overflow: scroll;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageRow = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  margin: 2rem 0rem 2rem 0rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  img {
    width: 100%;
    height: 80%;
  }
`;

export const Button = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.5rem;
  align-items: center;
  .MuiSvgIcon-root {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

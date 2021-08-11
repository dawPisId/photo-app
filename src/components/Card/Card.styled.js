import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 5px grey;
  height: 20rem;
  overflow: hidden;
  img {
    border-top: 5px;
    min-width: 100%;
    height: 80%;
    display: block;
  }
`;

export const Label = styled.span`
  height: 10%;
  margin: 1rem;
  overflow: scroll;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

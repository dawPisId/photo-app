import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  cursor: pointer;
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
  margin: 1rem 1rem 0.5rem 1rem;
  overflow: scroll;
  -ms-overflow-style: none;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

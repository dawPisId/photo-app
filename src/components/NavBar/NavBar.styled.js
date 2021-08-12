import styled from "styled-components";

export const Header = styled.div`
  display:block;
  height: 4rem;
  background-color:white;
  box-shadow 0px 0px 10px grey;
`;

export const Container = styled.ul`
  padding: 0;
  display: flex;
  font-family: "Roboto" sans-serif;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0em 2rem;
  padding: 1rem 0rem;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Item = styled.li`
  font-size: 1.125rem;
  margin: 0rem 0.5rem;
  svg {
    vertical-align: sub;
    padding: 0 0.5rem;
  }
  span {
    display: inline-block;
  }
`;

export const Logo = styled.li`
  font-size: 1.25rem;
  margin-right: auto;
`;

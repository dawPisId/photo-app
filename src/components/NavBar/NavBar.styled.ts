import styled from "styled-components";

export const Header = styled.div`
  display: block;
`;

export const Container = styled.div`
  padding: 0rem 2rem;
  margin: 0;
  display: flex;
  height: 4rem;
  background-color: white;
  box-shadow: 0px 0px 10px grey;
  font-family: "Roboto" sans-serif;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 576px) {
    height: auto;
    flex-direction: column;
    a {
      padding: 1rem;
    }
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
  @media (max-width: 576px) {
    margin: 0;
    padding: 2rem;
  }
`;

export const Logo = styled.li`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  margin-right: auto;
  @media (max-width: 576px) {
    margin: 1rem 0rem 1rem 0rem;
  }
`;

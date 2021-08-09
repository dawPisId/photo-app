import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PhotoIcon from "@material-ui/icons/Photo";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display:block;
  height: 4rem;
  background-color:white;
  box-shadow 0px 0px 10px grey;
`;

const Container = styled.ul`
  padding: 0;
  display: flex;
  font-family: "Roboto" sans-serif;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0em 2rem;
  padding 1rem 0rem;
  a{
    text-decoration:none;
    color:black;
  }
`;

const Item = styled.li`
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

const Logo = styled.li`
  font-size: 1.25rem;
  margin-right: auto;
`;

const NavBar = () => (
  <Header>
    <Container>
      <Logo>PHOTOS APP</Logo>
      <NavLink exact to="/">
        <Item>
          <PhotoIcon />
          PHOTOS
        </Item>
      </NavLink>
      <NavLink to="/albums">
        <Item>
          <PhotoAlbumIcon />
          ALBUMS
        </Item>
      </NavLink>
      <NavLink to="/profile/1">
        <Item>
          <AccountCircleIcon />
          PROFILE
        </Item>
      </NavLink>
    </Container>
  </Header>
);

export default NavBar;

import { Container, Header, Logo } from "./NavBar.styled.js";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NavComponent from "../NavComponent/NavComponent.js";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PhotoIcon from "@material-ui/icons/Photo";
import React from "react";

const navData = [
  {
    label: "PHOTOS",
    link: "/",
    exact: true,
    icon: <PhotoIcon />,
  },
  {
    label: "ALBUMS",
    link: "/albums",
    exact: false,
    icon: <PhotoAlbumIcon />,
  },
  {
    label: "PROFILE",
    link: "/profile/1",
    exact: false,
    icon: <AccountCircleIcon />,
  },
];

const NavBar = () => (
  <Header>
    <Container>
      <Logo>PHOTOS APP</Logo>
      {navData.map((data, index) => (
        <NavComponent
          link={data.link}
          label={data.label}
          isExact={data.exact}
          icon={data.icon}
          key={index}
        />
      ))}
    </Container>
  </Header>
);

export default NavBar;

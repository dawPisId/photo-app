import { Container, Header, Logo } from "./NavBar.styled";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NavItem from "../NavItem/NavItem";
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

const NavBar: React.FC = () => (
  <Header>
    <Container>
      <Logo>PHOTOS APP</Logo>
      {navData.map(({ link, label, exact, icon }, index) => (
        <NavItem
          link={link}
          label={label}
          isExact={exact}
          icon={icon}
          key={index}
        />
      ))}
    </Container>
  </Header>
);

export default NavBar;

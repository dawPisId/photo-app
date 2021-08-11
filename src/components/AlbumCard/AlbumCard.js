import { Button, ImageRow, Label, Layout } from "./AlbumCard.styled";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import React from "react";

const AlbumCard = ({ name, images, number }) => (
  <Layout>
    <Label>{name}</Label>
    <ImageRow>
      {images.map((link, index) => (
        <img src={link} key={index} alt="" />
      ))}
    </ImageRow>
    <NavLink to={`/albums/${number}/photos/`}>
      <Button>
        SEE MORE
        <ArrowForwardIosIcon />
      </Button>
    </NavLink>
  </Layout>
);

export default AlbumCard;

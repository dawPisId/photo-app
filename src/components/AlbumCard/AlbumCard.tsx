import { AlbumCardProps, StateProps } from "./AlbumCard.d";
import { Button, ImageRow, Label, Layout } from "./AlbumCard.styled";
import React, { FC, useEffect, useState } from "react";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import { URL } from "../../APIAddress";

/**
 * Album card component displaying the 3 first photos from an album, used for Albums page.
 */
const AlbumCard: FC<AlbumCardProps> = ({ name, albumNumber }) => {
  const [photos, setPhotos] = useState<StateProps[]>([]);
  useEffect(() => {
    fetch(`${URL}/albums/${albumNumber}/photos?_start=0&_end=3`)
      .then((response) => response.json())
      .then((responseData) => {
        setPhotos(responseData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [albumNumber]);
  return (
    <Layout data-testid="testAlbumCard">
      <Label>{name}</Label>
      <ImageRow data-testid="imageRow">
        {photos.map((link, index) => (
          <img src={link.url} key={index} alt="" />
        ))}
      </ImageRow>
      <NavLink to={`/albums/${albumNumber}/photos/`}>
        <Button>
          SEE MORE
          <ArrowForwardIosIcon />
        </Button>
      </NavLink>
    </Layout>
  );
};
export default AlbumCard;

import { Button, ImageRow, Label, Layout } from "./AlbumCard.styled";
import React, { useEffect, useState } from "react";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import { URL } from "../../APIAddress";

function AlbumCard({ name, number }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`${URL}/albums/${number}/photos?_start=0&_end=3`)
      .then((response) => response.json())
      .then((responseData) => {
        setPhotos(responseData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [number]);
  return (
    <Layout>
      <Label>{name}</Label>
      <ImageRow>
        {photos.map((link, index) => (
          <img src={link.url} key={index} alt="" />
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
}
export default AlbumCard;

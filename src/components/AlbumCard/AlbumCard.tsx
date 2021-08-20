///<reference path="AlbumCard.d.ts"/>

import { Button, ImageRow, Label, Layout } from "./AlbumCard.styled";
import React, { useEffect, useState } from "react";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import { URL } from "../../APIAddress";

function AlbumCard({ name, albumNumber }:InputProps){
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
    console.log(`${URL}/albums/${albumNumber}/photos?_start=0&_end=3`)
  }, [albumNumber]);
  return (
    <Layout>
      <Label>{name}</Label>
      <ImageRow>
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
}
export default AlbumCard;

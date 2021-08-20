import { Background, CloseButton, Image, Label } from "./ImageZoom.styled";

import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const ImageZoom = ({ setZoomTrigger, imgUrl, imgLabel }:ImageZoomProps) => (
  <Background>
    <CloseButton onClick={(e) => setZoomTrigger(false)}>
      <CloseIcon />
    </CloseButton>
    <Image>
      <img src={imgUrl} alt="" />
    </Image>
    <Label>{imgLabel}</Label>
  </Background>
);

export default ImageZoom;

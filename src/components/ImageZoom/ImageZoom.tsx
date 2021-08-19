import { Background, CloseButton, Image, Label } from "./ImageZoom.styled";

import CloseIcon from "@material-ui/icons/Close";
import React from "react";

interface InputProps {
  setZoomTrigger: (bool:boolean) => void,
  imgUrl: string,
  imgLabel: string
}

const ImageZoom = ({ setZoomTrigger, imgUrl, imgLabel }:InputProps) => (
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

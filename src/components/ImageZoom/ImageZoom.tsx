import { Background, CloseButton, Image, Label } from "./ImageZoom.styled";
import React, { FC } from "react";

import CloseIcon from "@material-ui/icons/Close";
import { ImageZoomProps } from "./ImageZoom.d";

const ImageZoom: FC<ImageZoomProps> = ({
  setZoomTrigger,
  imgUrl,
  imgLabel,
}) => (
  <Background data-testid="testZoom">
    <CloseButton
      data-testid="testButton"
      onClick={(e) => setZoomTrigger(false)}
    >
      <CloseIcon />
    </CloseButton>
    <Image>
      <img src={imgUrl} alt="" />
    </Image>
    <Label>{imgLabel}</Label>
  </Background>
);

export default ImageZoom;

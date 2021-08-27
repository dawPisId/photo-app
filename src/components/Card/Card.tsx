import { Label, Layout } from "./Card.styled";

import { CardProps } from "./Card.d";
import React from "react";

const Card: React.FC<CardProps> = ({ name, url, action }) => (
  <Layout onClick={action}>
    <img src={url} alt={name}></img>
    <Label>{name}</Label>
  </Layout>
);

export default Card;

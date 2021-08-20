import { Label, Layout } from "./Card.styled";

import React from "react";

const Card = ({ name, url, action }:InputProps) => (
  <Layout onClick={action}>
    <img src={url} alt={name}></img>
    <Label>{name}</Label>
  </Layout>
);

export default Card;

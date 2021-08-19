import { Label, Layout } from "./Card.styled";

import React from "react";

interface InputProps {
  name: string,
  url: string,
  action: () => void
}

const Card = ({ name, url, action }:InputProps) => (
  <Layout onClick={action}>
    <img src={url} alt={name}></img>
    <Label>{name}</Label>
  </Layout>
);

export default Card;

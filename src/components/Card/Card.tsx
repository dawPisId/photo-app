import { Label, Layout } from "./Card.styled";
import React, { FC } from "react";

import { CardProps } from "./Card.d";

/**
 * Card component used to display the photos on the Photos page.
 */
const Card: FC<CardProps> = ({ name, url, action }) => (
  <Layout data-testid="testCard" onClick={action}>
    <img src={url} alt={name}></img>
    <Label>{name}</Label>
  </Layout>
);

export default Card;

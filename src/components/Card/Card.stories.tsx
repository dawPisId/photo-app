import { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./Card";
import Grid from "../Grid/Grid";
import React from "react";

export default {
  title: "Photo App/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Grid>
    <Card {...args} />
  </Grid>
);

export const Main = Template.bind({});
Main.args = {
  name: "Card",
  url: "https://via.placeholder.com/600/92c952",
  action: () => null,
};

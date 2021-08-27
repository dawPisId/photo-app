import { ComponentMeta, ComponentStory } from "@storybook/react";

import Grid from "../Grid/Grid";
import ImageZoom from "./ImageZoom";
import React from "react";

export default {
  title: "Photo App/ImageZoom",
  component: ImageZoom,
} as ComponentMeta<typeof ImageZoom>;

const Template: ComponentStory<typeof ImageZoom> = (args) => (
  <ImageZoom {...args} />
);

export const Main = Template.bind({});
Main.args = {
  setZoomTrigger: () => null,
  imgUrl: "https://via.placeholder.com/600/92c952",
  imgLabel: "one",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import Photos from "./Photos";
import React from "react";

export default {
  title: "Photo App/Pages/Photos",
  component: Photos,
} as ComponentMeta<typeof Photos>;

const Template: ComponentStory<typeof Photos> = (args) => (
  <BrowserRouter>
    <Photos />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {};

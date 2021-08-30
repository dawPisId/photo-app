import { ComponentMeta, ComponentStory } from "@storybook/react";

import Albums from "./Albums";
import { BrowserRouter } from "react-router-dom";
import React from "react";

export default {
  title: "Photo App/Pages/Albums",
  component: Albums,
} as ComponentMeta<typeof Albums>;

const Template: ComponentStory<typeof Albums> = (args) => (
  <BrowserRouter>
    <Albums />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {};

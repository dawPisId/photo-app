import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";

export default {
  title: "Photo App/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {};

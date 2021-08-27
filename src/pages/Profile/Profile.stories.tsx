import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import React from "react";

//There is an issue with fetching specifically with this story, i'll need to look into it.
export default {
  title: "Photo App/Pages/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <BrowserRouter>
    <Profile />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {};

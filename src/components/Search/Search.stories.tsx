import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import Search from "./Search";

export default {
  title: "Photo App/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => (
  <BrowserRouter>
    <Search {...args} />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {
  label: "search",
  inputSetter: () => null,
};

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import TopSearchBar from "./TopSearchBar";

export default {
  title: "Photo App/TopSearchBar",
  component: TopSearchBar,
} as ComponentMeta<typeof TopSearchBar>;

const Template: ComponentStory<typeof TopSearchBar> = (args) => (
  <BrowserRouter>
    <TopSearchBar {...args} />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {
  label: "Your Photos",
  setSearchQuery: () => null,
};

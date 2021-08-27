import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import PageSelect from "./PageSelect";
import React from "react";

export default {
  title: "Photo App/PageSelect",
  component: PageSelect,
} as ComponentMeta<typeof PageSelect>;

const Template: ComponentStory<typeof PageSelect> = (args) => (
  <BrowserRouter>
    <PageSelect {...args} />
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {
  currentPage: 10,
  currentPageSetter: () => null,
  pagesCount: 50,
  itemCount: 20,
  itemsPerPageSetter: () => null,
};

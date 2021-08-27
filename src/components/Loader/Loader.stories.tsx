import { ComponentMeta, ComponentStory } from "@storybook/react";

import Loader from "./Loader";
import React from "react";

export default {
  title: "Photo App/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader />;

export const Main = Template.bind({});
Main.args = {};

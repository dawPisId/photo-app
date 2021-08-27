import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";
import React from "react";

export default {
  title: "Photo App/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  name: "Button",
  action: () => null,
};

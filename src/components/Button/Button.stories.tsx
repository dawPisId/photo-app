import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";
import React from "react";

export default {
  title: "Photo App/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Button",
  action: () => null,
  theme: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "Button",
  action: () => null,
  theme: "secondary"
};
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputField from "./InputField";
import React from "react";

export default {
  title: "Photo App/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Main = Template.bind({});
Main.args = {
  label: "one",
  fillValue: "two",
};

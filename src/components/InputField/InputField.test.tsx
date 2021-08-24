import InputField from "./InputField";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<InputField label="one" fillValue="two" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

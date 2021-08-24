import Albums from "./Albums";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Albums />).toJSON();
  expect(tree).toMatchSnapshot();
});

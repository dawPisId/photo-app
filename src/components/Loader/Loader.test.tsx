import Loader from "./Loader";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});

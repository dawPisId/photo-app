import React from "react";
import Search from "./Search";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Search label="search" inputSetter={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import TopSearchBar from "./TopSearchBar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<TopSearchBar label="one" setSearchQuery={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

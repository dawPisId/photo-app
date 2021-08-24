import AlbumGrid from "./AlbumGrid";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <AlbumGrid>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
      </AlbumGrid>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

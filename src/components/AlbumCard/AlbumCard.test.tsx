import AlbumCard from "./AlbumCard";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <AlbumCard name="One" albumNumber={1} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

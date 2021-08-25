import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

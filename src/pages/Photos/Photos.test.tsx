import { BrowserRouter, Route } from "react-router-dom";

import Photos from "./Photos";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Route exact path="/" component={Photos} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

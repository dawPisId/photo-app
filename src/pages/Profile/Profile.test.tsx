import { BrowserRouter, Route } from "react-router-dom";

import Profile from "./Profile";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Route path="/profiles/1" component={Profile} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

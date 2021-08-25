import { BrowserRouter, Route } from "react-router-dom";

import Profile from "./Profile";
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("displays the loader when loading", () => {
  const testRender = render(
    <BrowserRouter>
      <Route path="/profiles/1" component={Profile} />
    </BrowserRouter>
  );
  expect(testRender).toMatchSnapshot();
});

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

import Grid from "./Grid";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Grid>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
      </Grid>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

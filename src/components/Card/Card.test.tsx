import Card from "./Card";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Card
        name="one"
        url="https://via.placeholder.com/600/92c952"
        action={() => null}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import ImageZoom from "./ImageZoom";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ImageZoom
        setZoomTrigger={() => null}
        imgUrl="https://via.placeholder.com/600/92c952"
        imgLabel="one"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

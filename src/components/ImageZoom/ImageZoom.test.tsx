import { fireEvent, render } from "@testing-library/react";

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

it("closes on close button click", () => {
  let tempValue = true;
  const tempfunc = () => {
    tempValue = false;
  };
  const tree = render(
    <ImageZoom
      setZoomTrigger={tempfunc}
      imgUrl="https://via.placeholder.com/600/92c952"
      imgLabel="one"
    />
  );
  fireEvent.click(tree.getByTestId("testButton"));
  expect(tempValue).toEqual(false);
});

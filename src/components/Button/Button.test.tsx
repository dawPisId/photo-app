import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button name="one" action={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("fires the onClick event correctly", () => {
  let tempValue = "";
  const tempFunc = () => {
    tempValue = "correct";
  };
  render(<Button name="one" action={tempFunc} />);
  fireEvent.click(screen.getByRole("button"));
  expect(tempValue).toMatch("correct");
});

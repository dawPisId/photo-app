import { fireEvent, render, screen } from "@testing-library/react";

import React from "react";
import Search from "./Search";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Search label="search" inputSetter={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("passes through the input value", () => {
  let testValue = "";
  const testFunc = (value: string) => (testValue = value);
  const tree = render(<Search label="search" inputSetter={testFunc} />);
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "it works" },
  });
  expect(testValue).toMatch("it works");
});

import { fireEvent, render, screen } from "@testing-library/react";

import React from "react";
import TopSearchBar from "./TopSearchBar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<TopSearchBar label="one" setSearchQuery={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("passes through the search query on button click", () => {
  let testValue = "";
  const testFunc = (value: string) => (testValue = value);
  const tree = render(<TopSearchBar label="one" setSearchQuery={testFunc} />);
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "it works" },
  });
  fireEvent.click(screen.getByRole("button"));
  expect(testValue).toMatch("it works");
});

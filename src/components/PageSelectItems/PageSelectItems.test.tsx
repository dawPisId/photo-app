import { fireEvent, render, screen } from "@testing-library/react";

import PageSelectItems from "./PageSelectItems";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <PageSelectItems
        currentPage={10}
        pageCount={20}
        setCurrentPage={() => null}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("highlights to new page number on click", async () => {
  let tempValue = 10;
  const tempFunc = (value: number) => {
    tempValue = value;
  };
  const { rerender } = render(
    <PageSelectItems
      currentPage={tempValue}
      pageCount={20}
      setCurrentPage={tempFunc}
    />
  );
  fireEvent.click(screen.getByText(11));
  rerender(
    <PageSelectItems
      currentPage={tempValue}
      pageCount={20}
      setCurrentPage={tempFunc}
    />
  );
  expect(screen.getByText(11)).toHaveClass("active");
});

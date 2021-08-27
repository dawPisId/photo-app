import { fireEvent, render, screen } from "@testing-library/react";

import PageSelect from "./PageSelect";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <PageSelect
        currentPage={10}
        currentPageSetter={() => null}
        pagesCount={50}
        itemCount={20}
        itemsPerPageSetter={() => null}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("opens the per page count list on click", async () => {
  const { rerender } = render(
    <PageSelect
      currentPage={10}
      currentPageSetter={() => null}
      pagesCount={50}
      itemCount={20}
      itemsPerPageSetter={() => null}
    />
  );
  fireEvent.click(screen.getByTestId("testButton"));
  expect(screen.getByTestId("testList")).toHaveClass("active");
});

it("hides the per page count list on click", async () => {
  const { rerender } = render(
    <PageSelect
      currentPage={10}
      currentPageSetter={() => null}
      pagesCount={50}
      itemCount={20}
      itemsPerPageSetter={() => null}
    />
  );
  fireEvent.click(screen.getByTestId("testButton"));
  expect(screen.getByTestId("testList")).toHaveClass("active");
  fireEvent.click(screen.getByTestId("testButton"));
  expect(screen).toMatchSnapshot;
});

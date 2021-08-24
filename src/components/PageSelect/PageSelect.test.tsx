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

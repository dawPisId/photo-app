import { BrowserRouter, Route } from "react-router-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import Albums from "./Albums";
import React from "react";
import { mockAlbumsData } from "../../MockAPIOutputs";
import { mount } from "enzyme";

//TODO: possibly move the Data consts to different files.

it("displays the loader when loading", () => {
  const testRender = render(
    <BrowserRouter>
      <Route exact path="/" component={Albums} />
    </BrowserRouter>
  );
  expect(testRender).toMatchSnapshot();
});

it("renders correctly", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockAlbumsData),
  });
  jest.spyOn(window, "fetch").mockImplementationOnce(() => mockFetch as any);
  const testRender = render(
    <BrowserRouter>
      <Route exact path="/" component={Albums} />
    </BrowserRouter>
  );
  await waitFor(() => testRender.getByTestId("testAlbum"));
  expect(testRender).toMatchSnapshot();
});

it("changes per page count", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockAlbumsData),
  });
  jest.spyOn(window, "fetch").mockImplementation(() => mockFetch as any);
  async () => {
    let testRender;
    act(async () => {
      testRender = render(
        <BrowserRouter>
          <Route exact path="/" component={Albums} />
        </BrowserRouter>
      );
      await waitFor(() => testRender.getAllByTestId("testAlbumCard"));
      fireEvent.click(screen.getByTestId("testList"));
      await waitFor(() => testRender.getAllByTestId("testListItem"));
      fireEvent.click(screen.getAllByTestId("testListItem")[1]);
    });
    testRender.rerender(
      <BrowserRouter>
        <Route exact path="/" component={Albums} />
      </BrowserRouter>
    );
    await waitFor(() => testRender.getAllByTestId("testAlbumCard"));
    expect(testRender.getAllByTestId("testAlbumCard").length).toEqual(16);
  };
});

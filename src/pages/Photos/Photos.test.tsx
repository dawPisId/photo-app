import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter, Route } from "react-router-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { mockPhotosData, mockZoomData } from '../../MockAPIOutputs';

import Photos from "./Photos";
import React from "react";

it("displays the loader when loading", () => {
  act(() => {
    const testRender = render(
      <BrowserRouter>
        <Route exact path="/" component={Photos} />
      </BrowserRouter>
    );
    expect(testRender).toMatchSnapshot();
  });
});

it("renders correctly", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockPhotosData),
  });
  jest.spyOn(window, "fetch").mockImplementationOnce(() => mockFetch as any);
  await act(async () => {
    const testRender = render(
      <BrowserRouter>
        <Route exact path="/" component={Photos} />
      </BrowserRouter>
    );
    await waitFor(() => testRender.getByTestId("testPhoto"));
    expect(testRender).toMatchSnapshot();
  });
});

it("displays zoomed image on card click", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockZoomData),
  });
  jest.spyOn(window, "fetch").mockImplementationOnce(() => mockFetch as any);
  await act(async () => {
    const testRender = render(
      <BrowserRouter>
        <Route exact path="/" component={Photos} />
      </BrowserRouter>
    );
    await waitFor(() => testRender.getByTestId("testCard"));
    fireEvent.click(screen.getByTestId("testCard"));
    await waitFor(() => testRender.getByTestId("testZoom"));
    expect(testRender).toMatchSnapshot();
  });
});

it("changes per page count", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockPhotosData),
  });
  jest.spyOn(window, "fetch").mockImplementation(() => mockFetch as any);
  await act(async () => {
    const testRender = render(
      <BrowserRouter>
        <Route exact path="/" component={Photos} />
      </BrowserRouter>
    );
    await waitFor(() => testRender.getAllByTestId("testCard"));
    fireEvent.click(screen.getByTestId("testList"));
    await waitFor(() => testRender.getAllByTestId("testListItem"));
    fireEvent.click(screen.getAllByTestId("testListItem")[1]);
    testRender.rerender(
      <BrowserRouter>
        <Route exact path="/" component={Photos} />
      </BrowserRouter>
    );
    await waitFor(() => testRender.getAllByTestId("testCard"));
    expect(testRender.getAllByTestId("testCard").length).toEqual(16);
  });
});

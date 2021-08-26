import { render, waitFor } from "@testing-library/react";

import AlbumCard from "./AlbumCard";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { mockAlbumCardData } from '../../MockAPIOutputs';

it("renders correctly", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockAlbumCardData),
  });
  jest.spyOn(window, "fetch").mockImplementationOnce(() => mockFetch as any);
  const testRender = render(
    <BrowserRouter>
      <AlbumCard name="one" albumNumber={1} />
    </BrowserRouter>
  );
  await waitFor(() => testRender.getByTestId("imageRow"));
  expect(testRender).toMatchSnapshot();
});

import { render, waitFor } from "@testing-library/react";

import AlbumCard from "./AlbumCard";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const mockResponseData = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
];

it("renders correctly", async () => {
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve(mockResponseData),
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

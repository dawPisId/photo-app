///<reference path="Albums.d.ts"/>

import React, { useEffect, useState } from "react";

import AlbumCard from "../../components/AlbumCard/AlbumCard";
import AlbumGrid from "../../components/AlbumGrid/AlbumGrid";
import Loader from "../../components/Loader/Loader";
import PageSelect from "../../components/PageSelect/PageSelect";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";
import { URL } from "../../APIAddress";

const Albums: React.FC = () => {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState<AlbumsProps[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let firstPhotoIndex = (page - 1) * itemsPerPage;
    setIsLoading(true);
    fetch(`${URL}/albums?q=${query}`)
      .then((response) => response.json())
      .then((responseData) => {
        setPageCount(Math.ceil(responseData.length / itemsPerPage));
        setAlbums(
          responseData.slice(firstPhotoIndex, firstPhotoIndex + itemsPerPage)
        );
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setIsLoading(false));
  }, [itemsPerPage, page, query]);
  return (
    <div>
      <TopSearchBar label="Your Albums" setSearchQuery={setQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <AlbumGrid>
            {albums.map(({ id, title }) => (
              <AlbumCard name={title} albumNumber={id} key={id} />
            ))}
          </AlbumGrid>
          <PageSelect
            currentPage={page}
            currentPageSetter={setPage}
            pagesCount={pageCount}
            itemCount={itemsPerPage}
            itemsPerPageSetter={setItemsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default Albums;

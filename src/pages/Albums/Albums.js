import React, { useEffect, useState } from "react";

import AlbumCard from "../../components/AlbumCard/AlbumCard";
import AlbumGrid from "../../components/AlbumGrid/AlbumGrid";
import PageSelect from "../../components/PageSelect/PageSelect";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";

const links = [
  "https://via.placeholder.com/150/8e973b",
  "https://via.placeholder.com/150/121fa4",
  "https://via.placeholder.com/150/6efc5f",
];

function Albums() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <TopSearchBar label="Your Photos" setSearchQuery={setQuery} />
      <AlbumGrid>
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
        <AlbumCard name="MMMMMMMMMMMM" images={links} />
      </AlbumGrid>
      <PageSelect
        currentPage={page}
        currentPageSetter={setPage}
        pagesCount={pageCount}
        itemCount={itemsPerPage}
        itemsPerPageSetter={setItemsPerPage}
      ></PageSelect>
    </div>
  );
}

export default Albums;

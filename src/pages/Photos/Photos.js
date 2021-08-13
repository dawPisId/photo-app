import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import Loader from "../../components/Loader/Loader";
import PageSelect from "../../components/PageSelect/PageSelect";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";

const URL = "https://jsonplaceholder.typicode.com";

function Photos() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let firstPhotoIndex = (page - 1) * itemsPerPage;
    fetch(`${URL}/photos?q=${query}`)
      .then((response) => response.json())
      .then((responseData) => {
        setPageCount(Math.ceil(responseData.length / itemsPerPage));
        setPhotos(
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
      <TopSearchBar label="Your Photos" setSearchQuery={setQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <Grid>
          {photos.map(({ id, title, thumbnailUrl }) => (
            <Card key={id} name={title} url={thumbnailUrl} />
          ))}
        </Grid>
      )}
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

export default Photos;

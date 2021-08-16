import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import ImageZoom from "../../components/ImageZoom/ImageZoom";
import Loader from "../../components/Loader/Loader";
import PageSelect from "../../components/PageSelect/PageSelect";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";
import { URL } from "../../APIAddress";

function Photos() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomUrl, setZoomUrl] = useState("");
  const [zoomLabel, setZoomLabel] = useState("");

  const zoom = (setZoom, setUrl, imgUrl, setLabel, label) => {
    setUrl(imgUrl);
    setLabel(label);
    setZoom(true);
  };

  useEffect(() => {
    let firstPhotoIndex = (page - 1) * itemsPerPage;
    setIsLoading(true);
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
      {isZoomed && (
        <ImageZoom
          setZoomTrigger={setIsZoomed}
          imgUrl={zoomUrl}
          imgLabel={zoomLabel}
        />
      )}
      <TopSearchBar label="Your Photos" setSearchQuery={setQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <Grid>
          {photos.map(({ id, title, thumbnailUrl, url }) => (
            <Card
              key={id}
              name={title}
              url={thumbnailUrl}
              action={() => {
                zoom(setIsZoomed, setZoomUrl, url, setZoomLabel, title);
              }}
            />
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

import React, { FC, useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import ImageZoom from "../../components/ImageZoom/ImageZoom";
import Loader from "../../components/Loader/Loader";
import PageSelect from "../../components/PageSelect/PageSelect";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";
import { URL } from "../../APIAddress";
import { idInterface } from "./Photos.d";
import { useParams } from "react-router-dom";
import { zoom } from "../../components/PageSelect/helpers";

/**
 * Component used to display the final layout of the Photos page.
 */
const Photos: FC = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomUrl, setZoomUrl] = useState("");
  const [zoomLabel, setZoomLabel] = useState("");
  const { id }: idInterface = useParams();

  useEffect(() => {
    const valueCheck = typeof id === "string";
    const path = valueCheck ? `albums/${id}/photos` : "photos";
    const firstPhotoIndex = (page - 1) * itemsPerPage;
    setIsLoading(true);
    fetch(`${URL}/${path}?q=${query}`)
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
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemsPerPage, id, page, query]);

  return (
    <div>
      {isZoomed && (
        <ImageZoom
          data-testid="testZoom"
          setZoomTrigger={setIsZoomed}
          imgUrl={zoomUrl}
          imgLabel={zoomLabel}
        />
      )}
      <TopSearchBar label="Your Photos" setSearchQuery={setQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <div data-testid="testPhoto">
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
        </div>
      )}
      <PageSelect
        currentPage={page}
        currentPageSetter={setPage}
        pagesCount={pageCount}
        itemCount={itemsPerPage}
        itemsPerPageSetter={setItemsPerPage}
      />
    </div>
  );
};

export default Photos;

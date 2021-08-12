import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import PageSelect from "../../components/PageSelect/PageSelect";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";

const URL = "https://jsonplaceholder.typicode.com";

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`${URL}/albums/2/photos`)
      .then((response) => response.json())
      .then((responseData) => setPhotos(responseData))
      .catch((error) => {
        console.log(`{${URL}/albums/2/photos}`, error);
      });
  }, []);

  return (
    <div>
      <TopSearchBar label="Your Photos" />
      <Grid>
        {photos.map(({ id, title, thumbnailUrl }) => (
          <Card key={id} name={title} url={thumbnailUrl} />
        ))}
      </Grid>
      <PageSelect></PageSelect>
    </div>
  );
}

export default Photos;

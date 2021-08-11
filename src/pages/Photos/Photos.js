import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
      .then((response) => response.json())
      .then((responseData) => setPhotos(responseData))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <TopSearchBar label="Your Photos" />
      <Grid>
        {photos.map((photo) => (
          <Card key={photo.id} name={photo.title} url={photo.thumbnailUrl} />
        ))}
      </Grid>
    </div>
  );
}

export default Photos;

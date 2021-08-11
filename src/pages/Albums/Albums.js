import React, { useEffect, useState } from "react";

import AlbumCard from "../../components/AlbumCard/AlbumCard";
import AlbumGrid from "../../components/AlbumGrid/AlbumGrid";
import TopSearchBar from "../../components/TopSearchBar/TopSearchBar";

const links = [
  "https://via.placeholder.com/150/8e973b",
  "https://via.placeholder.com/150/121fa4",
  "https://via.placeholder.com/150/6efc5f",
];

function Albums() {
  return (
    <div>
      <TopSearchBar label="Your Albums" />
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
    </div>
  );
}

export default Albums;

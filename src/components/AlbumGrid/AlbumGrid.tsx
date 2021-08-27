import React, { FC } from "react";

import { Layout } from "./AlbumGrid.styled";

const AlbumGrid: FC<any> = ({ children }) => <Layout>{children}</Layout>;

export default AlbumGrid;

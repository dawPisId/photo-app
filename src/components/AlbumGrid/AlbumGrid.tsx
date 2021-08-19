///<reference path="AlbumGrid.d.ts"/>
import { Layout } from "./AlbumGrid.styled";
import React from "react";

const Grid:React.FC<> = ({ children }:any) => <Layout>{children}</Layout>;

export default Grid;

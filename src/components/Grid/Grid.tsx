///<reference path="Grid.d.ts"/>

import { Layout } from "./Grid.styled";
import React from "react";

const Grid: React.FC<any> = ({ children }) => <Layout>{children}</Layout>;

export default Grid;

import React, { FC } from "react";

import { Layout } from "./Grid.styled";

const Grid: FC<any> = ({ children }) => <Layout>{children}</Layout>;

export default Grid;

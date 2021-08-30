import { ComponentMeta, ComponentStory } from "@storybook/react";

import AlbumCard from "./AlbumCard";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import { BrowserRouter } from "react-router-dom";
import React from "react";

export default {
  title: "Photo App/AlbumCard",
  component: AlbumCard,
} as ComponentMeta<typeof AlbumCard>;

const Template: ComponentStory<typeof AlbumCard> = (args) => (
  <BrowserRouter>
    <AlbumGrid>
      <AlbumCard {...args} />
    </AlbumGrid>
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {
  name: "AlbumCard",
  albumNumber: 1,
};

import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Profile from "./Profile";
import React from "react";

//There is an issue with fetching specifically with this story, i'll need to look into it.
export default {
  title: "Photo App/Pages/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
    <MemoryRouter initialEntries={["/profile/1"]}>
      <Route path="/profile/:id">
        <Profile />
      </Route>
    </MemoryRouter>
);

export const Main = Template.bind({});
Main.args = {};

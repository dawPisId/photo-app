import { BrowserRouter } from "react-router-dom";
import NavItem from "./NavItem";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavItem label = "one" link = "/" isExact = {true} icon = {<div/>}/>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

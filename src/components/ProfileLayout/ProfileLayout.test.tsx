import ProfileLayout from "./ProfileLayout";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tempUser = {
    name: "",
    phone: "",
    username: "",
    website: "",
    email: "",
    address: {
      street: "",
      city: "",
      suite: "",
      zipcode: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const tree = renderer.create(<ProfileLayout user={tempUser} />).toJSON();
  expect(tree).toMatchSnapshot();
});

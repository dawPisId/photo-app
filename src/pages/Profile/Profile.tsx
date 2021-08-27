import { Container, Header } from "./Profile.styled";
import React, { FC, useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";
import { URL } from "../../APIAddress";
import { idInterface } from "./Profile.d";
import { useParams } from "react-router";

const initUser = {
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

/**
 * Component used to display the final layout of the Profile page.
 */
const Profile:FC = () => {
  const [user, setUser] = useState(initUser);
  const [isLoading, setIsLoading] = useState(true);
  const { id }: idInterface = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${URL}/users/${id}/`)
      .then((response) => response.json())
      .then((responseData) => {
        setUser(responseData);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header>Your Profile</Header>
          <Container>
            <ProfileLayout user={user} />
          </Container>
        </div>
      )}
    </div>
  );
}

export default Profile;

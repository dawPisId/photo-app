import { Container, Header } from "./Profile.styled";
import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";
import { URL } from "../../APIAddress";
import { useParams } from "react-router";

function Profile({ match }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

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

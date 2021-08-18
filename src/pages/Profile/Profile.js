import { Container, Header } from "./Profile.styled";
import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";
import { URL } from "../../APIAddress";

function Profile({ match }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${URL}/users/${match.params.id}/`)
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
  }, [match.params.id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header>Your Profile</Header>
          <Container>
            <ProfileLayout
              personalInfo={user}
              addressInfo={user.address}
              companyInfo={user.company}
            />
          </Container>
        </div>
      )}
    </div>
  );
}

export default Profile;

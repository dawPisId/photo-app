import { Container, Header } from "./Profile.styled";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";

import Loader from "../../components/Loader/Loader";
import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";
import { URL } from "../../APIAddress";

interface idInterface{
  id:string;
}

interface InputProps{
  match:string
}

interface UserInterface{
    name: string;
    phone: string;
    username: string;
    website: string;
    email: string;
    address: {
      street: string;
      city: string;
      suite: string;
      zipcode: string;
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
}

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
    }
  }

function Profile({ match }:RouteComponentProps<InputProps>) {
  const [user, setUser] = useState(initUser);
  const [isLoading, setIsLoading] = useState(true);
  const { id }:idInterface = useParams();

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

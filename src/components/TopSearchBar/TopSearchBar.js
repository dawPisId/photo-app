import { Container, Label } from "./TopSearchBar.styled";

import Button from "../../components/Button/Button";
import InputField from "../../components/Input/InputField";
import React from "react";

const TopSearchBar = ({ label }) => (
  <Container>
    <Label>{label}</Label>
    <InputField label="Search by title" />
    <Button name="SEARCH"></Button>
  </Container>
);

export default TopSearchBar;

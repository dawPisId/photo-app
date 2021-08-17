import { Container, Label } from "./TopSearchBar.styled";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import InputField from "../../components/Input/InputField";

function TopSearchBar({ label, setSearchQuery }) {
  const [inputQuery, setInputQuery] = useState("");
  return (
    <Container>
      <Label>{label}</Label>
      <InputField inputSetter={setInputQuery} label="Search by title" />
      <Button
        name="SEARCH"
        action={() => {
          setSearchQuery(inputQuery);
        }}
      ></Button>
    </Container>
  );
}

export default TopSearchBar;

import { Container, Label } from "./TopSearchBar.styled";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import { TopSearchBarProps } from "./TopSearchBar.d";

const TopSearchBar: React.FC<TopSearchBarProps> = ({
  label,
  setSearchQuery,
}) => {
  const [inputQuery, setInputQuery] = useState("");
  return (
    <Container>
      <Label>{label}</Label>
      <Search inputSetter={setInputQuery} label="Search by title" />
      <Button name="SEARCH" action={() => setSearchQuery(inputQuery)}></Button>
    </Container>
  );
};

export default TopSearchBar;
